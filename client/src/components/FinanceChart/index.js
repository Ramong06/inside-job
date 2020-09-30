import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function FinanceChart({ chartList, financeData, companyName, selectItem }) {
  let DATA = [];
  let data = {};
  let X_LABELS = [];

  const metric = chartList[selectItem];

  if (financeData && financeData.data) {
    DATA = financeData.data.map((statement) => statement[metric.item]).reverse();
    X_LABELS = financeData.data
      .map((statement) => statement.date.substring(0, 4) + statement.period)
      .reverse();
    console.log("data", DATA);
    console.log("x", X_LABELS);
    data = {
      labels: X_LABELS,
      datasets: [
        {
          label: metric.label,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          hoverBorderColor: "rgba(75,192,192,1)",
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
        height={401}

        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default FinanceChart;
