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
import { PriceHistory } from '../../../../types/PriceHistory';

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
  price: number
  pricesHistory: PriceHistory[]
}

const Chart: FC<ChartProps> = ({ price, pricesHistory }) => {

  console.log(price, pricesHistory)
  const data = [...pricesHistory.map(item => item.value), price]
  const labels = [...pricesHistory.map(item => new Date(+item.createdAt).toLocaleDateString().slice(0, 5)).sort(), 'now'].slice(-7)

  return (
    <Line
      options={{ responsive: true}}
      data={{
        labels,
        datasets: [
          {
            label: 'Price history ($)',
            data,
            borderColor: '#7c3aed',
            backgroundColor: '#a78bfa',
          }
        ]
      }}
    />
  )
}

export default Chart