import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import API from "../../utils/FinanceAPI";
import "./style.css";

function Home({ handleSearchResults }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <img src={require("./dude.jpg")} height="200px" width="400px" />
        </Row>
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
    </div>
  );
}

export default Home;
