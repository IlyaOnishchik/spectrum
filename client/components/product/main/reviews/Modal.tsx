import React, { FC, useState } from 'react'
import { Button, Input, Modal as ModalChakra, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import Rating from '../../../common/rating/Rating'
import { useCreaterating } from '../../../../hooks/useCreateRating'
import { useCreateReview } from '../../../../hooks/useCreateReview'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  productId: string
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, productId }) => {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  const [createReview] = useCreateReview(productId)
  const [createRating, { error }] = useCreaterating(productId)

  const handleAdd = () => {
    if (!text || !rating) alert('Invalid input')
    else {
      createReview({ variables: { productId, text } })
      createRating({ variables: { productId, value: rating } })
      if (error) console.log(error)
      onClose()
    }
  }

  return (
   <ModalChakra isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>Add review</ModalHeader>
      <ModalCloseButton/>
      <ModalBody className='flex flex-col gap-3'>
        <Input focusBorderColor='#805AD5' maxWidth='80%' value={text} onChange={e => setText(e.target.value)}/>
        <Rating value={rating} onClick={(value) => setRating(value)}/>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='purple' onClick={handleAdd}>Add</Button>
      </ModalFooter>
    </ModalContent>
   </ModalChakra>
  )
}

export default Modal