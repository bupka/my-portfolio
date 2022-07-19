import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-header">Contact Me</h2>

      <div className="contact-list">
        <div className="cont-link">
          <i class="fa-brands fa-github icon"></i>
          <a className="contact-item" href="https://github.com/Bupka">
            www.github.com/Bupka
          </a>
        </div>
        <div className="cont-link ">
          <i class="fa-brands fa-linkedin icon"></i>
          <a
            className="contact-item "
            href="https://www.linkedin.com/in/ejup-pllashniku/"
          >
            linkedin.com/in/ejup-pllashniku/
          </a>
        </div>
        <div className="cont-link">
          <i class="fa-solid fa-phone icon"></i>
          <span className="contact-item">+38349684686</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;