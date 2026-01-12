import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./Page.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Github from "./Pages/Github";
import Contact from "./Pages/Contact";

function Page() {
  const location = useLocation();

  const getBackgroundPosition = () => {
    const buttonPositions = {
      "/": 0,
      "/projects": 1,
      "/about": 2,
      "/github": 3,
      "/contact": 4,
    };

    const currentPos = buttonPositions[location.pathname] || 0;

    let buttonWidth = 100;
    let buttonMargin = 2;
    let titleContainerWidth = 128;
    let slidingBgOffset = -3;

    if (window.innerWidth <= 480) {
      buttonWidth = 60;
      buttonMargin = 1;
      titleContainerWidth = 90;
      slidingBgOffset = 4;
    } else if (window.innerWidth <= 768) {
      buttonWidth = 80;
      buttonMargin = 2;
      titleContainerWidth = 80;
      slidingBgOffset = 26;
    }

    // Each button takes up its width plus margins on both sides
    const totalButtonSpacing = buttonWidth + buttonMargin * 2;

    // Calculate position: title container width + (button position * spacing) + margin offset
    return (
      titleContainerWidth +
      currentPos * totalButtonSpacing +
      buttonMargin +
      slidingBgOffset
    );
  };

  return (
    <div className={`page ${location.pathname === '/projects' ? 'projects-page' : ''}`}>
      <div className="nav-bar">
        <div className="title-container">
          <h1 className="logo">&lt;/&gt;</h1>
          <h1 className="nav-bar-title">CLEARLY</h1>
        </div>

        <div
          className="nav-bar-sliding-bg"
          style={{
            transform: `translateX(${getBackgroundPosition()}px)`,
            width:
              window.innerWidth <= 480
                ? "60px"
                : window.innerWidth <= 768
                  ? "80px"
                  : "100px",
          }}
        ></div>

        <div
          className="nav-bar-title-notselected"
          style={{ color: location.pathname === "/" ? "black" : "white" }}
        >
          <Link to="/" className="nav-link">
            <h1 className="nav-bar-title2">Home</h1>
          </Link>
        </div>
        <div
          className="nav-bar-title-notselected"
          style={{ color: location.pathname === "/projects" ? "black" : "white" }}
        >
          <Link to="/projects" className="nav-link">
            <h1 className="nav-bar-title2">Projects</h1>
          </Link>
        </div>
        <div
          className="nav-bar-title-notselected"
          style={{ color: location.pathname === "/about" ? "black" : "white" }}
        >
          <Link to="/about" className="nav-link">
            <h1 className="nav-bar-title2">About</h1>
          </Link>
        </div>
        <div
          className="nav-bar-title-notselected"
          style={{ color: location.pathname === "/github" ? "black" : "white" }}
        >
          <Link to="/github" className="nav-link">
            <h1 className="nav-bar-title2">Github</h1>
          </Link>
        </div>
        <div
          className="nav-bar-title-notselected"
          style={{ color: location.pathname === "/contact" ? "black" : "white" }}
        >
          <Link to="/contact" className="nav-link">
            <h1 className="nav-bar-title2">Contact</h1>
          </Link>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Page;
