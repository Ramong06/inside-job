import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function FinanceChart({ financeData }) {
  console.log(financeData);
  
  const X_LABELS = financeData.map(statement =>
    statement.date.splice(0, 4) + statement.period
  ).reverse();

  const DATA = financeData.map(statement =>
    statement.grossProfit
  ).reverse();

    const data = {
        labels: X_LABELS,
        datasets: [
          {
            label: 'Net Revenue',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: DATA
          }
        ]
      };

    return (
        <div>
              <h2>{financeData.data[0].symbol}</h2>
              <Bar
                data={data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
    );
}

export default FinanceChart;