import React from 'react'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import Error from '../common/Error'
import Loading from '../common/Loading'

const Profile = () => {

  const { data, loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>

  console.log(data)

  return (
    <div>Profile</div>
  )
}

export default Profile