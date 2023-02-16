import { Alert, AlertIcon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ActivationAlert from '../components/common/alerts/ActivationAlert'
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
  if (!user.isActivated) return <ActivationAlert email={user.email}/>

  return <Orders/>
}

export default OrdersPage