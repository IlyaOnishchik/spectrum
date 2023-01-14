import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { FC } from 'react'

// const categories = [
//   {
//     name: '',
//     imageName: '',
//     parentCategoryName: ''
//   }
// ]

type MenuModalProps = {
  isOpen: boolean
  onClose: () => void
}

const MenuModal: FC<MenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['full', 'md', '2xl', '4xl', '6xl']} scrollBehavior='inside'>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Catalog</ModalHeader>
        <ModalCloseButton/>
      </ModalContent>
    </Modal>
  )
}

export default MenuModal