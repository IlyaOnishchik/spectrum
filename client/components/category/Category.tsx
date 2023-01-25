import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Checkbox } from '@chakra-ui/react'
import { FC } from 'react'
import { useCategory } from '../../hooks/useCategory'
import { useAppDispatch } from '../../redux/hooks'
import { setPrice } from '../../redux/slices/categorySlice'
import { Category } from '../../types/Category'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import Content from './Content'

type CategoryProps = {
  id: string
}

const Category: FC<CategoryProps> = ({ id }) => {

  const dispatch = useAppDispatch()
  const { loading, error, data } = useCategory({ id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const category: Category = data.category
  const products = category.products
  const prices = products.map(item => item.price).sort((a,b) => a - b)
  const minPrice = prices[0]
  const maxPrice = prices[prices.length - 1]
  dispatch(setPrice({ min: minPrice, max: maxPrice, from: minPrice, to: maxPrice}))
  const filters = category.filters
  console.log(filters)

  return (
    <Section title={category.name}>
      <Content categoryId={id}/>
      {/* <Accordion>
        {checkFilters.map(item => 
          <AccordionItem key={item.name}>
            <AccordionButton>{item.name}</AccordionButton>
            <AccordionPanel>
              {item.values.map(item => 
                <>
                  <Checkbox colorScheme='purple'>{item.value} {item.unit}</Checkbox>
                </>
              )}
            </AccordionPanel>
          </AccordionItem>
        )}
        
      </Accordion> */}
    </Section>
  )
}

export default Category