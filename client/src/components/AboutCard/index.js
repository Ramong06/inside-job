import React from "react";
import "./style.css";

function AboutCard() {
  return (
    <div className="row justify-content-center">
      <div className="aboutCard">
        <div className="about-card-body">
          "Inside Job" is a web application that stores information about
          companies in which users are interested in starting a career with. Our
          database will pull information like company bio, history, financial
          information, and latest news. Inside Job will prove to be a useful
          tool for users looking to switch companies or begin a new career, but
          aren't very familiar with every aspect of their future employer.
        </div>
      </div>
    </div>
  );
}
export default AboutCard;
