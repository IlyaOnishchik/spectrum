import { FC } from 'react'
import ImageSlider from '../imageSlider/ImageSlider'
import Actions from './Actions'
import { useHover } from '../../../hooks/useHover'
import { Product } from '../../../types/Product'
import Link from 'next/link'

type ProductCardProps = {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

  const brand = product.parameters.find(item => item.parameter.name === 'Brand')?.value || 'Brand'
  const model = product.parameters.find(item => item.parameter.name === 'Model')?.value || 'Model'
  const name = brand + ' ' + model
  const images = [...product.images].sort((a,b) => a.order - b.order).map(item => item.image)

  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  return (
    <div 
      className='flex flex-col | w-[260px] gap-5 px-5 py-3 | transition-all shadow md:shadow-lg md:hover:shadow-md rounded-xl'
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      <ImageSlider name={name} images={images} isHovered={isHovered}/>
      <Link href={`/products/${product.id}`}>
        <div className='flex flex-col | gap-1'>
          <div className='text-lg font-bold'>{name}</div>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>${product.price}</div>
            <Actions productId={product.id}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard