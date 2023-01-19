import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'

const FavoritesPage = () => {

  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')

  return (
    <div>FavoritesPage</div>
  )
}

export default FavoritesPage