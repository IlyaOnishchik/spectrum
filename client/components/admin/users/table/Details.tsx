import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { User } from '../../../../types/User'

type DetailsProps = {
  user: User
}

const Details: FC<DetailsProps> = ({ user }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const roles = user.roles.map(role => role.name).join(', ')

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
                <Tr><Th>id</Th><Td>{user.id}</Td></Tr>
                <Tr><Th>email</Th><Td>{user.email}</Td></Tr>
                <Tr><Th>is activated</Th><Td>{String(user.isActivated)}</Td></Tr>
                <Tr><Th>is banned</Th><Td>{String(user.isBanned)}</Td></Tr>
                <Tr><Th>roles</Th><Td>{roles}</Td></Tr>
                <Tr><Th>orders amount</Th><Td>${user.ordersAmount}</Td></Tr>
                <Tr><Th>redemption amount</Th><Td>${user.redemptionAmount}</Td></Tr>
                <Tr><Th>redemption percent</Th><Td>{Math.round(user.redemptionPercent)}%</Td></Tr>
              </Tbody>
            </Table>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Details