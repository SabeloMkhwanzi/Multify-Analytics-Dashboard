import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function TimeSeriesChart({ quote, wei }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#3c9b6f",
          font: {
            size: 14,
          },
          margin: "20px",
        },
      },
    },
    scales: {
      A: {
        title: "USD",
        type: "linear",
        position: "left",
        ticks: {
          color: "#b5ffd9",
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return (
                "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            } else {
              return "$" + value;
            }
          },
        },
      },
      B: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#3c9b6f",
          max: 1,
          min: 0,
        },
      },
      x: {
        ticks: {
          color: "#6b46c1 ",
        },
      },
    },
  };
  const graphData = {
    datasets: [
      {
        label: "Floor Price Quote 7 Days USD ($) ",
        yAxisID: "A",
        data: quote,
        borderColor: "#ae00fb",
        backgroundColor: "#ae00fb",
      },
      {
        label: "Floor Price Wei 7 Days",
        yAxisID: "B",
        data: wei,
        borderColor: "#b5ffd9",
        backgroundColor: "#b5ffd9",
      },
    ],
  };

  // return <Line options={options} data={graphData} />;
}
