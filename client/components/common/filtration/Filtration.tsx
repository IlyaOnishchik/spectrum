import { Accordion } from "@chakra-ui/react"
import Filters from "./Filters"
import PriceFilter from "./PriceFilter"


const Filtration = () => {
  return (
    <Accordion width={260} allowMultiple>
      <PriceFilter/>
      <Filters/>
    </Accordion>
  )
}

export default Filtration