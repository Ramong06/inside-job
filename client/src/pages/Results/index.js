import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

function Results({ searchData, handleSearchResults }) {
  return (
    <React.Fragment>
      <SearchForm handleSearchResults={handleSearchResults} />
      {searchData.length ? (
        <div>
          <ul>
            {searchData.map((company) => {
              <Link to={"company/" + company.symbol}>
                <li>{company.name}</li>
              </Link>;
            })}
          </ul>
        </div>
      ) : (
        <div>No Results</div>
      )}
    </React.Fragment>
  );
}

export default Results;
