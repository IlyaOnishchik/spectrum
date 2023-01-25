import React from 'react'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import IconButton from '../../../common/IconButton'
import { Accordion, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, useDisclosure } from '@chakra-ui/react'
import PriceFilter from '../../aside/PriceFilter'
import Filters from '../../aside/Filters'

const Filtration = () => {

  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <div className='flex lg:hidden justify-center items-center'>
      <IconButton onClick={onToggle}>
        <AdjustmentsHorizontalIcon className='w-6 h-6'/>
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose} size='full' scrollBehavior='inside'>
        <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton/>
          <ModalBody className='flex justify-center'>
            <Accordion width={260} allowMultiple>
              <PriceFilter/>
              <Filters/>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Filtration