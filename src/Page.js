import React from "react";
import { useState, useEffect } from "react";
import "./Page.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Github from "./Pages/Github";
import Contact from "./Pages/Contact";

function Page() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [backgroundPage, setBackgroundPage] = useState("Home");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1600);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  function goToPage(page) { if (page === currentPage) return;

    setBackgroundPage(page);

    setIsAnimating(true);
    setAnimationDirection("out");

    // Wait for exit animation, then change page and animate in
    setTimeout(() => {
      setCurrentPage(page);
      setAnimationDirection("in");
      setTimeout(() => {
        setAnimationDirection("in animate");
        setTimeout(() => {
          setIsAnimating(false);
          setAnimationDirection("");
        }, 350);
      }, 50);
    }, 350);
  }

  // Calculate the position for the sliding background
  const getBackgroundPosition = () => {
    const buttonPositions = {
      Home: 0,
      Projects: 1,
      About: 2,
      Github: 3,
      Contact: 4,
    };

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
      buttonPositions[backgroundPage] * totalButtonSpacing +
      buttonMargin +
      slidingBgOffset
    );
  };

  const renderPage = () => {
    // Handle all pages when in mobile mode or for non-Home/Projects pages
    const pageComponents = {
      Home: Home,
      Projects: Projects,
      About: About,
      Github: Github,
      Contact: Contact,
    };

    const PageComponent = pageComponents[currentPage];
    return <PageComponent goToPage={goToPage} />;
  };

  return (
    <div className="page">
      <div className="nav-bar">
        <div className="title-container">
          <h1 className="logo">&lt;/&gt;</h1>
          <h1 className="nav-bar-title">CLEARLY</h1>
        </div>

        {/* Sliding background */}
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
          onClick={() => goToPage("Home")}
          style={{ color: backgroundPage === "Home" ? "black" : "white" }}
        >
          <h1 className="nav-bar-title2">Home</h1>
        </div>
        <div
          className="nav-bar-title-notselected"
          onClick={() => goToPage("Projects")}
          style={{ color: backgroundPage === "Projects" ? "black" : "white" }}
        >
          <h1 className="nav-bar-title2">Projects</h1>
        </div>
        <div
          className="nav-bar-title-notselected"
          onClick={() => goToPage("About")}
          style={{ color: backgroundPage === "About" ? "black" : "white" }}
        >
          <h1 className="nav-bar-title2">About</h1>
        </div>
        <div
          className="nav-bar-title-notselected"
          onClick={() => goToPage("Github")}
          style={{ color: backgroundPage === "Github" ? "black" : "white" }}
        >
          <h1 className="nav-bar-title2">Github</h1>
        </div>
        <div
          className="nav-bar-title-notselected"
          onClick={() => goToPage("Contact")}
          style={{ color: backgroundPage === "Contact" ? "black" : "white" }}
        >
          <h1 className="nav-bar-title2">Contact</h1>
        </div>
      </div>

      {!isMobile && (currentPage === "Home" || currentPage === "Projects") && (
        <div className="home-projects-container">
          <div className="home-section">
            <Home goToPage={goToPage} />
          </div>
          <div
            className={`projects-section ${currentPage === "Projects" ? "show" : "hide"}`}
          >
            <Projects />
          </div>
        </div>
      )}

      {(isMobile || (currentPage !== "Home" && currentPage !== "Projects")) && (
        <div className={`content page-transition ${animationDirection}`}>
          {renderPage()}
        </div>
      )}
    </div>
  );
}

export default Page;
