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
      <AccordionButton justifyContent='space-between' fontSize={[20, 20, 24]} fontWeight={700}>
        {name}
        <AccordionIcon/>
      </AccordionButton>
      <AccordionPanel>
        <div className='flex justify-between flex-wrap gap-3'>
          {sortedParameters.map(item => 
            <div key={item.id} className='flex md:text-lg basis-full md:basis-2/5'>
              <span>{item.parameter.name}</span>
              <span className='flex-auto border-b border-dashed border-black'></span>
              <span className='font-bold'>{item.value} {item.unit}</span>
            </div>
          )}
        </div>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default ParametersItem