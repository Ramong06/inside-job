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
          scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    if (value >= 1000 || value <= -1000)
                      return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    else if (value < 1 && value > -1)
                      return "$" + value.toFixed(2);
                    return "$" + value;
                  }
                }
            }]
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                const value = data['datasets'][0]['data'][tooltipItem['index']]
                if (value >= 1000 || value <= -1000)
                  return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return "$" + value;
              }
            }
          }
        }}
      />
    </div>
  );
}

export default FinanceChart;
