import React from 'react'
import { useRouter } from 'next/router'
import Cart from '../components/cart/Cart'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'
import { Alert, AlertIcon } from '@chakra-ui/react'
import ActivationAlert from '../components/common/alerts/ActivationAlert'
import BanAlert from '../components/common/alerts/BanAlert'

const CartPage = () => {

  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  if (!user.isActivated) return <ActivationAlert email={user.email}/>
  if (user.isBanned) return <BanAlert/>
  
  return (
    <Cart/>
  )
}

export default CartPage