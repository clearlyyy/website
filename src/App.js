import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
  BrightnessContrast,
} from "@react-three/postprocessing";
import MatrixBackground from "./components/MatrixBackground";
import "./App.css";
import Page from "./Page";

function ResponsiveCamera() {
  const { size, camera } = useThree();
  const aspectRatio = size.width / size.height;

  React.useEffect(() => {
    if (camera && camera.isOrthographicCamera) {
      const orthoCamera = camera;
      orthoCamera.left = aspectRatio > 1 ? -aspectRatio : -1;
      orthoCamera.right = aspectRatio > 1 ? aspectRatio : 1;
      orthoCamera.top = aspectRatio > 1 ? 1 : 1 / aspectRatio;
      orthoCamera.bottom = aspectRatio > 1 ? -1 : -1 / aspectRatio;
      orthoCamera.updateProjectionMatrix();
    }
  }, [size.width, size.height, camera]);

  return (
    <OrthographicCamera
      makeDefault
      position={[0, 0, 1]}
      zoom={1}
      left={aspectRatio > 1 ? -aspectRatio : -1}
      right={aspectRatio > 1 ? aspectRatio : 1}
      top={aspectRatio > 1 ? 1 : 1 / aspectRatio}
      bottom={aspectRatio > 1 ? -1 : -1 / aspectRatio}
    />
  );
}

function App() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Initial size set
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Canvas
        style={{ background: "#000", width: "100%", height: "100%" }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
      >
        <ResponsiveCamera />
        <MatrixBackground videoSrc="/fish.mp4" />
        <EffectComposer>
          <Bloom
            threshold={0.1}
            intensity={8}
            luminanceThreshold={0.3}
            radius={0.6}
          />
          <ChromaticAberration offset={[0.002, 0.002]} />
          <Vignette darkness={0.3} offset={0.5} />
          <BrightnessContrast brightness={0.1} contrast={0.1} />
        </EffectComposer>
      </Canvas>
      <Page />
      <h2 className="footer">
        <img className="svg-logo" src="/imgs/x_logo.svg" alt="X Logo" />
        <a className="footer-link" href="https://x.com/devclearly">
          @devclearly
        </a>

        <img className="svg-logo" src="/imgs/github.svg" alt="X Logo" />
        <a className="footer-link" href="https://github.com/clearlyyy">
          @clearlyyy
        </a>
      </h2>
    </div>
  );
}

export default App;
