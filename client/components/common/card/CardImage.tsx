import { FC } from "react"

type CardImageProps = {
  src: string
  alt: string
}

export const CardImage: FC<CardImageProps> = ({ src, alt }) => {
  return (
    <div className='relative w-[100px] h-[100px]'>
      <img src={src} alt={alt} className='absolute top-0 left-0 w-full h-full object-contain'/>
    </div>
  )
}