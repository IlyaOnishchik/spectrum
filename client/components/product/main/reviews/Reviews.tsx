import { FC } from "react"
import { Review } from "../../../../types/Review"
import Add from "./Add"
import ReviewsItem from "./ReviewsItem"

type ReviewsProps = {
  reviews: Review[]
  productId: string
}

const Reviews: FC<ReviewsProps> = ({ reviews, productId }) => {
  return (
    <div>
      <Add productId={productId}/>
      {reviews.map(item => <ReviewsItem key={item.id} review={item}/>)}
    </div>
  )
}

export default Reviews