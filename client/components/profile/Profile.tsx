import { FC } from 'react'
import Link from 'next/link'
import Section from '../common/Section'

type ProfileProps = {
  isAdmin: boolean
}

const Profile: FC<ProfileProps> = ({ isAdmin }) => {
  return (
    <Section title='Profile'>
      <ul>
        {isAdmin && <li><Link href='/admin'>Admin</Link></li>}
        <li><Link href='/orders'>Orders</Link></li>
        <li><Link href='/cart'>Cart</Link></li>
        <li><Link href='/favorites'>Favorites</Link></li>
        <li><Link href='/compared'>Compared</Link></li>
      </ul>
    </Section>

  )
}

export default Profile