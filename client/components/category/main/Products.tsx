import { FC } from "react"
import { Product } from "../../../types/Product"
import ProductCard from "../../common/productCard/ProductCard"

type ProductsProps = {
  products: Product[]
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      {products.map(item => <ProductCard key={item.id} product={item}/>)}
    </div>
  )
}

export default Products