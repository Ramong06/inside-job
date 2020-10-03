import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import FinanceChart from "../../components/FinanceChart";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";
import CompanyCard from "../../components/CompanyCard";
import SelectForm from "../../components/SelectForm";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./style.css";

function Company({ handleSearchResults }) {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [financeData, setFinanceData] = useState([]);
  const [profile, setProfile] = useState({});
  const [articles, setArticles] = useState([]);
  const [selectItem, setSelectItem] = useState(0);

  const { ticker } = useParams();

  const chartList = [
    { item: "revenue", label: "Revenue"},
    { item: "costOfRevenue", label: "Cost of Revenue"},
    { item: "grossProfit", label: "Gross Profit"},
    { item: "operatingExpenses", label: "Operating Expenses"},
    { item: "ebitda", label: "EBITDA"},
    { item: "operatingIncome", label: "Operating Income"},
    { item: "incomeBeforeTax", label: "Income Before Tax"},
    { item: "netIncome", label: "Net Income"}
  ];

  const handleSelectChange = (event) => {
    setSelectItem(event.target.value);
  }


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

  useEffect(() => {
    API.companyHeadlines(companyName).then((res) => {
      if (res.data && res.data.totalResults > 3)
        setArticles(res.data.articles.splice(0, 3));
      else
      setArticles(res.data.articles);
      console.log("res", res);
    });
  }, [companyName]);

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
      <FinanceChart chartList={chartList} selectItem={selectItem} financeData={financeData} companyName={companyName} />
      <SelectForm itemList={chartList} handleChange={handleSelectChange} selectItem={selectItem}/>
      {articles ? (
        <ul>
          {articles.map((article) => (
            <li key={article.url}>
              <NewsCard article={article} />
            </li>
          ))}
        </ul>
      ) : null }
      <CompanyCard profile={profile} />
    </div>
  );
}

export default Company;
