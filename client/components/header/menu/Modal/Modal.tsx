import { FC } from 'react'
import { Modal as ModalChakra, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import Body from './Body'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {


  return (
    <ModalChakra isOpen={isOpen} onClose={onClose} size={['full', 'md', '2xl', '4xl', '6xl']} scrollBehavior='inside'>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Catalog</ModalHeader>
        <ModalCloseButton/>
        <Body onClose={onClose}/>
      </ModalContent>
    </ModalChakra>
  )
}

export default Modal