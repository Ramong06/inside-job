import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/FinanceAPI";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import ResultsCard from "../../components/ResultsCard";
import { Container } from "react-bootstrap";

function Results({ searchData, handleSearchResults }) {
  console.log(searchData);
  return (
    <React.Fragment>
      <Navbar />

      <SearchForm handleSearchResults={handleSearchResults} />
      {searchData.length ? (
        <ul>
          {searchData.map((company) => (
            <li key={company.symbol}>
              <ResultsCard company={company} />
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
