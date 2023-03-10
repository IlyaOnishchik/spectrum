import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';
import { Image } from '../../../types/Image'

type ImageSliderProps = {
  name: string
  images: Image[]
  isHovered: boolean
}

const ImageSlider: FC<ImageSliderProps> = ({ name, images, isHovered }) => {
  return (
    <Swiper
      className={`w-full h-[200px]`}
      allowTouchMove={false}
      loop={true}
    >
      <ButtonPrev isHovered={isHovered}/>
      <ButtonNext isHovered={isHovered}/>
      {images.map(item =>
        <SwiperSlide key={item.name} >
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.name}`} alt={name} className='absolute w-full h-full object-contain'/>
        </SwiperSlide>
      )}      
    </Swiper>
  )
}

export default ImageSlider