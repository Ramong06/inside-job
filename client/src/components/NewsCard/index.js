import React from "react";
import "./style.css";

function NewsCard() {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card-group">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <p className="card-text">News Headline 1</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
