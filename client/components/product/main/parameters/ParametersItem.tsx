import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { FC } from 'react'
import { ProductParameter } from '../../../../types/ProductParameter'

type ParametersItemProps = {
  name: string
  parameters: ProductParameter[]
}

const ParametersItem: FC<ParametersItemProps> = ({ name, parameters }) => {

  const sortedParameters = [...parameters].sort((a, b) => a.parameter.order - b.parameter.order)

  return (
    <AccordionItem>
      <AccordionButton justifyContent='space-between' fontSize={24} fontWeight='semibold'>
        {name}
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        {sortedParameters.map(item => <div key={item.id}>{item.parameter.name} - {item.value} {item.unit}</div> )}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default ParametersItem