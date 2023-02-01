import React, { FC } from 'react'
import Button from '../../common/buttons/Button'

type CommonProps = {
  className?: string
  rating: number
}

const Common: FC<CommonProps> = ({ className, rating }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center gap-5`}>
      <div>Rating {rating}</div>
      <Button>Add to cart</Button>
      <Button>Add to favorite</Button>
    </div>
  )
}

export default Common