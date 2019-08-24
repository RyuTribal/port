import React from "react";
import "./App.scss";
import artistic from "./img/Ivan-artistic.png";
import normal from "./img/Ivan.png";
import logic from "./img/Ivan-logic.png";
import "./js/main.js";
import "./js/canvas.js";
import "./js/scroll.js";
import jQuery from "jquery";
import $ from "jquery";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-mobile">
          <button className="hamburger hamburger-cancel">
            <span className="icon" />
          </button>
          <div className="nav-mobile-options-container">
            <a href="#about" className="nav-mobile-options">
              About
            </a>
            <a href="#exp" className="nav-mobile-options">
              Experience
            </a>
            <a href="#skills" className="nav-mobile-options">
              Skills
            </a>
            <a href="#contact" className="nav-mobile-options">
              Contact
            </a>
          </div>
        </div>
        <div className="nav-options-container">
          <a href="#about" className="nav-options">
            About
          </a>
          <a href="#exp" className="nav-options">
            Experience
          </a>
          <a href="#skills" className="nav-options">
            Skills
          </a>
          <a href="#contact" className="nav-options">
            Contact
          </a>
        </div>
      </nav>
      <section className="page intro">
        <div className="intro-content">
          <div className="content-container">
            <h1 className="intro-big">Ivan Sedelkin</h1>
            <div className="desc-container">
              <h2 data-text="FRONT-END/BACK-END" id="desc-intro" />
            </div>
            <h1 className="intro-big">Developer</h1>
          </div>
        </div>
        <canvas id="bgCanvas" />
      </section>
      <section id="about" className="page about">
        <h1>About</h1>
      </section>
      <section id="exp" className="page exp">
        <h1>Experience</h1>
      </section>
      <section id="skills" className="page skills">
        <h1>Skills</h1>
      </section>
      <section id="contact" className="page contact">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
