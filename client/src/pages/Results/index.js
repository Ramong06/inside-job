import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";
import ResultsCard from "../../components/ResultsCard";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import "./style.css";

function Results({ searchData, handleSearchResults }) {
  console.log(searchData);
  return (
    <React.Fragment>
      <Navbar />
      <h3 style={{ fontSize: "40px" }}>Results</h3>
      <div className="results">
        <SearchForm handleSearchResults={handleSearchResults} />
      </div>
      {searchData.length ? (
        <ul>
          {searchData.map((company) => (
            <li key={company.symbol}>
              <Link to={"/company/" + company.symbol}>
                <ResultsCard company={company} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h4>No Results</h4>
      )}
    </React.Fragment>
  );
}

export default Results;
