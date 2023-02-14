import { FC, useEffect } from 'react'
import { useProducts } from '../../hooks/product/useProducts'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Product } from '../../types/Product'
import Loading from '../common/Loading'
import Error from '../common/Error'
import Aside from './aside/Aside'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import { setCount } from '../../redux/slices/categorySlice'
import { Filters } from '../../types/Filters'

const mapFilters = (filters: Filters) => {
  const checkFilters: any = [];
  filters.checkFilters.forEach(item => {
    const values = item.values.filter(item => item.isChecked).map(item => ({ value: item.value, unit: item.unit }))
    checkFilters.push({
      name: item.name,
      values,
    })
  })
  const rangeFilters: any = [];
  filters.rangeFilters.forEach(item => {
    rangeFilters.push({
      name: item.name,
      from: item.from,
      to: item.to
    })
  })
  return {
    checkFilters,
    rangeFilters
  }
}

type ContentProps = {
  categoryId: string
}

const Content: FC<ContentProps> = ({ categoryId }) => {

  const dispatch = useAppDispatch()
  const { page, take, sortBy, order, price: { from, to }, filters } = useAppSelector(state => state.category)
  const { loading, error, data } = useProducts({ 
    categoryId, 
    take, skip: page * take, 
    sortBy, order, 
    minPrice: from, maxPrice: to, 
    filters: mapFilters(filters) 
  })
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