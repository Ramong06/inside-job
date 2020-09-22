import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import API from "../../utils/FinanceAPI";

function Home({ handleSearchResults }) {
  return (
    <Navbar></Navbar>
    <div>
      <SearchForm handleSearchResults={handleSearchResults} />
    </div>
  );
}

export default Home;
