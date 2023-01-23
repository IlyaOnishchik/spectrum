import { FC, ReactNode } from "react"

type PaginationButtonProps = {
  children: ReactNode
  onClick: () => void
}

const PaginationButton: FC<PaginationButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='p-1 rounded transition-colors bg-violet-400 hover:bg-white text-white hover:text-violet-400'
    >
      {children}
    </button>
  )
}

export default PaginationButton