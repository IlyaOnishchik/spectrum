import React, { FC } from 'react'

type HeaderProps = {
  status: string
  amount: number
  createdAt: string
}

const Header: FC<HeaderProps> = ({ status, amount, createdAt }) => {

  const createdAtdate = new Date(+createdAt).toLocaleDateString()

  const statusColor = status === 'paid' ? 'text-green-500' : status === 'canceled' ? 'text-red-500' : ''

  return (
    <header className='flex gap-5'>
      <span className={`${statusColor} font-bold italic`}>{status.toUpperCase()}</span>
      <span className='flex-auto font-bold'>${amount}</span>
      <span>{createdAtdate}</span>
    </header>
  )
}

export default Header