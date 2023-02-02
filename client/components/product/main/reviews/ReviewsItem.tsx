import { FC } from "react"
import { Review } from "../../../../types/Review"
import Rating from "../../../common/rating/Rating"

type ReviewsItemProps = {
  review: Review
}

const ReviewsItem: FC<ReviewsItemProps> = ({ review }) => {
  return (
    <div className='flex flex-col gap-3 p-5 rounded-xl bg-violet-50'>
      <header className='flex flex-wrap gap-1 sm:gap-2 md:gap-3'>
        <span className='font-bold'>{review.user.email}</span>
        <Rating value={review.rating} disabled/>
        <span className='text-gray-500'>{review.createdAt}</span>
      </header>
      <div>
        {review.text}
      </div>
    </div>
  )
}

export default ReviewsItem