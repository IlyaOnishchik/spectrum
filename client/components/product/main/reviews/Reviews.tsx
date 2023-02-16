import { FC } from "react"
import { Review } from "../../../../types/Review"
import ReviewsItem from "./ReviewsItem"
import Add from "./Add"

type ReviewsProps = {
  reviews: Review[]
  productId: string
}

const Reviews: FC<ReviewsProps> = ({ reviews, productId }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Add productId={productId}/>
      {reviews.map(item => <ReviewsItem key={item.id} review={item}/>)}
    </div>
  )
}

export default Reviews