import { Accordion } from '@chakra-ui/react'
import React from 'react'
import { useOrders } from '../../hooks/order/useOrders'
import { Order } from '../../types/Order'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import OrdersItem from './ordersItem/OrdersItem'

const Orders = () => {

  const { loading, error, data } = useOrders()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const orders: Pick<Order, 'id' | 'status' | 'amount' | 'createdAt' | 'orderProducts'>[] = data.orders

  return (
    <Section title='Orders'>
      <Accordion allowMultiple defaultIndex={[0]} className='flex flex-col gap-5'>
        {
          orders.length ? 
            [...orders].sort((a, b) => +b.createdAt - +a.createdAt).map(item => <OrdersItem key={item.id} order={item}/>) :
            <div>Your orders empty.</div>
        }
      </Accordion>
    </Section>
  )
}

export default Orders