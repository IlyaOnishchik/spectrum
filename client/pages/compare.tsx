import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Compare from '../components/compare/Compare'
import { useCurrentUser } from '../hooks/useCurrentUser'

const ComparePage = () => {
  
  const router = useRouter()
  const { loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')

  return (
    <Compare/>
  )
}

export default ComparePage