import React, { FC } from 'react'
import { ProductRating } from '../../../types/ProductRating'
import Button from '../../common/buttons/Button'
import CartButton from '../../common/buttons/CartButton'
import ComparedButton from '../../common/buttons/ComparedButton'
import FavoritesButton from '../../common/buttons/FavoritesButton'
import Rating from '../../common/rating/Rating'

type CommonProps = {
  className?: string
  rating: ProductRating
  productId: string
}

const Common: FC<CommonProps> = ({ className, rating, productId }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center gap-5`}>
      <div className='flex gap-2'>
        <Rating value={rating.value} disabled/>
        <span>({rating.count})</span>
      </div>
      <div>
        <ComparedButton productId={productId}/>
        <FavoritesButton productId={productId}/>
        <CartButton productId={productId}/>
      </div>
    </div>
  )
}

export default Common