import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProducts } from '../../../hooks/useProducts'
import Loading from '../../common/Loading'
import Error from '../../common/Error'
import ProductCard from '../../common/productCard/ProductCard'
import { Product } from '../../../types/Product'

const Slider = () => {
  const { loading, error, data } = useProducts()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.products

  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        1535: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
      }}
      className='block | w-full | pb-6'
    >
      {products.map(item => 
        <SwiperSlide key={item.id} className='flex justify-center px-5 pb-5'>
          <ProductCard product={item}/>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Slider