import React from 'react'
import { useRouter } from 'next/router'
import Loading from '../components/common/Loading'
import Compared from '../components/compared/Compared'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'
import ActivationAlert from '../components/common/alerts/ActivationAlert'
import BanAlert from '../components/common/alerts/BanAlert'

const ComparedPage = () => {
  
  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  if (!user.isActivated) return <ActivationAlert email={user.email}/>
  if (user.isBanned) return <BanAlert/>

  return <Compared/>
}

export default ComparedPage