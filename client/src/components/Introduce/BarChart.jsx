import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const BarChart = ({ label, data }) => {
  const chartData = {
    labels: label,
    datasets: [
      {
        type: "bar",
        label: "Global Light Pollution Chart",
        backgroundColor: (context) => {
          if (context.raw > 3.9) {
            return "rgb(255, 99, 132)";
          } else {
            return "#ccc";
          }
        },
        data: data,
        borderColor: "rgba(0,0,0,0)",
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

export default BarChart;
