import React from "react";
import "./style.css";

function NewsCard({article}) {
  console.log("NewsCard", article);
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card-group">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <p className="card-text">{article.title}</p>
              <p className="card-text">
                <small className="text-muted">{(new Date(article.publishedAt)).toDateString()}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
