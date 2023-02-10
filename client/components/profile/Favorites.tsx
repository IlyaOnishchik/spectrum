import React from 'react'
import { useFavorites } from '../../hooks/favorites/useFavorites'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { Product } from '../../types/Product'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

const Favorites = () => {

  const { loading, error, data } = useFavorites()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.favorites.products

  return (
    <div>
      <Stat>
        <StatLabel>Products</StatLabel>
        <StatNumber>{products.length}</StatNumber>
      </Stat>
    </div>
  )
}

export default Favorites