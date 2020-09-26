import React, { useState } from "react";
import API from "../../utils/FinanceAPI";
import { useHistory } from "react-router-dom";
import "./style.css";

function SearchForm({ handleSearchResults }) {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Replace with call to database
    API.tickerSearch(search).then((results) => {
      if (results.length === 0) {
        throw new Error("No results found.");
      }

      const companyPromises = results.data.map((company) => API.companyProfile(company.symbol));
      Promise.all(companyPromises).then((companies) => {
        console.log(companies);

        const companyList = companies.map((newCompany) => ({
          name: newCompany.data[0].companyName,
          symbol: newCompany.data[0].symbol,
          description: newCompany.data[0].description,
          industry: newCompany.data[0].industry,
          website: newCompany.data[0].website,
          sector: newCompany.data[0].sector,
          image: newCompany.data[0].image,
        }));
        setSearchData(companyList);
        console.log(companyList);
        debugger
        handleSearchResults(companyList, history);
      });
    });
  };
    


  return (
    <div className="form">
      <input 
        value={search}
        onChange={handleInputChange}
        name="results"
        className="searchbox"
        placeholder="Search Company Name"
      />
      <button className="Searchbutton" onClick={handleFormSubmit}>
        <i class="fa fa-search" id="searchIcon"></i>
      </button>
    </div>
  );
}

export default SearchForm;
