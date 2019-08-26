import React, { Component } from "react";
import "./commercial/bootstrap/css/bootstrap.css";
import "./commercial/font-awesome/css/all.css";
import "./App.scss";
import "./js/main.js";
import "./js/canvas.js";
import "./js/scroll.js";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import imgLeft from "./img/ivan-img-left.png";
import imgRight from "./img/ivan-img-right.png";
import notey from "./img/notey.PNG";
import itjobs from "./img/itjobs.PNG";
import huddinge from "./img/huddinge.png";
import justvalue from "./img/justvalue.PNG";
import unreal from "./img/unreal.png";
import maya from "./img/maya.png";
import cLang from "./img/c++.png";
import node from "./img/node.png";
import reactImg from "./img/react.png";
import javascript from "./img/javascript.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="emailOverlay">
          <div class="lds-ring">
            <i class="fas fa-shipping-fast"></i>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
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
              <a href="#cv" className="nav-mobile-options">
                CV
              </a>
            </div>
          </div>
          <Bounce right>
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
              <a href="#cv" className="nav-options">
                CV
              </a>
            </div>
          </Bounce>
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
        <section id="about" className="non-intro page about">
          <h2 className="section-title">About</h2>
          <div className="row about-container">
            <Fade left>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 padding">
                <img className="personal-img" src={imgLeft} />
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 padding">
                <img className="personal-img" src={imgRight} />
              </div>
            </Fade>
            <Fade right>
              <div className="paragraph-container col-xs-12 col-sm-12 col-md-4 col-lg-6 padding">
                <p>
                  Hey.
                  <br /> My name is Ivan Sedelkin and I'm a front-end and
                  back-end developer with a love for cutting edge technolodgy
                  that drives me to try and stay up to date with the newest tech
                  out there.
                </p>
                <p>
                  My dream is to work for Square Enix and create games that can
                  inspire kids the same way Square's games inpired me down this
                  path so many year ago.
                </p>
                <p>
                  I believe web applications and games alike share similarities
                  and should be studied together in order to create some of the
                  prettiest systems that can branch of from the norm. That is
                  the reason I like developing webbapplikations as well.
                </p>
                <p>
                  On my sparetime I like keeping my body active by going to the
                  gym and playing basketball. My love for basketball has lead me
                  to pursue coaching on the side for kids age 13-14. Books
                  aren't half bad either.
                </p>
              </div>
            </Fade>
          </div>
        </section>
        <section id="exp" className="non-intro page exp">
          <h2 className="section-title">Experience</h2>
          <Fade bottom>
            <div className="row exp-container">
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={notey} alt="" />
                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="http://finalnotey.herokuapp.com/start">
                          Notey
                        </a>
                        <br />
                        School project
                        <br />
                        Front-end and Back-end
                      </h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={itjobs} alt="" />
                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="https://itjobsfinal.herokuapp.com/">
                          IT-jobs-finder
                        </a>
                        <br />
                        School project
                        <br />
                        Front-end and Back-end
                      </h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="row exp-container">
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={huddinge} alt="" />
                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="http://www.huddingebasket.se/t">
                          Huddinge Basketball
                        </a>
                        <br />
                        Coach/Front-end/back-end
                        <br />
                        Stockholm
                      </h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={justvalue} alt="" />
                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="http://justvalue.se/">Just value</a>
                        <br />
                        Front-end/back-end(internship)
                        <br />
                        Stockholm
                      </h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Fade>
        </section>
        <section id="skills" className="non-intro page skills">
          <h2 className="section-title">Skills</h2>
          <p>My most used languages, tools and frameworks</p>
          <div className="skills-container row">
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={javascript}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>Javascript</h3>
              </Fade>
            </div>
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={cLang}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>C++</h3>
              </Fade>
            </div>
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={node}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>nodejs</h3>
              </Fade>
            </div>
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={unreal}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>Unreal Engine</h3>
              </Fade>
            </div>
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={maya}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>Maya/Mudbox-combo</h3>
              </Fade>
            </div>
            <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
              <Zoom>
                <div className="fab-img">
                  <img src={reactImg}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>React</h3>
              </Fade>
            </div>
          </div>
        </section>
        <section id="contact" className="non-intro page contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container">
            <div className="skills-container row">
              <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
                <i class="fas fa-envelope"></i>
                <Fade bottom>
                  <h3>Ivan.sedelkin9@gmail.com</h3>
                </Fade>
              </div>
              <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
                <i class="fab fa-linkedin-in"></i>
                <Fade bottom>
                  <h3>
                    <a href="https://www.linkedin.com/in/ivan-sedelkin-236068191">
                      LinkedIn
                    </a>
                  </h3>
                </Fade>
              </div>
              <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
                <i class="fab fa-github"></i>
                <Fade bottom>
                  <h3>
                    <a href="https://github.com/RyuTribal">Github</a>
                  </h3>
                </Fade>
              </div>
            </div>
            <h2 className="section-title">Requests:</h2>
            <div className="input-container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-col">
                  <div className="error-field">This field is required</div>
                  <input
                    className="input-field"
                    id="name"
                    type="text"
                    autocomplete="off"
                    placeholder="Name*"
                  ></input>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-col">
                  <div className="error-field">This field is required</div>
                  <input
                    className="input-field"
                    id="email"
                    type="email"
                    autocomplete="off"
                    placeholder="Email*"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-col">
                  <div className="error-field">This field is required</div>
                  <textarea
                    className="input-area"
                    id="message"
                    autocomplete="on"
                    placeholder="Message*"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col margin-v form-col">
                  <button type="submit" className="submit-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
