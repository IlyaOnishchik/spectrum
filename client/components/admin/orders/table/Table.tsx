import React, { useState } from 'react'
import { useAdminOrders } from '../../../../hooks/order/useAdminOrders'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import { Order } from '../../../../types/Order'
import { TableContainer, Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import Pagination from '../../../common/pagination/Pagination'
import TableItem from './TableItem'
import { SelectOption } from '../../../common/Select'
import Sorting from '../../../common/sorting/Sorting'

const Table = () => {

  const [page, setPage] = useState(0)
  const [take, setTake] = useState(5)
  const [sortBy, setSortBy] = useState('createdAt')
  const [order, setOrder] = useState('desc')

  const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)
  const handleChangeOrder= (e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)

  const sortByOptions: SelectOption[] = [{ name: 'created at', value: 'createdAt' }, { name: 'amount', value: 'amount' }, { name: 'status', value: 'status' }]
  const orderOptions: SelectOption[] = [{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]

  const { loading, error, data } = useAdminOrders({ skip: page * take, take, sortBy, order })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const orders: Order[] = data.adminOrders.items
  const count: number = data.adminOrders.count

  return (
    <div className='flex flex-col gap-5'>
      <Sorting sortBy={sortBy} sortByOptions={sortByOptions} setSortBy={handleChangeSortBy} order={order} orderOptions={orderOptions} setOrder={handleChangeOrder}/>
      <TableContainer>
        <ChakraTable>
          <Thead>
            <Tr>
              <Th>created at</Th>
              <Th>amount</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map(order => <TableItem order={order}/>)}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Pagination page={page} count={count} take={take} setPage={setPage}/>
    </div>
  )
}

export default Table