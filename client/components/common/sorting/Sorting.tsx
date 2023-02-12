import React, { FC } from 'react'
import { SelectOption } from '../Select'
import Order from './Order'
import SortBy from './SortBy'

type SortingProps = {
  sortBy: string
  sortByOptions: SelectOption[]
  setSortBy: (e: React.ChangeEvent<HTMLSelectElement>) => void
  order: string
  orderOptions: SelectOption[]
  setOrder: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Sorting: FC<SortingProps> = ({ sortBy, sortByOptions, setSortBy, order, orderOptions, setOrder }) => {
  return (
    <div className='flex flex-wrap gap-5'>
      <SortBy value={sortBy} options={sortByOptions} onChange={setSortBy}/>
      <Order value={order} options={orderOptions} onChange={setOrder}/>
    </div>
  )
}

export default Sorting