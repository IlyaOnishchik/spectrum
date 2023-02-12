import { Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Order } from '../../../../types/Order'

type TableItemProps = {
  order: Pick<Order, 'createdAt'|'amount'|'status'>
}

const TableItem: FC<TableItemProps> = ({ order }) => {

  const createdAt = new Date(+order.createdAt).toLocaleDateString()

  return (
    <Tr>
      <Td>{createdAt}</Td>
      <Td>${order.amount}</Td>
      <Td>{order.status}</Td>
    </Tr>
  )
}

export default TableItem