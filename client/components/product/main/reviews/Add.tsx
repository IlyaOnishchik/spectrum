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
      <button onClick={handleClick}>Add</button>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
    </div>
  )
}

export default Add