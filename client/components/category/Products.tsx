import { FC } from "react"
import { useProducts } from "../../hooks/useProducts"
import { Category } from "../../types/Category"
import { Product } from "../../types/Product"
import Error from "../common/Error"
import Loading from "../common/Loading"
import ProductCard from "../common/productCard/ProductCard"

type ProductsProps = {
  category: Category
}

const Products: FC<ProductsProps> = ({ category }) => {

  const { loading, error, data } = useProducts({ categoryId: category.id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.products 

  return (
    <div>
      {products.map(item => <ProductCard product={item}/>)}
    </div>
  )
}

export default Products