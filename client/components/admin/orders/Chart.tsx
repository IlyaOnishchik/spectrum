import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  labels?: string[]
  data?: number[]
}

const Chart: FC<ChartProps> = ({ labels = ['08', '09', '10'], data = [1, 6, 3] }) => {
  return (
    <div>
      <Line
        options={{
          responsive: true
        }}
        data={{
          labels,
          datasets: [
            {
              label: 'Orders quantity',
              data,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        }}
      />
    </div>
  )
}

export default Chart