import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a
        className="navbar-brand"
        href="/"
        style={{ fontFamily: '"Poiret One", cursive', fontWeight: "bold" }}
      >
        Inside Job
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >                                          https://fontmeme.com/temporary/1018d5d5fe3c76f055e3042916d9b6bc.png
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link hoverable" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hoverable" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
