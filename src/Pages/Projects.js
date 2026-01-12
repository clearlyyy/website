

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const projects = [
  {
    id: 1,
    title: 'S&Miner',
    shortDesc: 'A Voxel-Based Mining game',
    fullDesc: `S&Miner is a voxel-based mining game that combines exploration, progression, and a variety of in-game systems to keep players engaged and constantly discovering new challenges.

Made in September 2025 and actively maintained and developed since using player feedback.

## Features
* Tons of in-game systems to keep players engaged like: Player Stats, Stat Bonuses, Effects, Gambling, Auto Drilling, Refining, Loot Chests, Leveling and Prestiging.
* Custom-made Voxel World with major optimizations using S&Box's procedural mesh building system
* Currently has 8 total unique depth levels, letting players advance and progress through deeper and deeper caves.

## Technologies Used
- C# For Game Systems
- Razor/SCSS For in-game UI screens.
- Blender & Substance Painter for creation of 3D Models
- Valve's Source 2 toolchain (ModelDoc, AnimGraphs, etc)
- Python (Flask) for backend server
`,
    stats: { users: '17,000+', downloads: '15k', rating: 'Generated over $36,000' },
    showStats: true,
    images: ['/imgs/ICON_LEVEL8.png', '/imgs/load.png', '/imgs/img2.png', '/imgs/sminer1.jpg', '/imgs/statsscreen.png', '/imgs/gameplay1.png', '/imgs/refineryautodrill.png', '/imgs/buysellstations.png'],
    link: 'https://sbox.game/clearlyy/s_miner',
    showLink: true,
    github: null,
    showGithub: false
  },
  {
    id: 2,
    title: 'Sol-System.live',
    shortDesc: '3D Web-Based Solar System Simulator',
    fullDesc: `Sol-System.Live is a 3D Live Solar System Simulator, it lets you track all planets and their major moons, see information about thme, and even edit and play with their orbits.

## Key Highlights
- **3D Visualization**: Interactive 3D models of the solar system.
- **Live Data**: Uses Keplers Equations for realtime data on the positions of all celestial bodies.
- **Educational Tool**: Great for learning about astronomy and the solar system, aswell as orbital mechanics.

## Built With
- React with Javascript
- Three.js for 3D graphics
- Python for backend tooling
- NASA's JPL Repository for information on all celestial bodies.
`,
    showStats: false,
    images: ['/imgs/sol-system.gif', 'imgs/sol-system-box.png'],
    link: 'https://sol-system.live',    showLink: true,    github: 'https://github.com/clearlyyy/sol-system',
    showGithub: true
  },

  {
    id: 3,
    title: 'Lunarlander.io',
    shortDesc: '3D Lunar landing simulator',
    fullDesc: `Lunarlander.io is a 3D Apollo lunar lander simulator, it features a 1/4th scale version of our moon, and obstacle courses!

## Key Highlights
- **Real Moon**: Features a 1/4th scale version of the moon provided by Cesium!
- **Newtonian Physics**: Uses Newtonian physics, letting players go into orbit!
- **Educational Tool**: Great for learning about Apollo and our Moon!

## Built With
- React with Javascript
- Three.js for 3D graphics
- AmmoLib for Physics
- Cesium with Tile-Based Spherical Renderer to draw the moon!
`,
    showStats: false,
    images: ['/imgs/lunarlander.gif'],
    link: 'https://lunarlander.io',    showLink: true,    github: 'https://github.com/clearlyyy/lunarlander',
    showGithub: true
  },

  {
    id: 4,
    title: 'Clear Engine',
    shortDesc: 'OpenGL Engine',
    fullDesc: `Clear engine is an work-in-progress OpenGL based engine!

## Key Highlights
- **Deferred**: Features a Deferred-Renderer with SSAO!
- Made in OpenGL and features OBJ Model Loading, Shadow-Mapping, PBR Rendering and more!
- Using a OOP Architecture, making it easy to iterate, create objects, and get scenes setup.

## Built With
- C++
- OpenGL
- GLFW
`,
    showStats: false,
    images: ['/imgs/clear-engine.gif'],
    link: null,
    github: 'https://github.com/clearlyyy/lunarlander',
    showGithub: true,
    showLink: false
  },

  {
    id: 5,
    title: 'SFML-GUI',
    shortDesc: 'A Fast Retained-Mode GUI Library for SFML',
    fullDesc: `SFML-GUI is a Retained Mode GUI, Its fast, extremely simple to use and it just works. It enables fast iterations and quick GUI design, so you can spend more time on your game logic, and less on temporary debugging UI.

## Key Highlights
- **Retained-Mode** SFML GUI is a retained-mode gui, unlike IMGUI, we dont need to reconstruct the UI every frame.
- Easy Creation of custom widgets, with documentation using the SF_WIDGETS class.
- Super simple and easy to use, get a GUI up and running in only a few lines of code.
- Made with C++ and Built for SFML 3.0+ 

## Built With
- C++
- SFML
`,
    showStats: false,
    images: ['/imgs/sfml-gui.gif'],
    link: null,
    github: 'https://github.com/clearlyyy/sfml-gui',
    showGithub: true,
    showLink: false
  },

  {
    id: 6,
    title: 'SFML-CONSOLE',
    shortDesc: 'Single Header, Easy to use console library for SFML',
    fullDesc: `sfml-console is a lightweight, simple to use, header only console for SFML projects. It's inspired by the in-game consoles in source games.

## Key Highlights
- Easily extendable, letting developers add custom console commands super easily.
- Line-Independent font coloring and size.
- Made with C++ and Built for SFML

## Built With
- C++
- SFML
`,
    showStats: false,
    images: ['/imgs/gif1.gif'],
    link: null,
    github: 'https://github.com/clearlyyy/sfml-console',
    showGithub: true,
    showLink: false
  },

  {
    id: 7,
    title: 'win-workspaces',
    shortDesc: 'Fast, Simple i3/dwm like workspaces for windows 10/11',
    fullDesc: `Fast, simple, i3/dwm/hyprland - like workspaces for windows 10/11 with multi-monitor support and monitor independent workspaces in less than 600 lines of code. It is nothing more, and nothing less.

## Key Highlights
- Per-Monitor Independent workspaces, 9 workspaces per monitor.
- Easy to use and improves productivity. Especially useful for single-monitor setups.
- Made with C++ using the WinAPI to keep track of all opened windows.
- Bringing Linux-like TWM workspaces to windows!

## Built With
- C++
- WinAPI
`,
    showStats: false,
    images: ['/imgs/win-workspaces-example.gif'],
    link: null,
    github: 'https://github.com/clearlyyy/win-workspaces',
    showGithub: true,
    showLink: false
  },

  {
    id: 8,
    title: 'Powder-Game',
    shortDesc: 'Simple powder game',
    fullDesc: `Simple powder game with multithreading, running at ~70 fps with over 200,000 particles on screen.

## Key Highlights
- Uses Multithreaded zones letting each thread control a portion of the particles on screen.
- Features multiple different kinds of materials (Water, Sand, Stone, Poison)
- Manages ~70 fps with over 200,000 particles on screen with my system.

## Built With
- C++
- SFML
`,
    showStats: false,
    images: ['/imgs/game.gif'],
    link: null,
    github: 'https://github.com/clearlyyy/PowderGame',
    showGithub: true,
    showLink: false
  },
  
  
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [autoSlide, setAutoSlide] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (selectedProject && selectedProject.images.length > 1 && autoSlide) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
          setFade(true);
        }, 250);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProject, autoSlide]);

  const changeImage = (newIndex) => {
    setAutoSlide(false);
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setFade(true);
    }, 250);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % selectedProject.images.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    changeImage(newIndex);
  };

  const projectList = projects.map((project) => (
    <div key={project.id} className="project-item" onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); setFade(true); setAutoSlide(true); setShowMenu(false); }}>
      <h3>{project.title}</h3>
      <p>{project.shortDesc}</p>
    </div>
  ));

  return (
    <div className="project-page">
      <button className="menu-btn" onClick={() => setShowMenu(prev => !prev)}>{showMenu ? 'Hide' : 'Show'} Projects</button>
      <div className={`projects-list-dropdown ${showMenu ? 'show' : ''}`}>
        <div className="projects-list mobile-list">
          <p className="projects-page-title">Here are some cool projects i've built recently</p>
          {projectList}
        </div>
      </div>
      <div className="bottom">
        <div className="projects-list desktop-list">
            <p className="projects-page-title">Here are some cool projects i've built recently</p>
          {projectList}
        </div>

        <div className="projects-container">
          {selectedProject ? (
            <>
              
              <h2>{selectedProject.title}</h2>
              <div className="carousel">
                <img src={selectedProject.images[currentImageIndex]} alt={`${selectedProject.title} ${currentImageIndex + 1}`} className={fade ? 'fade-in' : 'fade-out'} />
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevImage}>&lt;</button>
                    <button className="carousel-btn next" onClick={nextImage}>&gt;</button>
                    <div className="indicators">
                      {selectedProject.images.map((_, index) => (
                        <span
                          key={index}
                          className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => changeImage(index)}
                        ></span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {selectedProject.showLink && selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              )}
              {selectedProject.showGithub && selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">View on GitHub</a>
              )}
              {selectedProject.showStats && (
                <div className="stats-container">
                  <p className="stat">Users: {selectedProject.stats.users}</p>
                  <p className="stat">{selectedProject.stats.rating}</p>
                </div>
              )}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedProject.fullDesc}</ReactMarkdown>
              <button className="back-button" onClick={() => setSelectedProject(null)}>Close</button>
            </>
          ) : (
            <p>Select a project to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
