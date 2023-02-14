import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useProduct } from '../../../../../../hooks/product/useProduct'
import { Product } from '../../../../../../types/Product'
import Error from '../../../../../common/Error'
import Loading from '../../../../../common/Loading'
import DetailsItem from './DetailsItem'

type DetailsProps = {
  id: string
}

const Details: FC<DetailsProps> = ({ id }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { loading, error, data } = useProduct({ id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const product: Product = data.product

  const parametersCategories = Array.from(new Set(product.parameters.map(item => item.parameter.category.name)))

  return (
    <>
      <Button colorScheme='purple' onClick={onOpen}>Show details</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={['full']}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <TableContainer>
              <Table>
                <Tbody>
                  <Tr><Th>id</Th><Td>{product.id}</Td></Tr>
                  <Tr><Th>category</Th><Td>{product.category.name}</Td></Tr>
                  <Tr><Th>price</Th><Td>${product.price}</Td></Tr>
                  <Tr><Th>quantity</Th><Td>{product.quantity}</Td></Tr>
                  {parametersCategories.map(item => 
                    <DetailsItem name={item} productParameters={product.parameters.filter(productParameter => productParameter.parameter.category.name === item)}/>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Details