import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <section className="about-me">
        <div className="about__nav">
          <div className="cercle">
            <i class="fa fa-circle Terminal_red__-LLSJ"></i>
            <i class="fa fa-circle Terminal_amber__NRd3E"></i>
            <i class="fa fa-circle Terminal_green__deSLX"></i>
          </div>
          <span className="tab-heading">more about me</span>
        </div>
        <div className="info-me">
          <p>
            <span style={{ color: "rgb(0, 255, 164)" }}>C:\Users\Ejup></span> cd
            aboutejup
          </p>
          <p>
            <span className="tab-heading">aboutejup></span> Hello! I'm Ejup. I'm
            , a senior student of Management of Information System program, at
            University of Business and Technology in Pristina. I enjoy long
            walks on the beach, and I believe artificial intelligence will
            inevitably rule us all one day. You should hire me!
          </p>
        </div>
      </section>
      <section className="about-me">
        <div className="about__nav">
          <div className="cercle">
            <i class="fa fa-circle Terminal_red__-LLSJ"></i>
            <i class="fa fa-circle Terminal_amber__NRd3E"></i>
            <i class="fa fa-circle Terminal_green__deSLX"></i>
          </div>
          <span className="tab-heading">some of my skills</span>
        </div>
        <div className="info-me">
          <p>
            <span style={{ color: "rgb(0, 255, 164)" }}>C:\Users\Ejup></span> cd
            skills
          </p>
          <p>
            <span style={{ color: "rgb(0, 255, 164)" }}>skills></span>
          </p>
          <div></div>
        </div>
      </section>
      <section className="about-me">
        <div className="about__nav">
          <div className="cercle">
            <i class="fa fa-circle Terminal_red__-LLSJ"></i>
            <i class="fa fa-circle Terminal_amber__NRd3E"></i>
            <i class="fa fa-circle Terminal_green__deSLX"></i>
          </div>
          <span className="tab-heading">hobbies</span>
        </div>
        <div className="info-me"></div>
      </section>
    </div>
  );
}

// test per push
export default About;
