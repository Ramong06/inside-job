import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Foot from "../../components/Foot";
import Container from "../../components/Container";
import API from "../../utils/FinanceAPI";
import "./style.css";

function Home({ handleSearchResults }) {
  return (
    <div>
      <Navbar />
      {/* <Container>
        <Row>
          <Col size="md-12" className="logoImg">
           
            <img src={require("./logofinal2.png")} width="150%" />
          </Col>
        </Row>

        <Row>
          <Col size="md-12" className="searchBarHomePage">
            <SearchForm handleSearchResults={handleSearchResults} />
          </Col>
        </Row>
      </Container> */}
      <div className="Hero">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
      <Foot />
    </div>
  );
}

export default Home;
