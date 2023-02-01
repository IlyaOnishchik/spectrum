import { FC } from "react"
import { Review } from "../../../../types/Review"

type ReviewsItemProps = {
  review: Review
}

const ReviewsItem: FC<ReviewsItemProps> = ({ review }) => {

  console.log(review)

  return (
    <div>
      {review.user.email}: {review.text}
    </div>
  )
}

export default ReviewsItem