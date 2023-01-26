import React, { FC } from 'react'
import Button from '../../common/Button'

type CommonType = {
  className?: string
}

const Common: FC<CommonType> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center gap-5`}>
      <Button>Add to cart</Button>
      <Button>Add to favorite</Button>
    </div>
  )
}

export default Common