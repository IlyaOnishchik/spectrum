import { FC } from "react"
import Link from "next/link"
import { AccordionButton, AccordionItem, AccordionPanel, Image } from "@chakra-ui/react"
import { Category } from "../../../../types/Category"

type BodyItemProps = {
  category: Category
  subcategories: Category[]
  onClose: () => void
}

const BodyItem: FC<BodyItemProps> = ({ category, subcategories, onClose }) => {
  return (
    <li>
      <AccordionItem border='none'>
      <AccordionButton _hover={{ background: 'white' }}>
          <div className='flex items-center | w-full gap-2 p-1 | rounded-xl hover:shadow-inner cursor-pointer'>
            <Image src={process.env.NEXT_PUBLIC_API_URL + '/' + category.image!.name} alt={category.name} objectFit='cover' boxSize='100px'/>
            <span className='text-md font-semibold'>{category.name}</span>
          </div>
        </AccordionButton>
        <AccordionPanel>
          <ul>
            {subcategories.map(subcategory => 
              <li key={subcategory.id} className='cursor-pointer hover:opacity-70 transition-all p-1' onClick={onClose}>
                <Link href={`/subcategories/${subcategory.id}`}>{subcategory.name}</Link>
              </li>
            )}
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </li>
  )
}

export default BodyItem