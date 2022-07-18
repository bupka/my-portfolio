import React from "react";
import "./bottumnav.css";

function Bottumnav() {
  return (
    <nav className="bottum-nav">
      <a href="#home" className="nav__link">
        <i className="material-icons nav__icon">home</i>
        <span className="nav__text">Home</span>
      </a>
      <a href="#about" className="nav__link">
        <i className="material-icons nav__icon">person</i>
        <span className="nav__text">About</span>
      </a>
      <a href="#projects" className="nav__link">
        <i className="material-icons nav__icon">folder</i>
        <span className="nav__text">Projects</span>
      </a>
      <a href="#contact" className="nav__link">
        <i className="material-icons nav__icon">contacts</i>
        <span className="nav__text">Contact</span>
      </a>
    </nav>
  );
}

export default Bottumnav;
