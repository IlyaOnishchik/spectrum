import React, { FC } from 'react'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { CheckFilter, RangeFilter } from '../../../types/Filters'
import CheckFilterComponent from './CheckFilter'
import RangeFilterComponent from './RangeFilter'
import { useAppDispatch } from '../../../redux/hooks'
import { setRangeFilterValue, toggleCheckFilterValue } from '../../../redux/slices/categorySlice'

type FiltersItemProps = {
  filter: RangeFilter | CheckFilter
}

const FiltersItem: FC<FiltersItemProps> = ({ filter }) => {

  const dispatch = useAppDispatch()

  return (
    <AccordionItem>
      <AccordionButton fontSize={18} justifyContent='space-between'>
        {filter.name}
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        {
          filter.type === 'check' ? (
            <CheckFilterComponent id={filter.id} values={filter.values}/>
          ) : 'range' ? (
            <RangeFilterComponent 
              min={filter.min} 
              max={filter.max} 
              from={filter.from}
              to={filter.to}
              onChangeEnd={(value) => dispatch(setRangeFilterValue({ id: filter.id, from: value[0], to: value[1] }))}/>
          ) : null
        }
      </AccordionPanel>
    </AccordionItem>
  )
}

export default FiltersItem