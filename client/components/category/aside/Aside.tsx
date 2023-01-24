import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import PriceFilter from "./PriceFilter"

const Aside = () => {
  return (
    <aside>
      <Accordion width={280} allowMultiple>
        <PriceFilter/>
      </Accordion>
    </aside>
  )
}

export default Aside