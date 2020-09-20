import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/FinanceAPI";

function Home({handleSearchResults}) {
    return (
        <div>
            <SearchForm
                handleSearchResults={handleSearchResults}
            />
        </div>
    );
}

export default Home;