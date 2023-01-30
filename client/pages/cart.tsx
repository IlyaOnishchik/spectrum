import React from 'react'
import { useRouter } from 'next/router'
import Cart from '../components/cart/Cart'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'

const CartPage = () => {

  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')

  return (
    <Cart/>
  )
}

export default CartPage