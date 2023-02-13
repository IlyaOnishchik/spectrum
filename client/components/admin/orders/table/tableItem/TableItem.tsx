import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack, Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Order } from '../../../../../types/Order'
import Details from './Details'
import Status from './Status'

type TableItemProps = {
  order: Order
  skip: number, take: number, 
  sortBy: string, sortOrder: string
}

const TableItem: FC<TableItemProps> = ({ order, skip, take, sortBy, sortOrder }) => {

  const createdAt = new Date(+order.createdAt).toLocaleDateString()

  return (
    <Popover size='xs'>
      <PopoverTrigger>
        <Tr cursor='pointer'>
          <Td>{createdAt}</Td>
          <Td>${order.amount}</Td>
          <Td>{order.status}</Td>
        </Tr>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Stack>
              <Details order={order}/>
              <Status id={order.id} status={order.status} skip={skip} take={take} sortBy={sortBy} order={sortOrder}/>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default TableItem