import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import pdf from "./pdf/ivan.pdf";

class CV extends Component {
  componentDidMount() {
    $("canvas").remove();
  }
  render() {
    return (
      <div className="app">
        <nav className="nav">
          <div className="nav-mobile">
            <Link to="/" className="nav-mobile-options back-option">
              <i className="fas fa-chevron-left"></i>Back to main page
            </Link>
          </div>
          <div className="nav-options-container">
            <Link to="/" className="nav-mobile-options">
              <i className="fas fa-chevron-left"></i>Back to main page
            </Link>
          </div>
        </nav>
        <section className="cv non-intro page">
        <iframe src="https://docs.google.com/viewer?url=https://www.luminpdf.com/viewer/5d63c742c8210200194cc6f9" frameborder="0" height="500px" width="100%"></iframe>
        </section>
      </div>
    );
  }
}

export default CV;
