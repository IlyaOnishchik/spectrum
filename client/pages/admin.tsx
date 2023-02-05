import { Alert, AlertIcon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Admin from '../components/admin/Admin'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'

const AdminPage = () => {
  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  const isAdmin = !!user.roles.find(item => item.name === 'admin')
  if (!isAdmin) router.push('/')
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>

  return <Admin/>
}

export default AdminPage