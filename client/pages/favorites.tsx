import { useRouter } from 'next/router'
import React from 'react'
import ActivationAlert from '../components/common/alerts/ActivationAlert'
import BanAlert from '../components/common/alerts/BanAlert'
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
  if (!user.isActivated) return <ActivationAlert email={user.email}/>
  if (user.isBanned) return <BanAlert/>

  return <Favorites/>
}

export default FavoritesPage