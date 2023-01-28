import { useRouter } from 'next/router'
import React from 'react'
import Cart from '../components/cart/Cart'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'

const CartPage = () => {

  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  const cart = user.cart
  const products = cart.products

  return (
    <Cart products={products}/>
  )
}

export default CartPage