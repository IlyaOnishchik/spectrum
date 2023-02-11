import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Order } from '../../../types/Order'
import Body from './Body'
import Header from './Header'

type OrdersItemProps = {
  order: Pick<Order, 'id' | 'status' | 'amount' | 'createdAt' | 'orderProducts'>
}

const OrdersItem: FC<OrdersItemProps> = ({ order }) => {
  return (
    <AccordionItem border='none'>
      <AccordionButton className='flex justify-between shadow hover:shadow-md rounded-lg transition-all bg-violet-50'>
        <Header status={order.status} amount={order.amount} createdAt={order.createdAt}/>
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        <Body status={order.status} orderProducts={order.orderProducts}/>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default OrdersItem