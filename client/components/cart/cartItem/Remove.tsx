import React, { FC } from 'react'
import { useToggleCartProduct } from '../../../hooks/cart/useToggleCartProduct'
import RemoveButton from '../../common/buttons/RemoveButton'

type RemoveProps = {
  productId: string
}

const Remove: FC<RemoveProps> = ({ productId }) => {

  const [toggleProduct] = useToggleCartProduct()
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  }

  return (
    <div>
      <RemoveButton onClick={handleRemove}/>
    </div>
  )
}

export default Remove