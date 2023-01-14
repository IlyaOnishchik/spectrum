import { FC } from 'react'

import { Image } from '../../../types/Image'
import Slider from './slider/Slider'
import Actions from './Actions'
import { useHover } from '../../../hooks/useHover'

type ProductCardProps = {
  name: string
  price: number
  images: Image[]
}

const ProductCard: FC<ProductCardProps> = ({ name, price, images }) => {

  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  return (
    <div 
      className='flex flex-col | w-[280px] gap-5 px-5 py-3 | transition-all md:hover:shadow-lg rounded-xl'
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      <Slider name={name} images={images} isHovered={isHovered}/>
      <div className='flex flex-col | gap-1'>
        <div className='text-lg font-bold'>{name}</div>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold'>{price} $</div>
          <Actions/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard