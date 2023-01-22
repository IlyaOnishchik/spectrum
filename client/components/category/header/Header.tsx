import React, { FC } from 'react'
import { useAppSelector } from '../../../redux/hooks'

type HeaderProps = {
}

const Header: FC<HeaderProps> = ({ }) => {

  const { count } = useAppSelector(state => state.category)

  return (
    <header className='flex justify-between items-center'>
      <div>Sorting</div>
      <div>Products - {count}</div>
    </header>
  )
}

export default Header