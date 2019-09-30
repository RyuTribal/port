import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./commercial/bootstrap/css/bootstrap.css";
import "./commercial/font-awesome/css/all.css";
import Typewriter from "typewriter-effect/dist/core";
import "./App.scss";
import $ from "jquery";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import imgLeft from "./img/ivan-img-left.png";
import imgRight from "./img/ivan-img-right.png";
import notey from "./img/notey.PNG";
import itjobs from "./img/itjobs.PNG";
import huddinge from "./img/huddinge.png";
import justvalue from "./img/justvalue.PNG";
import unreal from "./img/unreal.png";
import blender from "./img/blender.png";
import cLang from "./img/c++.png";
import node from "./img/node.png";
import reactImg from "./img/react.png";
import javascript from "./img/javascript.png";
import pdf from "./pdf/ivan.pdf";

class App extends Component {
  componentDidMount() {
    var hamburger = document.querySelectorAll(".hamburger");
    console.log(hamburger.length);
    for (var i = 0; i < hamburger.length; i++) {
      hamburger[i].addEventListener(
        "click",
        function() {
          this.classList.toggle("active");
        },
        false
      );
    }

    $(".hamburger").click(function() {
      $(".nav-mobile-options-container").toggleClass("menu-active");
    });
    var sections = $("section"),
      nav = $("nav"),
      nav_height = nav.outerHeight();
    $(window).on("scroll", function() {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height - 1,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find(".one-page").removeClass("selected");
          sections.removeClass("selected");

          $(this).addClass("selected");
          nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .addClass("selected");
        }
      });
    });
    $(document.body).on("touchmove", function() {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height - 1,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find(".one-page").removeClass("selected");
          sections.removeClass("selected");

          $(this).addClass("selected");
          nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .addClass("selected");
        }
      });
    });

    nav.find(".one-page").on("click", function() {
      $("a").removeClass("selected");
      $(this).addClass("selected");
      var $el = $(this),
        id = $el.attr("href");

      $("html, body").animate(
        {
          scrollTop: $(id).offset().top - nav_height
        },
        500
      );

      return false;
    });
    $(".submit-button").click(function() {
      $(".error-field").removeClass("error-active");
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var inputEmpty = false;
      console.log(message);
      if (name.replace(/\s/g, "") === "") {
        $("#name")
          .parent()
          .children(".error-field")
          .addClass("error-active");
        inputEmpty = true;
      }
      if (email.replace(/\s/g, "") === "") {
        $("#email")
          .parent()
          .children(".error-field")
          .addClass("error-active");
        inputEmpty = true;
      }
      if (message.replace(/\s/g, "") === "") {
        $("#message")
          .parent()
          .children(".error-field")
          .addClass("error-active");
        inputEmpty = true;
      }
      if (inputEmpty === true) {
        console.log("empty");
      } else {
        $(".emailOverlay").addClass("email-sending");
        $("body").css("overflow", "hidden");
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        var inputData = {
          name: name,
          email: email,
          message: message
        };
        $.ajax({
          type: "POST",
          url: "https://port-api.herokuapp.com/api/1.0/send",
          data: inputData,
          dataType: "json",
          success: function(response) {
            console.log(response);
            setTimeout(function() {
              console.log("hey");
              $(".emailOverlay").removeClass("email-sending");
              $("body").css("overflow", "auto");
            }, 1000);
          },
          error: function(error) {
            console.log(error);
            setTimeout(function() {
              console.log("hey");
              $(".emailOverlay").removeClass("email-sending");
              $("body").css("overflow", "auto");
            }, 1000);
          }
        });
      }
    });
    (function() {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      window.requestAnimationFrame = requestAnimationFrame;
    })();

    // Terrain stuff.
    var background = document.getElementById("bgCanvas"),
      bgCtx = background.getContext("2d"),
      width = 1920,
      height = 1080;

    if (height < 400) {
      height = 400;
    }

    background.width = width;
    background.height = height;

    function Terrain(options) {
      options = options || {};
      this.terrain = document.createElement("canvas");
      this.terCtx = this.terrain.getContext("2d");
      this.scrollDelay = options.scrollDelay || 90;
      this.lastScroll = new Date().getTime();

      this.terrain.width = width;
      this.terrain.height = height;
      this.fillStyle = options.fillStyle || "#191D4C";
      this.mHeight = options.mHeight || height;

      // generate
      this.points = [];

      var displacement = options.displacement || 140,
        power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

      // set the start height and end height for the terrain
      this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;
      this.points[power] = this.points[0];

      // create the rest of the points
      for (var i = 1; i < power; i *= 2) {
        for (var j = power / i / 2; j < power; j += power / i) {
          this.points[j] =
            (this.points[j - power / i / 2] + this.points[j + power / i / 2]) /
              2 +
            Math.floor(Math.random() * -displacement + displacement);
        }
        displacement *= 0.6;
      }

      document.body.appendChild(this.terrain);
    }

    Terrain.prototype.update = function() {
      // draw the terrain
      this.terCtx.clearRect(0, 0, width, height);
      this.terCtx.fillStyle = this.fillStyle;

      if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
        this.lastScroll = new Date().getTime();
        this.points.push(this.points.shift());
      }

      this.terCtx.beginPath();
      for (var i = 0; i <= width; i += 5) {
        if (i === 0) {
          this.terCtx.moveTo(0, this.points[0]);
        } else if (this.points[i] !== undefined) {
          this.terCtx.lineTo(i, this.points[i]);
        }
      }

      this.terCtx.lineTo(width, this.terrain.height);
      this.terCtx.lineTo(0, this.terrain.height);
      this.terCtx.lineTo(0, this.points[0]);
      this.terCtx.fill();
    };

    // Second canvas used for the stars
    bgCtx.fillStyle = "#05004c";
    bgCtx.fillRect(0, 0, width, height);

    // stars
    function Star(options) {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.05;
      this.x = options.x;
      this.y = options.y / 1.9;
    }

    Star.prototype.reset = function() {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.05;
      this.x = width;
      this.y = Math.random * height;
    };

    Star.prototype.update = function() {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    };

    function ShootingStar() {
      this.reset();
    }

    ShootingStar.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = Math.random() * 80 + 10;
      this.speed = Math.random() * 10 + 6;
      this.size = Math.random() * 1 + 0.1;
      // this is used so the shooting stars arent constant
      this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
      this.active = false;
    };

    ShootingStar.prototype.update = function() {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= height) {
          this.reset();
        } else {
          bgCtx.lineWidth = this.size;
          bgCtx.beginPath();
          bgCtx.moveTo(this.x, this.y);
          bgCtx.lineTo(this.x + this.len, this.y - this.len);
          bgCtx.stroke();
        }
      } else {
        if (this.waitTime < new Date().getTime()) {
          this.active = true;
        }
      }
    };

    var entities = [];

    // init the stars
    for (var i = 0; i < height; i++) {
      entities.push(
        new Star({
          x: Math.random() * width,
          y: Math.random() * height
        })
      );
    }

    // Add 2 shooting stars that just cycle.
    entities.push(new ShootingStar());
    entities.push(new ShootingStar());
    entities.push(new Terrain({ mHeight: height / 2 - 120 }));
    entities.push(
      new Terrain({
        displacement: 120,
        // scrollDelay: 50,
        fillStyle: "rgb(17,20,40)",
        mHeight: height / 2 - 60
      })
    );
    entities.push(
      new Terrain({
        displacement: 100,
        // scrollDelay: 20,
        fillStyle: "rgb(10,10,5)",
        mHeight: height / 2
      })
    );

    //animate background
    function animate() {
      bgCtx.fillStyle = "#110E19";
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = "#ffffff";
      bgCtx.strokeStyle = "#ffffff";

      var entLen = entities.length;

      while (entLen--) {
        entities[entLen].update();
      }
      requestAnimationFrame(animate);
    }
    animate();

    var typewriter = new Typewriter("#desc-intro", {
      loop: false
    });

    typewriter
      .typeString("Fullstack")
      .pauseFor(500)
      .deleteAll()
      .typeString(
        'F<span style="color: red;">r</span>ont-<span style="color: blue;">e</span>nd/back-end'
      )
      .start();
  }
  render() {
    return (
      <div className="App">
        <div className="emailOverlay">
          <div className="lds-ring">
            <i className="fas fa-shipping-fast"></i>
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
              <a href="#about" className="nav-mobile-options one-page">
                About
              </a>
              <a href="#exp" className="nav-mobile-options one-page">
                Experience
              </a>
              <a href="#skills" className="nav-mobile-options one-page">
                Skills
              </a>
              <a href="#contact" className="nav-mobile-options one-page">
                Contact
              </a>
              {/* <Link to="/cv" className="nav-mobile-options">
                CV
              </Link> */}
            </div>
          </div>
          <Bounce right>
            <div className="nav-options-container">
              <a href="#about" className="nav-options one-page">
                About
              </a>
              <a href="#exp" className="nav-options one-page">
                Experience
              </a>
              <a href="#skills" className="nav-options one-page">
                Skills
              </a>
              <a href="#contact" className="nav-options one-page">
                Contact
              </a>
              {/* <Link to="/cv" className="nav-options">
                CV
              </Link> */}
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
                  back-end developer with a love for cutting edge technology
                  that drives me to try and stay up to date with the newest tech
                  out there.
                </p>
                <p>
                  My dream is to work for Square Enix and create games that can
                  inspire kids the same way Square's games inspired me down this
                  path so many year ago.
                </p>
                <p>
                  I believe web applications and games alike share similarities
                  and should be studied together in order to create some of the
                  prettiest systems that can branch off from the norm. That is
                  the reason I like developing.
                </p>
                <p>
                  In my spare time I like keeping my body active by going to the
                  gym and playing basketball. My love for basketball has led me
                  to pursue coaching on the side for kids age 13-14. Books
                  aren't half bad either.
                </p>
              </div>
            </Fade>
          </div>
        </section>
        <section id="exp" className="non-intro page exp">
          <h2 className="section-title">Experience</h2>

          <div className="row exp-container">
            <Fade bottom>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={notey} alt="" />

                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a
                          href="http://finalnotey.herokuapp.com/start"
                          target="_blank"
                        >
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
            </Fade>
            <Fade bottom>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={itjobs} alt="" />

                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a
                          href="https://itjobsfinal.herokuapp.com/"
                          target="_blank"
                        >
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
            </Fade>
          </div>

          <div className="row exp-container">
            <Fade bottom>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={huddinge} alt="" />

                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="http://www.huddingebasket.se/" target="_blank">
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
            </Fade>
            <Fade bottom>
              <div className="exp-link col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">
                <figure>
                  <img className="exp-img" src={justvalue} alt="" />

                  <figcaption className="fig-captions">
                    <div className="overlay">
                      <h5>
                        <a href="http://justvalue.se/" target="_blank">
                          Just value
                        </a>
                        <br />
                        Front-end/back-end(internship)
                        <br />
                        Stockholm
                      </h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Fade>
          </div>
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
                  <img src={blender}></img>
                </div>
              </Zoom>
              <Fade bottom>
                <h3>Blender</h3>
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
                <i className="fas fa-envelope"></i>
                <Fade bottom>
                  <h3>Ivan.sedelkin9@gmail.com</h3>
                </Fade>
              </div>
              <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
                <i className="fab fa-linkedin-in"></i>
                <Fade bottom>
                  <h3>
                    <a
                      href="https://www.linkedin.com/in/ivan-sedelkin-236068191"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </h3>
                </Fade>
              </div>
              <div className="skill col-xs-12 col-sm-6 col-md-4 col-lg-4 margin-v align-center">
                <i class="fas fa-file-pdf"></i>
                <Fade bottom>
                  <h3>
                    <a href={pdf} download="Resume_Ivan_Sedelkin">
                      Download Resume
                    </a>
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
                    autoComplete="off"
                    placeholder="Name*"
                  ></input>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-col">
                  <div className="error-field">This field is required</div>
                  <input
                    className="input-field"
                    id="email"
                    type="email"
                    autoComplete="off"
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
                    autoComplete="on"
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
