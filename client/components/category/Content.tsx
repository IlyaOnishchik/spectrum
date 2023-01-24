import { FC, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Product } from '../../types/Product'
import Loading from '../common/Loading'
import Error from '../common/Error'
import Aside from './aside/Aside'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import { setCount } from '../../redux/slices/categorySlice'

type ContentProps = {
  categoryId: string
}

const Content: FC<ContentProps> = ({ categoryId }) => {

  const dispatch = useAppDispatch()
  const { page, take, sortBy, order, price: { from, to } } = useAppSelector(state => state.category)
  const { loading, error, data } = useProducts({ categoryId, take, skip: page * take, sortBy, order, minPrice: from, maxPrice: to })
  useEffect(() => { if (data) dispatch(setCount(data.products.count)) }, [data])
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.products.items

  return (
    <div className='flex gap-10'>
      <div className='flex-auto flex flex-col | gap-10'>
        <Header/>
        <Main products={products}/>
        <Footer/>
      </div>
      <Aside/>
    </div>
  )
}

export default Content