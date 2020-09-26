import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import Navbar from "../../components/Navbar";

function Results({ searchData, handleSearchResults }) {
  return (
    <React.Fragment>
      <Navbar />
      <SearchForm handleSearchResults={handleSearchResults} />
      {searchData.length ? (
        <ul>
          {searchData.map((company) => (
            <li key={company.symbol}>
              <Link to={"/company/" + company.symbol}>
                <strong>{company.name}</strong>
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
