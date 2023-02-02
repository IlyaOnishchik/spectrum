import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import { FC } from "react"

type RatingProps = {
  value: number
  disabled?: boolean
  onClick?: (value: number) => void
}

const Rating: FC<RatingProps> = ({ value, disabled, onClick }) => {

  const stars = []
  for (let i = 1; i <= 5; i++) {
    const star = i <= Math.round(value) ? 
      <StarIconSolid 
        key={i} 
        id={String(i)} 
        className={`w-6 h-6 transition-colors text-yellow-400 ${disabled ? '' : 'hover:text-yellow-500 cursor-pointer'}`}
        onClick={() => !disabled && onClick ? onClick(i) : null}
      /> : 
      <StarIconOutline 
        key={i} 
        id={String(i)} 
        className={`w-6 h-6 transition-colors text-yellow-400 ${disabled ? '' : 'hover:text-yellow-500 cursor-pointer'}`}
        onClick={() => !disabled && onClick ? onClick(i) : null}
      />
    stars.push(star)
  }

  return (
    <div className='flex'>
      {stars.map(item => item)}
      <span className='ml-2'>{value}</span>
    </div>
  )
}

export default Rating