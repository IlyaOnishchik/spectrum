import { UserCircleIcon, HeartIcon, ShoppingCartIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, IdentificationIcon, ChartBarSquareIcon } from '@heroicons/react/24/solid'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { useAuth } from '../../../lib/auth/useAuth'
import ActionsItem from './ActionsItem'

const Actions = () => {

  const { data } = useCurrentUser()
  const { signOut } = useAuth()
  console.log(data)

  return (
    <nav>
      <ul className='flex | gap-1'>
        {data ? (
            <>
              <ActionsItem name='Compare' href='/compare' icon={<ChartBarSquareIcon className='w-8 h-8 text-white'/>}/>
              <ActionsItem name='Favorites' href='/favorites' icon={<HeartIcon className='w-8 h-8 text-white'/>}/>
              <ActionsItem name='Cart' href='/cart' icon={<ShoppingCartIcon className='w-8 h-8 text-white'/>}/>
              <ActionsItem name='Profile' href='/profile' icon={<UserCircleIcon className='w-8 h-8 text-white'/>}/>
              <ActionsItem name='Sign out' href='/' icon={<ArrowRightOnRectangleIcon className='w-8 h-8 text-white'/>} onClick={signOut}/>
            </>
          ) : (
            <>
              <ActionsItem name='Sign in' href='/' icon={<ArrowLeftOnRectangleIcon className='w-8 h-8 text-white'/>}/>
              <ActionsItem name='Sign up' href='/' icon={<IdentificationIcon className='w-8 h-8 text-white'/>}/>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Actions