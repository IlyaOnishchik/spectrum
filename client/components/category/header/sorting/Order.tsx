import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { setOrder } from '../../../../redux/slices/categorySlice'
import Select, { SelectOption } from '../../../common/Select'

const Order = () => {

  const dispatch = useAppDispatch()
  const { order } = useAppSelector(state => state.category)
  const options: SelectOption[] = [{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc'}]
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { dispatch(setOrder(e.target.value)) }

  return (
    <div>
      <Select label='Order' value={order} options={options} onChange={handleChange}/>
    </div>
  )
}

export default Order