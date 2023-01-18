import { useDisclosure } from '@chakra-ui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Modal from './Modal/Modal'

const Menu = () => {

  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <button className='p-1 | rounded | bg-white transition-all' onClick={onToggle}>
      {
        isOpen
          ? <XMarkIcon className='w-6 h-6 hover:scale-50 text-violet-500 hover:text-violet-600'/>
          : <Bars3Icon className='w-6 h-6 hover:scale-[120%] text-violet-500 hover:text-violet-600 transition-all'/>
      }
      <Modal isOpen={isOpen} onClose={onClose}/>
    </button>
  )
}

export default Menu