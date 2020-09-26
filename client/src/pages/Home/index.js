import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import Col from "../../components/Col"
import API from "../../utils/FinanceAPI";
import "./style.css";

function Home({ handleSearchResults }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <Col size="md-12" className="logoImg">
            <img src={require("./1997444.png")} height="300px" width="500px" />
          </Col>
        </Row>
        <Row>
          <Col size="md-12" className="searchBarHomePage">
            <SearchForm handleSearchResults={handleSearchResults} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
