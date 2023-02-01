import { Td, Thead, Tr } from "@chakra-ui/react"
import { FC } from "react"
import { Product } from "../../types/Product"
import ProductCard from "../common/productCard/ProductCard"

type HeaderProps = {
  products: Product[]
}

const Header: FC<HeaderProps> = ({ products }) => {
  return (
    <Thead>
      <Tr>
        <Td></Td>
        {products.map(item => <Td key={item.id}><ProductCard product={item}/></Td>)}
      </Tr>
    </Thead>
  )
}

export default Header