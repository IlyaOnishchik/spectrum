import React from 'react'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { User } from '../../types/User'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'

const Profile = () => {

  const { data, loading, error } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const user: User = data.currentUser
  const email  = user.email
  const isActivated = user.isActivated

  return (
    <div>
      {
        isActivated ? (
          <Section title='Profile'>
            {email}
          </Section>
        ) : (
          <div>Activate your account please!</div>
        )
      }
    </div>
  )
}

export default Profile