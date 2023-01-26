import { FC } from "react"
import { useProduct } from "../../hooks/useProduct"
import { Product } from "../../types/Product"
import Error from "../common/Error"
import Loading from "../common/Loading"
import Section from "../common/Section"
import Header from "./header/Header"
import Main from "./main/Main"

type ProductProps = {
  id: string
}

const Product: FC<ProductProps> = ({ id }) => {

  const { loading, error, data } = useProduct({ id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const product: Product = data.product
  const brand = product.parameters.find(item => item.parameter.name === 'Brand')?.value || 'Brand'
  const model = product.parameters.find(item => item.parameter.name === 'Model')?.value || 'Model'
  const name = brand + ' ' + model
  const price = product.price
  const quantity = product.quantity
  const images = [...product.images].sort((a,b) => a.order - b.order).map(item => item.image)
  const parameters = product.parameters

  return (
    <Section title={name}>
      <Header name={name} price={price} quanity={quantity} images={images}/>
      <Main parameters={parameters}/>
    </Section>
  )
}

export default Product