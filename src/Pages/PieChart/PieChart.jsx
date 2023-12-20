/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';

const PieChart = ({ yesVote, noVote }) => {
  const chartData = {
    series: [yesVote.length, noVote.length], 
    options: {
      labels: ['Yes', 'No'],
      colors: ['#4CAF50', '#FF5252'],
      legend: {
        show: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className='mx-auto flex  justify-center my-6'>
      <div>
      <h2 className="text-center text-xl font-bold  mb-4">Voting Chart</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="380"
      />
      </div>
    </div>
  );
};

export default PieChart;
