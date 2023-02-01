import { Td } from "@chakra-ui/react"
import { FC } from "react"
import { Parameter } from "../../types/Parameter"
import { Product } from "../../types/Product"

type ValuesItemProps = {
  parameter: Parameter,
  product: Product
}

const ValuesItem: FC<ValuesItemProps> = ({ parameter, product }) => {

  const value = product.parameters.find(item => item.parameter.id === parameter.id)?.value
  const unit = product.parameters.find(item => item.parameter.id === parameter.id)?.unit

  return (
    <Td>{value}{unit ? ' ' + unit : ''}</Td>
  )
}

export default ValuesItem