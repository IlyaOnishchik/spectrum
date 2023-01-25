import { FC, ReactNode } from "react"

type IconButtonProps = {
  children?: ReactNode
  onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className='p-1 rounded transition-colors bg-violet-400 hover:bg-white text-white hover:text-violet-400'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton