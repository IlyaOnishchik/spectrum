import { FC } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import OrderForm from './OrderForm'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
}

const OrderModal: FC<OrderModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['full', 'md']}>
      <ModalOverlay/>
      <ModalContent paddingBottom={2}>
        <ModalHeader>Order</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <OrderForm onClose={onClose}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default OrderModal