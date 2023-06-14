import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = ({ label, data }) => {
  const chartData = {
    labels: label,
    datasets: [
      {
        type: "bar",
        label: "G20 야간조도",
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
      <Bar type="bar" data={chartData} />
    </div>
  );
};

export default BarChart;
