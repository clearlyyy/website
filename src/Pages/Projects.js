import "../Page.css";

function Projects() {
  return (
    <>
      <h1 className="proj-page-title">Here are some of my Projects</h1>
      <div className="proj-page">
        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">S&Miner</h2>
              <h4 className="desc">
                S&Miner is a voxel based incremental mining game built in the
                S&Box Engine, It features a custom built voxel engine, and
                utlizes Valve's Source 2 toolchain for building the game world,
                player tools, and animations. It features a custom-built python
                back-end for storing and retrieving players stats on the cloud.
              </h4>
              <h2 className="year2">
                2025 - 8k+ Players - #1 Trending on S&Box
              </h2>
            </div>
            <img
              src="imgs/sminer_box.png"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open("https://sbox.game/clearlyy/s_miner", "_blank")
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C#</h4>
            <h4 className="tech-entry">Razor</h4>
            <h4 className="tech-entry">Python</h4>
            <h4 className="tech-entry">S&Box</h4>
            <h4 className="tech-entry">Blender</h4>
            <h4 className="tech-entry">Substance 3D</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">Sol-System.live</h2>
              <h4 className="desc">
                Sol-System.live lets you explore the solar system in real-time,
                featuring major moons and detailed data on each celestial body.
                Built in React with react-three-fiber, it uses two-body orbital
                physics and NASA JPL data with Kepler’s equations to simulate
                accurate future positions of planets and moons.
              </h4>
              <h2 className="year">2025</h2>
            </div>
            <img
              src="imgs/sol-system.gif"
              alt="S&Miner"
              className="proj-img"
              onClick={() => window.open("https://sol-system.live", "_blank")}
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">Javascript</h4>
            <h4 className="tech-entry">React</h4>
            <h4 className="tech-entry">react-three-fiber</h4>
            <h4 className="tech-entry">Python</h4>
            <h4 className="tech-entry">WebGL</h4>
            <h4 className="tech-entry">GLSL</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">Clear Engine</h2>
              <h4 className="desc">
                An OpenGL Engine for creating 3D Graphics, With a deferred
                rendering pipeline, supporting a variety of post-processing
                effects. Uses light mapping and shadow mapping to create
                realistic light and shadow effects. Written in C++ with OpenGL.
                Largely Unfinished currently.
              </h4>
              <h2 className="year">2025</h2>
            </div>
            <img
              src="imgs/clear-engine.gif"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open(
                  "https://github.com/clearlyyy/clear-engine",
                  "_blank",
                )
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C++</h4>
            <h4 className="tech-entry">OpenGL</h4>
            <h4 className="tech-entry">GLSL</h4>
            <h4 className="tech-entry">ImGUI</h4>
            <h4 className="tech-entry">GLFW</h4>
            <h4 className="tech-entry">GLM</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">Shopdawg</h2>
              <h4 className="desc">
                A Feature Complete E-Commerce platform i built for my dad. It
                features a fully functional product catalog, controlled via a
                python backend server. Along with a complete payment system
                using Stripe. Site was built in a week with React and
                MaterialUI. Linked site is a live Demo.
              </h4>
              <h2 className="year">2025</h2>
            </div>
            <img
              src="imgs/shopdog.gif"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open("https://clearlyyy.github.io/shopdawg/", "_blank")
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">Javascript</h4>
            <h4 className="tech-entry">React</h4>
            <h4 className="tech-entry">Python</h4>
            <h4 className="tech-entry">Flask</h4>
            <h4 className="tech-entry">MaterialUI</h4>
            <h4 className="tech-entry">Stripe</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">Spleef</h2>
              <h4 className="desc">
                Spleef is a voxel-based PvP game where players compete to dig
                snow underneath other players, causing them to fall to their
                death. Built in the S&Box engine and utilizing Source 2 tooling.
                The game features fast-paced matches, dynamic terrain
                destruction, and competitive multiplayer.
              </h4>
              <h2 className="year">2025</h2>
            </div>
            <img
              src="imgs/spleef.png"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open("https://sbox.game/clearlyy/spleef", "_blank")
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C#</h4>
            <h4 className="tech-entry">Razor</h4>
            <h4 className="tech-entry">S&Box</h4>
            <h4 className="tech-entry">Blender</h4>
            <h4 className="tech-entry">Substance 3D</h4>
            <h4 className="tech-entry">Source 2 Tools</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">sfml-console</h2>
              <h4 className="desc">
                sfml-console is a GUI framework providing developers with an
                easy to use and setup in-game console for their SFML games. The
                entire console is contained in a single header file, and utlizes
                SFML's graphics to draw it. It supports variable line sizing and
                color. And is built purely with C++.
              </h4>
              <h2 className="year">2025</h2>
            </div>
            <img
              src="imgs/gif1.gif"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open(
                  "https://github.com/clearlyyy/sfml-console",
                  "_blank",
                )
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C++</h4>
            <h4 className="tech-entry">SFML</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">Powder Game</h2>
              <h4 className="desc">
                Simple Powder game with different materials using cellular
                automata to simulate the interactions between them. Uses
                multithreaded "zones" for higher performance. Manages ~70fps
                with over 200,000 particles on screen on my system. Built with
                C++ Using SFML.
              </h4>
              <h2 className="year">2024</h2>
            </div>
            <img
              src="imgs/game.gif"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open("https://github.com/clearlyyy/PowderGame", "_blank")
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C++</h4>
            <h4 className="tech-entry">SFML</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">SFML-GUI</h2>
              <h4 className="desc">
                sfml-gui is a GUI Framework giving developers an easy to use
                user interface mainly for internal use, similar to imgui. Built
                in C++ using SFML. It provides lightweight, customizable
                components designed for quick integration into your projects.
              </h4>
              <h2 className="year">2021</h2>
            </div>
            <img
              src="imgs/sfml-gui.png"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open("https://github.com/clearlyyy/sfml-gui", "_blank")
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">C++</h4>
            <h4 className="tech-entry">SFML</h4>
          </div>
        </div>

        <div className="proj-container">
          <div className="title-img">
            <div>
              <h2 className="proj-title">ViewBot Analysis Tool</h2>
              <h4 className="desc">
                A Twitch/Kick View bot analysis tool that monitors chatrooms
                logging and tracking Average Viewership and compares that to
                unique chatters to find a ratio (Viewer Count/Unique Chatters)
                and Dumps the data into a nicely organized CSV File to determine
                whether viewbots are being used.
              </h4>
              <h2 className="year">2024</h2>
            </div>
            <img
              src="imgs/kicktwitch.png"
              alt="S&Miner"
              className="proj-img"
              onClick={() =>
                window.open(
                  "https://github.com/clearlyyy/ViewbotAnalysisTool",
                  "_blank",
                )
              }
            />
          </div>
          <div className="tech">
            <h4 className="tech-entry">Python</h4>
            <h4 className="tech-entry">Selenium</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
