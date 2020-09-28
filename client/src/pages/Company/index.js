import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import FinanceChart from "../../components/FinanceChart";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";

function Company({ handleSearchResults }) {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [financeData, setFinanceData] = useState({});
  const [profile, setProfile] = useState({});
  const [headline, setHeadline] = useState({});

  const { ticker } = useParams();

  // Call APIs and retrieve company information from the databases
  
  // If we have the ticker symbol for the company then call the financial modeling APIs and look up company by ids in database
  if (!(ticker.length > 16)) {
    API.companyProfile(ticker).then(company => {
      setProfile(company);
      setCompanyName(company.data[0].companyName);
    })
    API.incomeStatement(ticker).then(res => setFinanceData(res));
  }

  else {
    // Call CompanyData by id
    API.companyData
  }

  API.companyHeadlines(companyName).then(res => setHeadline(res));

  return (
    // Format Components (Chart, Article Headlines, Ratings, Description, Salary etc.)
    // Use profile for the Company Profile from the Finance API
    // Use companyData for the reviews, salary etc.
    // Use headlines for the Headline
    <div>
      <Navbar />
      <SearchForm handleSearchResults={handleSearchResults} />
      <FinanceChart financeData={financeData} />
    </div>
  );
}

export default Company;
