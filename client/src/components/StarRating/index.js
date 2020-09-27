import React from "react";
import "./styles.css";

function StarRating(props) {
  // got to http://localhost:3000/star to test
  //   TODO Connect the parent component and get rid of the of " || 3"
  let stars = Math.floor(props.stars || 3);
  let arr = [0, 0, 0, 0, 0];
  return (
    <div className="StarRating">
      {arr.map((item, index) => {
        // Function: Maps over the 5 items in the Array. If the rating from the
        // DB is 0 the font awesome flass gets set to fa fa-star-o
        //if However, there is a rating that is coming in from the DB
        // the font awesome class fa fa-star gets set to fa fa-star
        return (
          <span className={`fa fa-star${index < stars ? "" : "-o"}`}></span>
        );
      })}
    </div>
  );
}

export default StarRating;
