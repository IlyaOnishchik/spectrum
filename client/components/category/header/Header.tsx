import React, { FC } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import Select from '../../common/Select'
import Sorting from './sorting/Sorting'

type HeaderProps = {
}

const Header: FC<HeaderProps> = ({ }) => {

  const { count } = useAppSelector(state => state.category)

  return (
    <header className='flex justify-between items-center text-lg'>
      <Sorting/>
      <div>Products - {count}</div>
    </header>
  )
}

export default Header