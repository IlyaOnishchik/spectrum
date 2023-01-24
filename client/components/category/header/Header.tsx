import { FC } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import Filtration from './filtration/Filtration'
import Sorting from './sorting/Sorting'

type HeaderProps = {
}

const Header: FC<HeaderProps> = ({ }) => {

  const { count } = useAppSelector(state => state.category)

  return (
    <header className='flex justify-between lg:justify-start items-center gap-10 text-lg'>
      <Filtration/>
      <Sorting/>
      <div>Products - {count}</div>
    </header>
  )
}

export default Header