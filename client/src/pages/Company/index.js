import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/FinanceAPI";
import Navbar from "../../components/Navbar";

function Company({ handleSearchResults }) {
  const [companyData, setCompanyData] = useState({});
  const [financeData, setFinanceData] = useState({});
  const [profile, setProfile] = useState({});

  const { ticker } = useParams();

  // Call APIs and retrieve company information from the databases
  
  // If we have the ticker symbol for the company then call the financial modeling APIs and look up company by ids in database
  if (!(ticker[0] >= "0" && ticker[0] <= "9")) {
    API.companyProfile(ticker).then(res => setProfile(res));
    API.incomeStatement(ticker).then(res => setFinanceData(res));

    // Set call to CompanyData by Ticker
  }
  else {
    // Call CompanyData by id
  }
  
  return (
    // Format Components (Chart, Article Headlines, Ratings, Description, Salary etc.)
    <div>
      <Navbar />
      <SearchForm handleSearchResults={handleSearchResults} />
    </div>
  );
}

export default Company;
