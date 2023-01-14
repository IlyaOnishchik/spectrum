import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'
import { useSwiper } from 'swiper/react'

type ButtonNextProps = {
  isHovered: boolean
}

const ButtonNext: FC<ButtonNextProps> = ({ isHovered }) => {
  const swiper = useSwiper()

  return (
    <button 
      onClick={() => swiper.slideNext()} 
      className='absolute z-10 top-1/2 right-0 translate-y-[-50%]'
      hidden={!isHovered}
    >
      <ChevronRightIcon className='w-8 h-8 | transition-all text-violet-400 hover:text-violet-500'/>
    </button>
  )
}

export default ButtonNext