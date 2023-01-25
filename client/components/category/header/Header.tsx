import { FC } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import Filtration from './filtration/Filtration'
import Sorting from './sorting/Sorting'

type HeaderProps = {
}

const Header: FC<HeaderProps> = ({ }) => {

  const { count } = useAppSelector(state => state.category)

  return (
    <header className='flex flex-col sm:flex-row justify-between lg:justify-start items-center gap-5 text-lg'>
      <Sorting/>
      <div className='flex gap-5'>
        <div>Products - {count}</div>
        <Filtration/>
      </div>
    </header>
  )
}

export default Header