import React, { FC } from 'react'
import Button from '../../common/buttons/Button'
import CartButton from '../../common/buttons/CartButton'
import ComparedButton from '../../common/buttons/ComparedButton'
import FavoritesButton from '../../common/buttons/FavoritesButton'

type CommonProps = {
  className?: string
  rating: number
  productId: string
}

const Common: FC<CommonProps> = ({ className, rating, productId }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center gap-5`}>
      <div>Rating {rating}</div>
      <div>
        <ComparedButton productId={productId}/>
        <FavoritesButton productId={productId}/>
        <CartButton productId={productId}/>
      </div>
    </div>
  )
}

export default Common