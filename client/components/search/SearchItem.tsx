import { FC } from "react"
import { useProduct } from "../../hooks/useProduct"
import { Product } from "../../types/Product"
import { Card, CardBody, CardImage } from "../common/card"
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