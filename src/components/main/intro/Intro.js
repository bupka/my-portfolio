import React from "react";
import "./intro.css";

function Main() {
  return (
    <section id="home" className="first-section">
      <div className="grid-container">
        <div className="item1">
          <img
            src="assets/images/ejup-pllashniku.png"
            alt="ejup.pllashniku"
            className="photo animate__animated animate__zoomIn"
          />
        </div>
        <div className="item2">
          <h1 className="my-name ">
            Hey, I'm Ejup
            <span>🤚</span>
          </h1>
          <h2>I'm a Frontend Developer</h2>
          <ul className="info-list">
            <li className="animate__animated animate__bounceInUp animate__delay-1s ">
              <span className="list-span">☕</span>
              fueled by coffee
            </li>
            <li className="animate__animated animate__bounceInUp animate__delay-2s">
              <span className="list-span">🌍</span>
              based on Kosovo
            </li>
            <li className="animate__animated animate__bounceInUp animate__delay-3s">
              <span className="list-span">🥁</span>
              drummer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Main;
