import { Button, Input } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { useCreateReview } from '../../../../hooks/useCreateReview'

type AddProps = {
  productId: string
}

const Add: FC<AddProps> = ({ productId }) => {

  const [text, setText] = useState('')
  const [createReview] = useCreateReview(productId)
  const handleClick = () => createReview({ variables: { productId, text } })

  return (
    <div>
      <Button onClick={handleClick} colorScheme='purple'>Add</Button>
      <Input type="text" value={text} onChange={e => setText(e.target.value)} focusBorderColor='#805AD5'/>
    </div>
  )
}

export default Add