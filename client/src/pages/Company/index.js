import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import FinanceChart from "../../components/FinanceChart";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";
import CompanyCard from "../../components/CompanyCard";
import Footer from "../../components/Footer";
import "./style.css";

function Company({ handleSearchResults }) {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [financeData, setFinanceData] = useState([]);
  const [profile, setProfile] = useState({});
  const [headline, setHeadline] = useState(null);

  const { ticker } = useParams();
  // API.companyProfile(ticker).then((company) => {
  //   setProfile(company);
  // });
  const getFinanceData = () => {
    API.incomeStatement(ticker).then((res) => {
      console.log("res", res);

      return res;
    });
  };

  useEffect(() => {
    // Call APIs and retrieve company information from the databases

    // If we have the ticker symbol for the company then call the financial modeling APIs and look up company by ids in database
    if (!(ticker.length > 16)) {
      API.companyProfile(ticker).then((company) => {
        setProfile(company);
        setCompanyName(company.data[0].companyName);
      });
      API.incomeStatement(ticker).then((res) => setFinanceData(res));
      // API.getTickerCompany(ticker).then((res) => setCompanyData(res));
    }

    // Set call to CompanyData by Ticker
    else {
      // Call CompanyData by id
      API.getNoTickerCompany(ticker).then((res) => {
        setCompanyData(res);
        setCompanyName(res.name);
      });
    }
  }, []);
  // useEffect(() => {
  //   API.companyHeadlines(companyName).then((res) => {
  //     setHeadline(res.data.articles[0]);
  //     console.log("res", res);
  //   });
  // }, [companyName]);

  return (
    // Format Components (Chart, Article Headlines, Ratings, Description, Salary etc.)
    // Use profile for the Company Profile from the Finance API
    // Use companyData for the reviews, salary etc.
    // Use headlines for the Headline
    <div className="Company">
      <Navbar />
      <div className="search">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
      <FinanceChart financeData={financeData} companyName={companyName}/>
      {headline && <NewsCard headline={headline} />}
      <CompanyCard profile={profile}/>
    </div>
  );
}

export default Company;
