import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Compared from '../components/compared/Compared'
import { useCurrentUser } from '../hooks/useCurrentUser'

const ComparedPage = () => {
  
  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')

  return (
    <Compared/>
  )
}

export default ComparedPage