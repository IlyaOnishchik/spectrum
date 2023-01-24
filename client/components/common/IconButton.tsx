import { FC, ReactNode } from "react"

type IconButtonProps = {
  children?: ReactNode
}

const IconButton: FC<IconButtonProps> = ({ children }) => {
  return (
    <button
      className='p-1 rounded transition-colors bg-violet-400 hover:bg-white text-white hover:text-violet-400'
    >
      {children}
    </button>
  )
}

export default IconButton