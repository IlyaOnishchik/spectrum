import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Order } from '../../../types/Order';

ChartJS.register(ArcElement, Tooltip, Legend);

type StatusesChartProps = {
  orders: Order[]
}

const StatusesChart: FC<StatusesChartProps> = ({ orders }) => {

  const statuses = Array.from(new Set(orders.map(order => order.status)))
  const chartData: Map<string, number> = new Map()
  statuses.forEach(status => chartData.set(status, 0))
  orders.forEach(order => {
    const chartDataItemValue = chartData.get(order.status)
    chartData.set(order.status, chartDataItemValue === undefined ? 1 : chartDataItemValue + 1)
  })

  return (
    <Pie data={{
      labels: Array.from(chartData.keys()),
      datasets: [
        {
          label: '№ of orders',
          data: Array.from(chartData.values()),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }}/>
  )
}

export default StatusesChart