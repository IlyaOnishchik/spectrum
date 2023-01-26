import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import FiltersItem from './FiltersItem'

const Filters = () => {

  const { checkFilters, rangeFilters } = useAppSelector(state => state.category.filters)
  const filters = [...checkFilters, ...rangeFilters].sort((a, b) => a.order - b.order)

  return (
    <>
      {filters.map(item => <FiltersItem key={item.id} filter={item}/>)}
    </>
  )
}

export default Filters