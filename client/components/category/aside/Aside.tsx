import { Accordion } from "@chakra-ui/react"
import Filters from "./Filters"
import PriceFilter from "./PriceFilter"

const Aside = () => {
  return (
    <aside className='hidden lg:block'>
      <Accordion width={260} allowMultiple>
        <PriceFilter/>
        <Filters/>
      </Accordion>
    </aside>
  )
}

export default Aside