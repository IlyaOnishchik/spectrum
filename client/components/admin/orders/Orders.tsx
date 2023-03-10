import React from 'react'
import { useAdminOrders } from '../../../hooks/order/useAdminOrders'
import { Order } from '../../../types/Order'
import { Card } from '../../common/card'
import Error from '../../common/Error'
import Loading from '../../common/Loading'
import QuantityChart from './QuantityChart'
import StatusesChart from './StatusesChart'
import Table from './table/Table'

const Orders = () => {

  const { loading, error, data } = useAdminOrders()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const orders: Order[] = data.adminOrders.items

  const dates = Array.from(new Set(orders.map(item => item.createdAt).map(item => new Date(+item).toLocaleDateString())))

  const chartData: Map<string, number> = new Map()

  dates.sort().forEach(date => chartData.set(date, 0))

  orders.forEach(order => {
    const orderDate = new Date(+order.createdAt).toLocaleDateString()
    const chartDataItem = chartData.get(orderDate)
    chartData.set(orderDate, chartDataItem === undefined ? 1 : chartDataItem + 1)
  })

  return (
    <div className='grid grid-cols-3 gap-5'>
      <Card className='col-span-3 lg:col-span-2'>
        <QuantityChart labels={Array.from(chartData.keys())} data={Array.from(chartData.values())}/>
      </Card>
      <Card className='col-span-3 lg:col-span-1'>
        <StatusesChart orders={orders}/>
      </Card>
      <Card className='col-span-3'>
        <Table/>
      </Card>
    </div>
  )
}

export default Orders