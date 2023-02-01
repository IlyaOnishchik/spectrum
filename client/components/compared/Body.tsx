import { Tbody, Tr } from "@chakra-ui/react"
import { FC } from "react"
import { Parameter } from "../../types/Parameter"
import { ParameterCategory } from "../../types/ParameterCategory"
import { Product } from "../../types/Product"
import BodyItem from "./BodyItem"

const getCategorizedParametersFromProducts = (products: Product[]) => {
  const result: { category: ParameterCategory, parameters: Parameter[] }[] = []
  products.forEach(product => {
    product.parameters.forEach(productParameter => {
      const resultItem = result.find(item => item.category.id === productParameter.parameter.category.id)
      if (!resultItem) {
        result.push({
          category: productParameter.parameter.category,
          parameters: [productParameter.parameter]
        })
      } else {
        const resultItemParameter = resultItem.parameters.find(item => item.id === productParameter.parameter.id)
        if (!resultItemParameter) resultItem.parameters = [...resultItem.parameters, productParameter.parameter]
      }
    })
  })
  return result
}

type BodyProps = {
  products: Product[]
}

const Body: FC<BodyProps> = ({ products }) => {

  const categorizedParameters = getCategorizedParametersFromProducts(products)
  console.log(categorizedParameters)

  return (
    <Tbody>
      {categorizedParameters.sort((a, b) => +a.category.order - +b.category.order).map(item =>
        <BodyItem 
          key={item.category.id} 
          category={item.category} 
          parameters={item.parameters.sort((a, b) => a.order - b.order)}
          products={products}
        />
      )}
    </Tbody>
  )
}

export default Body