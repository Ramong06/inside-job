import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./style.css";

function Home({ handleSearchResults }) {
  return (
    <div>
      <Navbar />
      <div className="Hero">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
