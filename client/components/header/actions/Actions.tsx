import { useDisclosure } from '@chakra-ui/react'
import { UserCircleIcon, HeartIcon, ShoppingCartIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, IdentificationIcon, ChartBarSquareIcon } from '@heroicons/react/24/solid'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { useAuth } from '../../../lib/auth/useAuth'
import ActionsItem from './ActionsItem'
import AuthModal from './auth/AuthModal'

const Actions = () => {

  const { data } = useCurrentUser()
  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()
  const { signIn, signUp, signOut } = useAuth()

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
              <ActionsItem
                name='Sign in' 
                href='/' 
                icon={<ArrowLeftOnRectangleIcon className='w-8 h-8 text-white'/>}
                onClick={onSignInOpen}
              />
              <AuthModal title='Sign in' isOpen={isSignInOpen} onClose={onSignInClose} callback={signIn}/>
              <ActionsItem
                name='Sign up'
                href='/'
                icon={<IdentificationIcon className='w-8 h-8 text-white'/>}
                onClick={onSignUpOpen}
              />
              <AuthModal title='Sign up' isOpen={isSignUpOpen} onClose={onSignUpClose} callback={signUp}/>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Actions