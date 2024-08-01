import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const NetProfitPieChart = ({ percentage }) => {
  const data = {
    labels: ['Profit', 'Remaining'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#38a169', '#e2e8f0'],
        hoverBackgroundColor: ['#2f855a', '#cbd5e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    cutout: '70%',
  };

  return (
    <div className="relative w-32 h-132 mx-auto"> {/* Adjust width and height here */}
      <Pie data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl text-green-400">{percentage}%</span> {/* Adjust text size */}
        <span className="text-[8px] text-white">Goal completed</span> {/* Adjust text size and color */}
      </div>
    </div>
  );
};

export default NetProfitPieChart;
