import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/FinanceAPI";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import ResultsCard from "../../components/ResultsCard";

function Results({ searchData, handleSearchResults }) {

  console.log(searchData);
  return (
    <React.Fragment>
      <Navbar />
      <ResultsCard />
      <SearchForm handleSearchResults={handleSearchResults} />
      {searchData.length ? (
        <ul>
          {searchData.map((company) => (
            <li key={company.symbol}>
              <Link to={"/company/" + company.symbol}>
                <strong>{company.name}</strong>
                <p>{company.symbol}</p>
                <p>{company.industry}</p>
                <p>{company.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No Results</div>
      )}
    </React.Fragment>
  );
}

export default Results;
