import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./GraphStyle.css";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Graph component
// eslint-disable-next-line react/prop-types
const Graph = ({ dataDict }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to update chart data when dataDict changes
  useEffect(() => {
    if (dataDict && Object.keys(dataDict).length > 0) {
      const labels = Object.keys(dataDict);
      const dataValues = Object.values(dataDict);
      setChartData({
        labels: labels, // Dynamic x-axis labels
        datasets: [
          {
            label: '', // No label
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background for the area
            borderColor: 'rgba(255, 255, 255, 1)', // White line color
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 255, 255, 1)', // White point border
            pointBackgroundColor: '#fff', // White point background
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)', // Hover color white
            pointHoverBorderColor: 'rgba(220,220,220,1)', // Hover border color
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataValues, // Dynamic data
          },
        ],
      });
      setLoading(false); // Data has been processed, set loading to false
    } else {
      setLoading(true); // If no data is passed, show loading
    }
  }, [dataDict]);

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the height to change
    aspectRatio: 1.2,
    plugins: {
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color (semi-transparent)
        titleColor: '#4A4A4D',
        bodyColor: '#4A4A4D',
      },
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          display: true,
          color: '#4A4A4D', // Color for ticks
        },
      },
      y: {
        grid: {
          color: 'rgba(74, 74, 77, 0.3)', // Semi-transparent horizontal grid lines
          borderColor: 'rgba(74, 74, 77, 0.3)', // Y-axis border color
        },
        ticks: {
          display: true,
          color: '#4A4A4D', // Color for ticks
        },
      },
    },
  };

  return (
    <div className="graph-container"> {/* Adjusted height */}
      <div className="graph" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {loading ? (
          <div className="loading-animation">
            <div className="spinner"></div>
          </div>
        ) : (
          chartData && <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default Graph;
