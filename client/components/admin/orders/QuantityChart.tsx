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

type QuantityChartProps = {
  labels?: string[]
  data?: number[]
}

const QuantityChart: FC<QuantityChartProps> = ({ labels, data }) => {
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
              borderColor: '#7c3aed',
              backgroundColor: '#a78bfa',
            }
          ]
        }}
      />
    </div>
  )
}

export default QuantityChart