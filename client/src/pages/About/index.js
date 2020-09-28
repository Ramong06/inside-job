import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ramonImg from "./IMG_5147.jpg";
import "./style.css";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Navbar />
      <Row className="headerRow">
        <Col size="md-12" className="headerCol">
          <h1 className="devHeader">ABOUT INSIDE JOB</h1>
        </Col>
      </Row>
      <Row className="devTeamRow">
        <Col size="md-12" className="ourVision">
          <p>"Inside Job" is a web application that stores information about companies in which users are interested in starting a career with. Our database will pull information 
          like company bio, history, financial information, and latest news. Inside Job will prove to be a useful tool for users looking to
          switch companies or begin a new career, but aren't very familiar with every aspect of their future employer.</p>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default About;
