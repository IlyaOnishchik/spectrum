import React, { useState } from 'react'
import { useUsers } from '../../../../hooks/useUsers'
import { User } from '../../../../types/User'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import { TableContainer, Table as ChakraTable, Thead, Th, Tbody } from '@chakra-ui/react'
import TableItem from './TableItem'
import Pagination from '../../../common/pagination/Pagination'
import Sorting from '../../../common/sorting/Sorting'
import { SelectOption } from '../../../common/Select'
import { useToggleBanUser } from '../../../../hooks/useToggleBanUser'

const Table = () => {

  const [page, setPage] = useState(0)
  const [take, setTake] = useState(5)
  const [sortBy, setSortBy] = useState('isBanned')
  const [order, setOrder] = useState('desc')

  const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)
  const handleChangeOrder= (e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)

  const sortByOptions: SelectOption[] = [{ name: 'email', value: 'email' }, { name: 'is banned', value: 'isBanned' }]
  const orderOptions: SelectOption[] = [{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]

  const { loading, error, data } = useUsers({ skip: page * take, take, sortBy, order })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const users: User[] = data.users.items
  const count: number = data.users.count
  
  return (
    <div className='flex flex-col gap-5'>
      <Sorting sortBy={sortBy} sortByOptions={sortByOptions} setSortBy={handleChangeSortBy} order={order} orderOptions={orderOptions} setOrder={handleChangeOrder}/>
      <TableContainer>
        <ChakraTable>
          <Thead>
            <Th>email</Th>
            <Th>is banned</Th>
          </Thead>
          <Tbody>
            {users.map(user => <TableItem user={user} skip={page * take} take={take} sortBy={sortBy} order={order}/>)}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Pagination page={page} count={count} take={take} setPage={setPage}/>
    </div>
  )
}

export default Table