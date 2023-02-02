import { FC } from "react"
import { Button, useDisclosure } from "@chakra-ui/react"
import { Review } from "../../../../types/Review"
import ReviewsItem from "./ReviewsItem"
import Modal from "./Modal"

type ReviewsProps = {
  reviews: Review[]
  productId: string
}

const Reviews: FC<ReviewsProps> = ({ reviews, productId }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={onOpen} maxWidth='fit-content' colorScheme='purple'>Add</Button>
      <Modal isOpen={isOpen} onClose={onClose} productId={productId}/>
      {reviews.map(item => <ReviewsItem key={item.id} review={item}/>)}
    </div>
  )
}

export default Reviews