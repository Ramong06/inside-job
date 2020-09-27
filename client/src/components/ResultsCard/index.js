import React from "react";
import "./style.css";

function ResultsCard(props) {
  console.log(props);
  return (
    <div className="row justify-content-center">
      <div className="card mb-3" style={{ width: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.company.image}
              className="card-img"
              alt="company logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.company.name}</h5>
              <p className="card-text">{props.company.description}</p>
              <p className="card-text">
                {props.company.symbol} - {props.company.industry} -{" "}
                {props.company.sector}
              </p>
              <a href={props.company.website} className="card-link">
                Website
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
