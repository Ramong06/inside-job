import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/FinanceAPI";

function Home() {
    const [search, setSearch] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [ticker, setTicker] = useState("");

    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        
        API.companyProfile(search)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No results found.");
                }
                setTicker(res.data[0]["symbol"]);
                setCompanyName(res.data[0]["name"]);
            });
    };
    
    return (
        <div>
            <SearchForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                results={search}
            />
                <h1>Company: {companyName}</h1>
                <h1>Ticker: {ticker}</h1>
        </div>
    );
}

export default Home;