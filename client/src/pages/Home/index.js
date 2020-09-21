import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import NavBar from "../../components/Navbar";
import API from "../../utils/FinanceAPI";

function Home({ handleSearchResults }) {
  return (
    <div>
      <SearchForm handleSearchResults={handleSearchResults} />
    </div>
  );
}

export default Home;
