/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts';

const UserPieChart = ({ yesVote, noVote, likeVote, dislikeVote }) => {
  const chartData = {
    series: [yesVote, noVote, likeVote, dislikeVote],
    options: {
      labels: ['Yes', 'No', 'Like', 'Dislike'],
      colors: ['#4CAF50', '#FF5252', '#2196F3', '#FFC107'], // You can adjust colors as needed
      legend: {
        show: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className='my-6 md:my-20'>
      <h2 className="text-center text-xl mb-4">Distribution Chart</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="320"
      />
    </div>
  );
};

export default UserPieChart;
