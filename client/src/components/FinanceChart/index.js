import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function FinanceChart({ financeData, companyName }) {
  let DATA = [];
  let data = {};
  let X_LABELS = [];

  if (financeData && financeData.data) {
    DATA = financeData.data.map((statement) => statement.grossProfit).reverse();
    X_LABELS = financeData.data
      .map((statement) => statement.date.substring(0, 4) + statement.period)
      .reverse();
    console.log("data", DATA);
    console.log("x", X_LABELS);
    data = {
      labels: X_LABELS,
      datasets: [
        {
          label: "Net Revenue",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: DATA,
        },
      ],
    };
  }

  return (
    <div>
      {financeData && financeData.data ? (
        <h2>{companyName}</h2>
      ) : null}
      <Bar
        // Styling for chart
        data={data}
        width={100}
        height={320}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default FinanceChart;
