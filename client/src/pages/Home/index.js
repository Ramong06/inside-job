import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import API from "../../utils/FinanceAPI";
import "./style.css";

function Home({ handleSearchResults }) {
  return (
    <div>
<<<<<<< HEAD
      <div class="main">
        <Navbar />
=======
      <Navbar />
      <div className="container">
        <img src={require("./dude.jpg")} height="200px" width="200px" />
>>>>>>> c3a78eaa72090441af037594464c3b0ac03eb6ec
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
    </div>
  );
}

export default Home;
