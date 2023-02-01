import { Table, TabPanel } from "@chakra-ui/react"
import { FC } from "react"
import { Product } from "../../types/Product"
import Body from "./Body"
import Header from "./Header"

type ContentProps = {
  products: Product[]
}

const Content: FC<ContentProps> = ({ products }) => {
  return (
    <TabPanel>
      <Table display='block' overflowX='scroll' scrollBehavior='smooth'>
        <Header products={products}/>
        <Body products={products}/>
      </Table>
    </TabPanel>
  )
}

export default Content