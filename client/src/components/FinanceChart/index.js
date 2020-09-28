import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function FinanceChart({ financeData }) {
  console.log("financedata", financeData);
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
        <h2>{financeData.data[0].symbol}</h2>
      ) : null}
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default FinanceChart;
