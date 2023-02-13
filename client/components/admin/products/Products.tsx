import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Card } from '../../common/card'
import ModalCreate from './ModalCreate'
import Table from './table/Table'

const Products = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='flex flex-col gap-5'>
      <Button alignSelf='start' colorScheme='purple' onClick={onOpen}>Create</Button>
      <ModalCreate isOpen={isOpen} onClose={onClose}/>
      <Card>
        <Table/>
      </Card>
    </div>
  )
}

export default Products