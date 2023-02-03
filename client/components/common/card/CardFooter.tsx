import { FC, ReactNode } from "react"

type CardFooterProps = {
  children?: ReactNode
}

export const CardFooter: FC<CardFooterProps> = ({ children }) => {
  return (
    <footer>
      {children}
    </footer>
  )
}