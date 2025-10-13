import React, { useRef, useMemo } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// ASCII characters for the matrix effect
const ASCII_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

// Shader material for rendering ASCII characters with glow
const MatrixMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    charTexture: null,
    videoTexture: null,
    glowIntensity: 1.0,
    aspectRatio: 1.0,
    mousePosition: new THREE.Vector2(0, 0),
    useVideo: 0.0,
    clickTime: 0.0,
    clickPosition: new THREE.Vector2(0, 0),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec2 resolution;
    uniform sampler2D charTexture;
    uniform sampler2D videoTexture;
    uniform float glowIntensity;
    uniform float aspectRatio;
    uniform vec2 mousePosition;
    uniform float useVideo;
    uniform float clickTime;
    uniform vec2 clickPosition;

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Create grid pattern that adapts to aspect ratio
      float gridWidth = 80.0;
      float gridHeight = 40.0;

      // Adjust grid density to maintain square character cells
      if (aspectRatio > 1.0) {
        gridWidth = 80.0 * aspectRatio;
        gridHeight = 40.0;
      } else {
        gridWidth = 80.0;
        gridHeight = 40.0 / aspectRatio;
      }

      vec2 grid = floor(uv * vec2(gridWidth, gridHeight));
      vec2 gridUv = fract(uv * vec2(gridWidth, gridHeight));

      // Generate random values based on grid position
      float random = fract(sin(dot(grid, vec2(12.9898, 78.233))) * 43758.5453);
      float random2 = fract(sin(dot(grid + 1.0, vec2(12.9898, 78.233))) * 43758.5453);

      // Animate characters with different speeds for each column
      float charIndex = floor(random * 64.0 + time * (0.5 + random * 0.5));
      charIndex = mod(charIndex, 64.0); // Keep within bounds of available characters
      float glow = random2 * glowIntensity;

      // Sample character from texture (8x8 grid of characters)
      vec2 charUv = vec2(mod(charIndex, 8.0) / 8.0, floor(charIndex / 8.0) / 8.0);
      charUv += gridUv / 8.0;

      vec4 charColor = texture2D(charTexture, charUv);

      // Calculate distance from mouse cursor (accounting for aspect ratio)
      vec2 delta = uv - mousePosition;
      delta.x *= aspectRatio; // Compensate for horizontal stretch
      float distanceFromMouse = length(delta);
      float mouseGlowRadius = 0.1; // Adjust this for glow radius
      float mouseGlow = 0.0;

      // Only apply mouse glow if mouse is on screen (not at default off-screen position)
      if (mousePosition.x >= 0.0 && mousePosition.y >= 0.0) {
        mouseGlow = max(0.0, 1.0 - distanceFromMouse / mouseGlowRadius);
        mouseGlow = smoothstep(0.0, 1.0, mouseGlow);
      }

      // Sample video texture for glow values
      float videoGlow = 0.0;
      if (useVideo > 0.5) {
        vec4 videoColor = texture2D(videoTexture, uv);
        // Convert to brightness (luminance)
        videoGlow = dot(videoColor.rgb, vec3(0.299, 0.587, 0.114));
      }

      // Base character color (dark grey) and glow (bright green)
      float charAlpha = charColor.a;
      vec3 baseColor = vec3(0.005, 0.005, 0.005); // Dark grey base

      // Calculate click ring effect
      float clickRing = 0.0;
      if (clickTime > 0.0) {
        float timeSinceClick = time - clickTime;
        float ringSpeed = 2.0; // How fast the ring expands
        float ringWidth = 0.02; // Width of the ring
        float maxRadius = 0.8; // Maximum radius before fading

        // Calculate distance from click position
        vec2 clickDelta = uv - clickPosition;
        clickDelta.x *= aspectRatio; // Account for aspect ratio
        float distanceFromClick = length(clickDelta);

        // Create expanding ring
        float ringRadius = timeSinceClick * ringSpeed;
        float ringDistance = abs(distanceFromClick - ringRadius);

        // Ring effect with fade out
        if (ringRadius < maxRadius) {
          float ringIntensity = 1.0 - ringDistance / ringWidth;
          ringIntensity = smoothstep(0.0, 1.0, ringIntensity);
          ringIntensity *= 1.0 - ringRadius / maxRadius; // Fade out as ring expands
          clickRing = ringIntensity;
        }
      }

      // Combine mouse glow, video glow, and click ring
      float totalGlow = max(max(mouseGlow, videoGlow), clickRing);
      vec3 glowColor = vec3(0.0, 1.0, 0.0) * totalGlow * 1.0; // Bright green glow
      vec3 finalColor = baseColor * charAlpha + glowColor * charAlpha;

      // Add some variation in brightness
      finalColor *= 0.8 + random * 0.4;

      // Keep background black
      gl_FragColor = vec4(finalColor, charAlpha);
    }
  `,
);

// Extend the material
extend({ MatrixMaterial });

function MatrixBackground({ videoSrc = null }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const { size, camera } = useThree();
  const [mousePosition, setMousePosition] = React.useState([-1, -1]); // Start off-screen
  const [videoTexture, setVideoTexture] = React.useState(null);
  const videoRef = React.useRef();
  const [clickTime, setClickTime] = React.useState(0);
  const [clickPosition, setClickPosition] = React.useState([0, 0]);

  // Calculate plane size to match camera viewport
  const aspectRatio = size.width / size.height;
  const planeWidth = aspectRatio > 1 ? 2 * aspectRatio : 2;
  const planeHeight = aspectRatio > 1 ? 2 : 2 / aspectRatio;

  // Create ASCII character texture
  const charTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 1024;

    // Set background to transparent
    ctx.clearRect(0, 0, 1024, 1024);

    // Draw ASCII characters
    ctx.fillStyle = "#ffffff"; // White characters that we'll tint in shader
    ctx.font = "128px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < ASCII_CHARS.length; i++) {
      const x = (i % 8) * 128 + 64;
      const y = Math.floor(i / 8) * 128 + 64;
      ctx.fillText(ASCII_CHARS[i], x, y);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    return texture;
  }, []);

  // Create video texture
  React.useEffect(() => {
    if (videoSrc) {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      video.addEventListener("loadeddata", () => {
        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        setVideoTexture(texture);
        video.play();
      });

      video.src = videoSrc;
      videoRef.current = video;

      return () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.src = "";
        }
      };
    }
  }, [videoSrc]);

  // Animation loop
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
      materialRef.current.resolution.set(size.width, size.height);
      materialRef.current.charTexture = charTexture;
      materialRef.current.aspectRatio = aspectRatio;
      materialRef.current.mousePosition.set(mousePosition[0], mousePosition[1]);

      // Update video texture if available
      if (videoTexture) {
        materialRef.current.videoTexture = videoTexture;
        materialRef.current.useVideo = 1.0;
      } else {
        materialRef.current.useVideo = 0.0;
      }

      // Update click data
      if (clickTime === 0 && clickPosition[0] !== 0) {
        // Set the click time on the first frame after click
        materialRef.current.clickTime = state.clock.elapsedTime;
        setClickTime(state.clock.elapsedTime);
      } else {
        materialRef.current.clickTime = clickTime;
      }
      materialRef.current.clickPosition.set(clickPosition[0], clickPosition[1]);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerMove={(e) => {
        // Convert screen coordinates to UV coordinates
        const x = e.uv.x;
        const y = e.uv.y;
        setMousePosition([x, y]);
      }}
      onPointerDown={(e) => {
        // Handle click to create expanding ring
        const x = e.uv.x;
        const y = e.uv.y;
        setClickPosition([x, y]);
        // Use current time from the animation frame
        setClickTime(0); // Will be updated in the next frame
      }}
    >
      <planeGeometry args={[planeWidth, planeHeight]} />
      <matrixMaterial ref={materialRef} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

export default MatrixBackground;
