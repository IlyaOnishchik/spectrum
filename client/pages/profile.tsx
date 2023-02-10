import React from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from '../hooks/useCurrentUser'
import Profile from '../components/profile/Profile'
import Loading from '../components/common/Loading'
import { User } from '../types/User'
import { Alert, AlertIcon } from '@chakra-ui/react'


const ProfilePage = () => {

  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User= data?.currentUser
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>
  const isAdmin = !!user.roles.find(item => item.name === 'admin')

  return <Profile isAdmin={isAdmin}/>
}

export default ProfilePage