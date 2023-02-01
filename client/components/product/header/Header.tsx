import { FC } from 'react'
import { useHover } from '../../../hooks/useHover'
import { Image } from '../../../types/Image'
import ImageSlider from '../../common/imageSlider/ImageSlider'
import Common from './Common'
import Payment from './Payment'

type HeaderProps = {
  name: string
  price: number
  quanity: number
  images: Image[]
}

const Header: FC<HeaderProps> = ({ name, price, quanity, images }) => {

  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  return (
    <header className='grid grid-cols-12 gap-5 justify-items-stretch'>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='col-span-12 md:col-span-4'>
        <ImageSlider name={name} images={images} isHovered={isHovered}/>
      </div>
      <Common className='col-span-12 sm:col-span-6 md:col-span-4'/>
      <Payment price={price} quantity={quanity} className='col-span-12 sm:col-span-6 md:col-span-4'/>
    </header>
  )
}

export default Header