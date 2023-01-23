import { FC } from "react"
import { Product } from "../../../types/Product"
import { ProductParameter } from "../../../types/ProductParameter"

type AsideProps = {
  products: Product[]
}

const Aside: FC<AsideProps> = ({ products }) => {

  console.log(products)

  const allParameters = products.map(item => item.parameters)
  console.log(allParameters)

  return (
    <aside>Aside</aside>
  )
}

export default Aside