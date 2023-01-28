import { FC, ReactNode } from "react"

type CardProps = {
  className?: string
  children?: ReactNode
  type?: 'column' | 'row'
}

export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`${className} flex p-5 gap-5 shadow hover:shadow-md rounded-lg transition-all`}>
      {children}
    </div>
  )
}