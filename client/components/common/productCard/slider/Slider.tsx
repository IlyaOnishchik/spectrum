import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHover } from '../../../../hooks/useHover';

import { Image } from '../../../../types/Image'
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';

type SliderProps = {
  name: string
  images: Image[]
  isHovered: boolean
}

const Slider: FC<SliderProps> = ({ name, images, isHovered }) => {

  return (
    <Swiper
      className='w-full h-[200px]'
      allowTouchMove={false}
    >
      <ButtonPrev isHovered={isHovered}/>
      <ButtonNext isHovered={isHovered}/>
      {images.sort((a,b) => a.order - b.order).map(item =>
        <SwiperSlide key={item.id} >
          <img src={`/${item.path}/${item.name}`} alt={name} className='absolute w-full h-full object-contain'/>
        </SwiperSlide>
      )}      
    </Swiper>
  )
}

export default Slider