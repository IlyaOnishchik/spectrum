import { Alert, AlertIcon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Favorites from '../components/favorites/Favorites'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'

const FavoritesPage = () => {

  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>

  return <Favorites/>
}

export default FavoritesPage