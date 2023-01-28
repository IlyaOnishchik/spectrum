import { FC, ReactNode } from "react"

type CardProps = {
  children?: ReactNode
  type?: 'column' | 'row'
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className='flex p-5 gap-5 shadow hover:shadow-md rounded-lg transition-all'>
      {children}
    </div>
  )
}