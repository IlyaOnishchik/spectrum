import React, { FC } from 'react'
import { OrderProduct } from '../../../types/OrderProduct'
import BodyItem from './BodyItem'

type BodyProps = {
  status: string
  orderProducts: OrderProduct[]
}

const Body: FC<BodyProps> = ({ status, orderProducts }) => {
  return (
    <div className='flex flex-wrap gap-5'>
      {orderProducts.map(item => <BodyItem key={item.id} status={status} orderProduct={item}/>)}
    </div>
  )
}

export default Body