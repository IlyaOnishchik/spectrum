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
  const favorites = user.favorites
  const products = favorites.products
  
  return (
    <Favorites products={products}/>
  )
}

export default FavoritesPage