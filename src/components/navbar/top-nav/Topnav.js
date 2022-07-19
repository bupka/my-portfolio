import React from "react";
import "./topnav.css";

function Topnav() {
  return (
    <div className="navbar">
      <nav className="top-nav">
        <a href="#home" className="link">
          <span className="text">Home</span>
        </a>
        <a href="#about" className="link">
          <span className="text">About me</span>
        </a>
        <a href="#projects" className="link">
          <span className="text">Projects</span>
        </a>
        <a href="#contact" className="link">
          <span className="text">Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Topnav;
