import { FC } from 'react'
import { useHover } from '../../../hooks/useHover'
import { Image } from '../../../types/Image'
import { PriceHistory } from '../../../types/PriceHistory'
import { Product } from '../../../types/Product'
import ImageSlider from '../../common/imageSlider/ImageSlider'
import Common from './common/Common'
import Payment from './Payment'

type HeaderProps = Pick<Product, 'id'|'price'|'quantity'|'rating'> & {
  name: string
  images: Image[]
  pricesHistory: PriceHistory[]
}

const Header: FC<HeaderProps> = ({ name, price, quantity, images, rating, id, pricesHistory }) => {

  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  return (
    <header className='grid grid-cols-12 gap-5 justify-items-stretch'>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='col-span-12 md:col-span-4'>
        <ImageSlider name={name} images={images} isHovered={isHovered}/>
      </div>
      <Common className='col-span-12 sm:col-span-6 md:col-span-4' rating={rating} productId={id} price={price} pricesHistory={pricesHistory}/>
      <Payment price={price} quantity={quantity} className='col-span-12 sm:col-span-6 md:col-span-4'/>
    </header>
  )
}

export default Header