import React, { FC } from 'react'
import { Product } from '../../../types/Product'
import Products from './Products'

type MainProps = {
  products: Product[]
}

const Main: FC<MainProps> = ({ products }) => {
  return (
    <div className='self-center 2xl:self-start'>
      <Products products={products}/>
    </div>
  )
}

export default Main