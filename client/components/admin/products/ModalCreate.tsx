import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { FC } from 'react'

type ModalCreateProps = {
  isOpen: boolean
  onClose: () => void
}

const ModalCreate: FC<ModalCreateProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create product</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalCreate