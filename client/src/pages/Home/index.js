import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import API from "../../utils/FinanceAPI";

function Home({ handleSearchResults }) {
  return (
    <div>
      <Navbar />
      <div class="main">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
    </div>
  );
}

export default Home;
