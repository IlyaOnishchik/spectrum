import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Stack, Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Product } from '../../../../../types/Product'
import Delete from './Delete'
import Details from './details/Details'
import Edit from './edit/Edit'

type TableItemProps = {
  product: Product
}

const TableItem: FC<TableItemProps> = ({ product }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Tr cursor='pointer'>
          <Td>{product.parameters.find(item => item.parameter.name === 'Brand')?.value}</Td>
          <Td>{product.parameters.find(item => item.parameter.name === 'Model')?.value}</Td>
          <Td>${product.price}</Td>
        </Tr>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Stack>
              <Details id={product.id}/>
              <Edit/>
              <Delete/>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default TableItem