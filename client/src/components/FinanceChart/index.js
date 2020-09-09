import React, { useState, useEffect } from "react";
import API from "../../utils/FinanceAPI";

function FinanceChart(props) {
    const [company, setCompany] = useState("");


    API.companyProfile("AAPL")
        .then(res => {
            if(res.data.length === 0) {
                throw new Error("No results found.");
            }
            if(res.data.status === "error") {
                throw new Error(res.data.message);
            }
            setCompany(res.data[0]["companyName"])
        })

    return (
        <div></div>
    );
}

export default FinanceChart;