import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const VolumeChart = ({ VolumePrice }) => {
  console.log(VolumePrice);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#00AF91",
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
          color: "#00AF91",
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
          color: "#00AF91 ",
        },
      },
    },
  };
  const items = {
    datasets: [
      {
        label: "Volume Quote 7d ($) ",
        yAxisID: "A",
        data: VolumePrice,
        borderColor: "#4A5568",
        backgroundColor: "#00AF91",
        borderWidth: "1px",
      },
      {
        label: "Volume Quote 30d ($) ",
        yAxisID: "A",
        data: VolumePrice,
        borderColor: "#4A5568",
        backgroundColor: "white",
        borderWidth: "1px",
        borderRadius: "20px",
      },
    ],
  };

  return <Line options={options} data={items} />;
};

export default VolumeChart;
// return <Line options={options} data={graphData} />;
