import { FC } from "react"
import { useProduct } from "../../hooks/product/useProduct"
import { Product } from "../../types/Product"
import Error from "../common/Error"
import Loading from "../common/Loading"
import ProductCard from "../common/productCard/ProductCard"

type SearchItemProps = {
  id: string
}

const SearchItem: FC<SearchItemProps> = ({ id }) => {

  const { loading, error, data } = useProduct({ id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const product: Product = data.product

  return (
    <ProductCard product={product}/>
  )
}

export default SearchItem