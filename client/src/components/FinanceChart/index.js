import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function FinanceChart({ data }) {
    console.log(data);
    const [companyName, setCompany] = useState("");
    const [ticker, setTicker] = useState("");

    useEffect(() => {
        API.companyProfile(company)
            .then(res => {
                if (res.length === 0) {
                    throw new Error("No results found.");
                }
                setTicker(res[0]["symbol"])
            });
    }, )

    return (
        <div></div>
    );
}

export default FinanceChart;