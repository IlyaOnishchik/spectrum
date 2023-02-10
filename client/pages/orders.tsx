import { Alert, AlertIcon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Orders from '../components/orders/Orders'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'

const OrdersPage = () => {
  
  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data?.currentUser
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>

  return <Orders/>
}

export default OrdersPage