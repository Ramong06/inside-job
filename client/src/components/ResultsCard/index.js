import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function ResultsCard() {
  return (
    <div className="card" style={{ width: "60rem" }}>
      <div className="card-body">
        <h5 className="card-title">Company Name</h5>
        <p className="card-text">Company Blurb - description etc.</p>
        <a href="#" className="card-link">
          Link to company website
        </a>
        <a href="#" className="card-link" style={{ color: "black" }}>
          Link to our company page?
        </a>
      </div>
    </div>
  );
}

export default ResultsCard;

//need to add shadwow box effect, round edges, and possibly colored header
// box-shadow: 10px 10px 5px grey;
//border-radius: 10px; or create a class rounded to put on the cards
