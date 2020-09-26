import React, { useState } from "react";
import API from "../../utils/FinanceAPI";
import { useHistory } from "react-router-dom";
import "./index.css";

function SearchForm({ handleSearchResults }) {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.companyProfile(search).then((res) => {
      if (res.length === 0) {
        throw new Error("No results found.");
      }
      handleSearchResults(res.data, history);
    });
  };

  return (
    <div className="container">
      <div className="form">
        <input
          value={search}
          onChange={handleInputChange}
          name="results"
          className="searchbox"
        />
        <button className="Searchbutton" onClick={handleFormSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
