import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/FinanceAPI";

import Navbar from "../../components/Navbar";

function Company({ handleSearchResults }) {
  const [company, setCompany] = useState({});
  const { ticker } = useParams();

  // Call APIs and retrieve company information from the databases

  return (
    // Format Components (Chart, Article Headlines, Ratings, Description, Salary etc.)
    <div>
      <SearchForm handleSearchResults={handleSearchResults} />
    </div>
  );
}

export default Company;
