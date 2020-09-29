import React from "react";
import "./style.css";

function ResultsCard(props) {
  return (
    <div className="row justify-content-center">
      <div className="card mb-3" style={{ width: "900px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.company.image}
              className="card-img"
              alt="company logo"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.company.name}</h5>
            </div>
          </div>
          <div className="col-md-12">
            {props.company.description ? <p className="card-text">
              {props.company.description.substring(0, 300) + " ..."}
            </p> : <p></p>}
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
  );
}

export default ResultsCard;