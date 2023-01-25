import { Accordion } from "@chakra-ui/react"
import PriceFilter from "./PriceFilter"

const Aside = () => {
  return (
    <aside className='hidden lg:block'>
      <Accordion width={260} allowMultiple>
        <PriceFilter/>
      </Accordion>
    </aside>
  )
}

export default Aside