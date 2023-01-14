import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide1 from './Slide1';

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className='h-full pb-8'
    >
      <SwiperSlide className='h-full px-10'><Slide1/></SwiperSlide>
      <SwiperSlide className='h-full px-10'><Slide1/></SwiperSlide>
    </Swiper>
  )
}

export default Slider