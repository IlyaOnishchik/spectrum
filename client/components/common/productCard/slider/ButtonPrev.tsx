import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'
import { useSwiper } from 'swiper/react'

type ButtonPrevProps = {
  isHovered: boolean
}

const ButtonPrev: FC<ButtonPrevProps> = ({ isHovered }) => {
  const swiper = useSwiper()
  
  return (
    <button 
      onClick={() => swiper.slidePrev()}
      className={'absolute z-10 top-1/2 left-0 translate-y-[-50%]'}
      hidden={!isHovered}
    >
      <ChevronLeftIcon className='w-8 h-8 | transition-all text-violet-400 hover:text-violet-500'/>
    </button>
  )
}

export default ButtonPrev