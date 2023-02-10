import { FC } from 'react'
import Section from '../common/Section'
import ProfileItem from './ProfileItem'
import Orders from './Orders'
import { AcademicCapIcon, ChartBarIcon, CurrencyDollarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import Cart from './Cart'
import Favorites from './Favorites'
import Compared from './Compared'

type ProfileProps = {
  isAdmin: boolean
}

const Profile: FC<ProfileProps> = ({ isAdmin }) => {
  return (
    <Section title='Profile'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {isAdmin && <ProfileItem icon={<AcademicCapIcon className='w-6 h-6'/>} title='Admin' href='/admin'></ProfileItem>}
        <ProfileItem icon={<CurrencyDollarIcon className='w-6 h-6'/>} title='Orders' href='/orders'><Orders/></ProfileItem>
        <ProfileItem icon={<ShoppingCartIcon className='w-6 h-6'/>} title='Cart' href='/cart'><Cart/></ProfileItem>
        <ProfileItem icon={<HeartIcon className='w-6 h-6'/>} title='Favorites' href='/favorites'><Favorites/></ProfileItem>
        <ProfileItem icon={<ChartBarIcon className='w-6 h-6'/>} title='Compared' href='/compared'><Compared/></ProfileItem>
      </ul>
    </Section>

  )
}

export default Profile