import { Td, Th, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ProductParameter } from '../../../../../../types/ProductParameter'

type DetailsItemProps = {
  name: string
  productParameters: ProductParameter[]
}

const DetailsItem: FC<DetailsItemProps> = ({ name, productParameters }) => {
  return (
    <>
      <Tr><Th>{name}</Th></Tr>
      {productParameters.map(item =>
        <Tr>
          <Th>{item.parameter.name}</Th>  
          <Td>{item.value} {item.unit}</Td>  
        </Tr>  
      )}
    </>
  )
}

export default DetailsItem