import React from 'react'
import { useCart } from '../../hooks/cart/useCart'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { CartProduct } from '../../types/CartProduct'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

const Cart = () => {

  const { loading, error, data } = useCart()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const cartProducts: CartProduct[] = data.cart.products

  return (
    <div>
      <Stat>
        <StatLabel>Products</StatLabel>
        <StatNumber>{cartProducts.length}</StatNumber>
      </Stat>
    </div>
  )
}

export default Cart