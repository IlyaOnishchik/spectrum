import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Favorites from '../components/favorites/Favorites'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'

const FavoritesPage = () => {

  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  
  return <Favorites/>
}

export default FavoritesPage