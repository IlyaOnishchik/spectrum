import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { setSortBy } from '../../../../redux/slices/categorySlice'
import Select, { SelectOption } from '../../../common/Select'

const SortBy = () => {

  const dispatch = useAppDispatch()
  const { sortBy } = useAppSelector(state => state.category)
  const options: SelectOption[] = [{ name: 'price', value: 'price'}]
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { dispatch(setSortBy(e.target.value)) }

  return (
    <div>
      <Select label='Sort by' value={sortBy} options={options} onChange={handleChange}/>
    </div>
  )
}

export default SortBy