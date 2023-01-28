import { FC, ReactNode } from "react"

type CardBodyProps = {
  children?: ReactNode
}

export const CardBody: FC<CardBodyProps> = ({ children }) => {
  return (
    <div className='flex-auto'>
      {children}
    </div>
  )
}