import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import FinanceChart from "../../components/FinanceChart";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/FinanceAPI";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";
import Footer from "../../components/Footer";
import "./style.css";

function Company({ handleSearchResults }) {
  const [companyData, setCompanyData] = useState({});
  const [financeData, setFinanceData] = useState({});
  const [profile, setProfile] = useState({});

  const { ticker } = useParams();

  // Call APIs and retrieve company information from the databases

  // If we have the ticker symbol for the company then call the financial modeling APIs and look up company by ids in database
  if (!(ticker.length > 16)) {
    API.companyProfile(ticker).then((res) => setProfile(res));
    API.incomeStatement(ticker).then((res) => setFinanceData(res));

    // Set call to CompanyData by Ticker
  } else {
    // Call CompanyData by id
  }

  return (
    // Format Components (Chart, Article Headlines, Ratings, Description, Salary etc.)
    <div>
      <Navbar />
      <div className="search">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
      <FinanceChart financeData={financeData} />
      <NewsCard />

      <Footer />
    </div>
  );
}

export default Company;
