import React, { FC } from 'react'
import Button from '../../common/buttons/Button'

type PaymentProps = {
  className?: string
  price: number
  quantity: number
}

const Payment: FC<PaymentProps> = ({ className, price, quantity }) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className='flex flex-col gap-3 p-5 shadow-xl rounded-xl'>
        <div className='text-5xl font-bold'>${price}</div>
        <div><span className='font-bold'>{quantity}</span> left</div>
        <Button>Buy now</Button>
      </div>
    </div>
  )
}

export default Payment