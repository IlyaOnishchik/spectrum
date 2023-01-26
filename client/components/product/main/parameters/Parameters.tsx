import { Accordion } from '@chakra-ui/react'
import { FC } from 'react'
import { ProductParameter } from '../../../../types/ProductParameter'
import ParametersItem from './ParametersItem'

type ParametersProps = {
  parameters: ProductParameter[]
}

const Parameters: FC<ParametersProps> = ({ parameters }) => {

  const sortedMappedParameters = [...parameters]
    .sort((a,b) => +a.parameter.category.order - +b.parameter.category.order)
    .map(productParameter => productParameter.parameter.category.name)

  const categories = Array.from(new Set(sortedMappedParameters))
  const mappedCategories = categories.map(category => ({
    name: category,
    parameters: parameters.filter(parameter => parameter.parameter.category.name === category)
  }))
  
  return (
    <Accordion allowMultiple>
      {
        mappedCategories.map(item => <ParametersItem key={item.name} name={item.name} parameters={item.parameters}/>)
      }
    </Accordion>
  )
}

export default Parameters