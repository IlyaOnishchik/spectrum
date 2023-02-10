import React from 'react'
import { useCompared } from '../../hooks/compared/useCompared'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import { Product } from '../../types/Product'

const Compared = () => {

  const { loading, error, data } = useCompared()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.compared.products

  return (
    <div>
      <Stat>
        <StatLabel>Products</StatLabel>
        <StatNumber>{products.length}</StatNumber>
      </Stat>
    </div>
  )
}

export default Compared