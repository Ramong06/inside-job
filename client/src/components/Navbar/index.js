import React from "react";
import "./style.css";
// import { Button, Nav, FormControl, Form } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a
        className="navbar-brand"
        href="#"
        style={{ fontFamily: '"Poiret One", cursive', fontWeight: "bold" }}
      >
        Employee Insider
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link hoverable" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hoverable" href="#">
              Random{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hoverable" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

//background of navbar should be #388087 with #F6F6F2 font from color scheme colors
