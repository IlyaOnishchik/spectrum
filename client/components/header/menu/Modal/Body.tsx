import { FC } from 'react'
import { Accordion, ModalBody, useDisclosure } from "@chakra-ui/react"
import { useCategories } from "../../../../hooks/useCategories"
import { Category } from "../../../../types/Category"
import Error from "../../../common/Error"
import Loading from "../../../common/Loading"
import BodyItem from "./BodyItem"

type BodyProps = {
  onClose: () => void
}

const Body: FC<BodyProps> = ({ onClose }) => {
  const { data, loading, error } = useCategories()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const categories: Category[] = data.categories
  const baseCategories = categories.filter(item => !item.parentCategoryId)
  const secondaryCategories = categories.filter(item => item.parentCategoryId)

  return (
    <ModalBody>
      <Accordion allowToggle>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 | gap-2'>
          {baseCategories.sort((a,b) => a.order - b.order).map(base =>
            <BodyItem 
              key={base.id} 
              category={base}
              subcategories={secondaryCategories.filter(sec => sec.parentCategoryId === base.id)}
              onClose={onClose}
            />)}
        </ul>
      </Accordion>
    </ModalBody>
  )
}

export default Body