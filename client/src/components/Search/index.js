import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/FinanceAPI";

function Search() {
    const [search, setSearch] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [ticker, setTicker]

    useEffect(() => {
        if (!search)
            return;

        API.companyProfile(search)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No results found.");
                }
                setTicker(res[0]["symbol"]);
                setCompanyName(res[0]["companyName"]);
            });
    }, [search]);

    API.companyProfile("Apple")
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No results found.");
                }
                setTicker(res[0]["symbol"]);
                setCompanyName(res[0]["companyName"]);
            });

    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
    };
    
    return (
        <div>
            <SearchForm/>
                <h1>Company: {companyName}</h1>
                <h1>Ticker: {ticker}</h1>
        </div>
    );
}

export default Search;