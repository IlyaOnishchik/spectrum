import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setPage, setTake } from '../../../redux/slices/categorySlice'
import Pagination from '../../common/pagination/Pagination'
import Select from '../../common/Select'

const Footer = () => {

  const dispatch = useAppDispatch()
  const { count, page, take } = useAppSelector(state => state.category)
  const options=[{ name: '3', value: 3 }, { name: '6', value: 6 }]
  const handleChangeTake = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPage(0))
    dispatch(setTake(Number(e.target.value)))
  }
  const handleSetPage = (page: number) => { dispatch(setPage(page)) }

  return (
    <footer className='flex justify-between items-center'>
      <Pagination page={page} count={count} take={take} setPage={handleSetPage}/>
      <Select label='Products per page' value={take} options={options} onChange={handleChangeTake}/>
    </footer>
  )
}

export default Footer