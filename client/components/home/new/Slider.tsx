import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../common/productCard/ProductCard'

import { products } from '../../../data/products'

const Slider = () => {

  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        1280: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
      }}
      className='block | w-full | pb-6'
    >
      {products.map(item =>
        <SwiperSlide key={item.id} className='flex justify-center px-5 pb-5'>
          <ProductCard key={item.id} name={item.name} price={item.price} images={item.images}/>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Slider