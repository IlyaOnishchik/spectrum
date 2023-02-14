import { TableContainer, Table as ChakraTable, Thead, Tbody, Tr, Th } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProducts } from '../../../../hooks/product/useProducts'
import Loading from '../../../common/Loading'
import Error from '../../../common/Error'
import { Product } from '../../../../types/Product'
import TableItem from './tableItem/TableItem'
import Pagination from '../../../common/pagination/Pagination'
import { SelectOption } from '../../../common/Select'
import Sorting from '../../../common/sorting/Sorting'

const Table = () => {

  const [page, setPage] = useState(0)
  const [take, setTake] = useState(3)
  const [sortBy, setSortBy] = useState('price')
  const [order, setOrder] = useState('asc')

  const handleChangeSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)
  const handleChangeOrder= (e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)

  const sortByOptions: SelectOption[] = [{ name: 'price', value: 'price' }]
  const orderOptions: SelectOption[] = [{ name: 'asc', value: 'asc' }, { name: 'desc', value: 'desc' }]

  const { loading, error, data } = useProducts({ skip: page * take, take, sortBy, order })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.products.items
  const count: number = data.products.count

  return (
    <div className='flex flex-col gap-5'>
      <Sorting sortBy={sortBy} sortByOptions={sortByOptions} setSortBy={handleChangeSortBy} order={order} orderOptions={orderOptions} setOrder={handleChangeOrder}/>
      <TableContainer>
        <ChakraTable>
          <Thead>
            <Tr>
              <Th>Brand</Th>
              <Th>Model</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map(product => <TableItem key={product.id} product={product} skip={page * take} take={take} sortBy={sortBy} order={order}/>)}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Pagination page={page} count={count} take={take} setPage={setPage}/>
    </div>
  )
}

export default Table