import React from "react";
import "./topnav.css";

function Topnav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/"></a>home
        </li>
        <li>
          <a href="about"></a>about
        </li>
        <li>
          <a href="projects"></a>projects
        </li>
        <li>
          <a href="contact"></a>contact
        </li>
      </ul>
    </nav>
  );
}

export default Topnav;
