import { FC } from "react"
import { useProducts } from "../../../hooks/useProducts"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { setCount } from "../../../redux/slices/categorySlice"
import { Product } from "../../../types/Product"
import Error from "../../common/Error"
import Loading from "../../common/Loading"
import ProductCard from "../../common/productCard/ProductCard"

type ProductsProps = {
  products: Product[]
}

const Products: FC<ProductsProps> = ({ products }) => {

  // const dispatch = useAppDispatch()
  // const { categoryId, take, skip } = useAppSelector(state => state.category)
  // const { loading, error, data } = useProducts({ categoryId, take, skip })
  // if (loading) return <Loading/>
  // if (error) return <Error message={error.message}/>
  // const products: Product[] = data.products.items
  // const count: number = data.products.count
  // dispatch(setCount(count))

  return (
    <div className='grid grid-cols-3 gap-10'>
      {products.map(item => <ProductCard key={item.id} product={item}/>)}
    </div>
  )
}

export default Products