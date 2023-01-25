import React, { FC } from 'react'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { CheckFilter, RangeFilter } from '../../../types/Filters'
import CheckFilterComponent from '../../common/filters/CheckFilter'
import RangeFilterComponent from '../../common/filters/RangeFilter'

type FiltersItemProps = {
  filter: RangeFilter | CheckFilter
}

const FiltersItem: FC<FiltersItemProps> = ({ filter }) => {

  console.log(filter)

  return (
    <AccordionItem>
      <AccordionButton fontSize={18} justifyContent='space-between'>
        {filter.name}
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        {
          filter.type === 'check' ? (
            <CheckFilterComponent values={filter.values}/>
          ) : 'range' ? (
            <RangeFilterComponent min={filter.min} max={filter.max} from={filter.from} to={filter.to} onChangeEnd={() => alert('End')}/>
          ) : null
        }
      </AccordionPanel>
    </AccordionItem>
  )
}

export default FiltersItem