import React from "react";
import "./style.css";

function ResultsCard() {
  return (
    <div className="row justify-content-center">
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="./1997444.png" className="card-img" alt="company logo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Company Name</h5>
              <p className="card-text">Description</p>
              <p className="card-text">Ticker - Industry - Sector</p>
              <a href="#" className="card-link">
                Link to company website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;

//need to add shadwow box effect, round edges, and possibly colored header
// box-shadow: 10px 10px 5px grey;
//border-radius: 10px; or create a class rounded to put on the cards
