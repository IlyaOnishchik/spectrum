import React, { FC } from 'react'
import { useToggleCartProduct } from '../../../hooks/useToggleCartProduct'
import RemoveButton from '../../common/RemoveButton'

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
    <RemoveButton onClick={handleRemove} className={'hidden md:block'}/>
  )
}

export default Remove