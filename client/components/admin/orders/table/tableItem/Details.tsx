import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Order } from '../../../../../types/Order'

type DetailsProps = {
  order: Order
}

const Details: FC<DetailsProps> = ({ order }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='purple' onClick={onOpen}>Show details</Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalBody>
            <Table>
              <Tbody>
                <Tr><Th>id</Th><Td>{order.id}</Td></Tr>
                <Tr><Th>amount</Th><Td>${order.amount}</Td></Tr>
                <Tr><Th>status</Th><Td>{order.status}</Td></Tr>
                <Tr><Th>created</Th><Td>{new Date(+order.createdAt).toLocaleDateString()}</Td></Tr>
                <Tr><Th>updated</Th><Td>{new Date(+order.updatedAt).toLocaleDateString()}</Td></Tr>
                <Tr><Th>name</Th><Td>{order.name}</Td></Tr>
                <Tr><Th>phone</Th><Td>{order.phone}</Td></Tr>
                <Tr><Th>country</Th><Td>{order.country}</Td></Tr>
                <Tr><Th>city</Th><Td>{order.city}</Td></Tr>
                <Tr><Th>address</Th><Td>{order.address}</Td></Tr>
                <Tr><Th>zip code</Th><Td>{order.zipCode}</Td></Tr>
              </Tbody>
            </Table>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Details