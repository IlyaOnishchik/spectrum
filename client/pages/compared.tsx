import React from 'react'
import { useRouter } from 'next/router'
import Loading from '../components/common/Loading'
import Compared from '../components/compared/Compared'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'
import Section from '../components/common/Section'
import { Alert, AlertIcon } from '@chakra-ui/react'

const ComparedPage = () => {
  
  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>

  return <Compared/>
}

export default ComparedPage