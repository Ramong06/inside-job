import React, { useState } from "react";
import API from "../../utils/FinanceAPI";
import { useHistory } from "react-router-dom";

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
    <div className="form-group">
      <input
        value={search}
        onChange={handleInputChange}
        name="results"
        className="form-control"
      />
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}

export default SearchForm;
