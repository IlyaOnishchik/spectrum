import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setPriceFrom, setPriceTo } from '../../../redux/slices/categorySlice'
import RangeFilter from '../../common/filters/RangeFilter'

const PriceFilter = () => {

  const dispatch = useAppDispatch()
  const { min, max, from, to } = useAppSelector(state => state.category.price)

  const handleChangeEnd = (value: number[]) => {
    dispatch(setPriceFrom(value[0]))
    dispatch(setPriceTo(value[1]))
  }

  return (
    <AccordionItem>
      <AccordionButton fontSize={18} justifyContent='space-between'>
        Price $
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        <RangeFilter min={min} max={max} from={from} to={to} onChangeEnd={handleChangeEnd}/>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default PriceFilter