import { gql, useQuery } from '@apollo/client'
import { Button, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import Error from '../../../common/Error'
import Loading from '../../../common/Loading'
import Modal from './Modal'

type AddProps = {
  productId: string
}

const Add: FC<AddProps> = ({ productId }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { loading, error, data } = useQuery(
    gql`query isProductPaid($productId: String!){ isProductPaid(productId: $productId) }`,
    { variables: { productId } }
  )
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>

  return (
    <div>
      <Button disabled={!data.isProductPaid} onClick={onOpen} maxWidth='fit-content' colorScheme='purple'>Add</Button>
      <Modal isOpen={isOpen} onClose={onClose} productId={productId}/>
    </div>
  )
}

export default Add