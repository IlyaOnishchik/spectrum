import { StarIcon } from "@heroicons/react/24/outline"

type RatingProps = {

}

const Rating = () => {

  const rating = 4.5

  return (
    <div>
      <StarIcon className='w-6 h-6'/>
    </div>
  )
}

export default Rating