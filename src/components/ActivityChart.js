import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const data = {
    daily: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [1200, 1500, 1000, 1700, 1600, 1900, 1800]
        }
      ]
    },
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [5000, 7000, 11000, 14000]
        }
      ]
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [15000, 14000, 17000, 18000, 19000, 22000, 21000, 23000, 24000, 26000, 25000, 27000]
        }
      ]
    }
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Activity',
        fontSize: 20
      },
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          callback: function(value) {
            if (value >= 1000) {
              return (value / 1000) + 'K'; // Format labels as 5K, 10K, etc.
            }
            return value;
          },
          stepSize: function() {
            const max = Math.max(...data[timeFrame].datasets[0].data);
            return max > 5000 ? 5000 : 1000;
          }() // Call the function immediately to determine step size
        }
      }
    }
  };

  const handleChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div className=" bg-gray-800 p-4 rounded relative"> {/* Ensure the height matches */}
      <div className="absolute top-4 right-4">
        <select
          value={timeFrame}
          onChange={handleChange}
          className="bg-gray-700 text-white p-2 rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <h2 className="text-white mb-4 text-3xl">Activity</h2>
      <Bar data={data[timeFrame]} options={options} />
    </div>
  );
};

export default ActivityChart;
