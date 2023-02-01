import { Td, Th, Tr } from "@chakra-ui/react"
import { FC } from "react"
import { Parameter } from "../../types/Parameter"
import { ParameterCategory } from "../../types/ParameterCategory"
import { Product } from "../../types/Product"
import Values from "./Values"

type BodyItemProps = {
  category: ParameterCategory,
  parameters: Parameter[],
  products: Product[]
}

const BodyItem: FC<BodyItemProps> = ({ category, parameters, products }) => {
  return (
    <>
      <Tr><Td fontSize={18} fontWeight='bold'>{category.name}</Td></Tr>
      {parameters.map(item =>
        <Tr key={item.id}>
          <Td fontWeight='semibold'>{item.name}</Td>
          <Values parameter={item} products={products}/>
        </Tr>
      )}
    </>
  )
}

export default BodyItem