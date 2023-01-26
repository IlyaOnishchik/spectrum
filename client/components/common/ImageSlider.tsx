import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonNext from './productCard/slider/ButtonNext';
import ButtonPrev from './productCard/slider/ButtonPrev';
import { Image } from '../../types/Image'

type ImageSliderProps = {
  name: string
  images: Image[]
  isHovered: boolean
  height: string
}

const ImageSlider: FC<ImageSliderProps> = ({ name, images, isHovered, height }) => {
  return (
    <Swiper
      className={`w-full h-[${height}]`}
      allowTouchMove={false}
      loop={true}
    >
      <ButtonPrev isHovered={isHovered}/>
      <ButtonNext isHovered={isHovered}/>
      {images.map(item =>
        <SwiperSlide key={item.id} >
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.name}`} alt={name} className='absolute w-full h-full object-contain'/>
        </SwiperSlide>
      )}      
    </Swiper>
  )
}

export default ImageSlider