import { FC, ReactNode } from "react"

type ActionsItemProps = {
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const ActionsItem: FC<ActionsItemProps> = ({ children, onClick }) => {

  return (
    <li 
      className='p-1 | rounded | transition-all cursor-pointer hover:bg-violet-100'
      onClick={onClick}
    >
      {children}
    </li>
  )
}

export default ActionsItem