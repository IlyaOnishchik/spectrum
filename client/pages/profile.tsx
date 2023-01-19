import React from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from '../hooks/useCurrentUser'
import Profile from '../components/profile/Profile'
import Loading from '../components/common/Loading'


const ProfilePage = () => {

  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')

  return (
    <Profile/>
  )
}

export default ProfilePage