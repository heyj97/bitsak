import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement); // PointElement를 추가하였습니다.

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [1, 2, 3, 4, 5, 6],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [6, 5, 4, 3, 2, 1],
    },
  ],
};

const ChartExample = () => {
  return (
    <div style={{width: '800px', height: 'fit-content'}}>
      <Line type="line" data={data} />
    </div>
  );
};

export default ChartExample;
