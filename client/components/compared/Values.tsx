import { FC } from "react"
import { Parameter } from "../../types/Parameter"
import { Product } from "../../types/Product"
import ValuesItem from "./ValuesItem"

type ValuesProps = {
  parameter: Parameter,
  products: Product[]
}

const Values: FC<ValuesProps> = ({ parameter, products }) => {
  return (
    <>{products.map(item => <ValuesItem key={item.id} parameter={parameter} product={item}/>)}</>
  )
}

export default Values