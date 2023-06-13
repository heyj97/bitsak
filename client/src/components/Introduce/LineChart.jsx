import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const LineChart = ({ label, data }) => {
  const chartData = {
    labels: label,
    datasets: [
      {
        label: "sum",
        backgroundColor: "rgb(255, 99, 132)",
        data: data,
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "800px", height: "fit-content" }}>
      <Line type="line" data={chartData} />
    </div>
  );
};

export default LineChart;
