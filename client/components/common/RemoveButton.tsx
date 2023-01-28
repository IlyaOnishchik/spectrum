import { XMarkIcon } from "@heroicons/react/24/solid"
import { FC } from "react"

type RemoveButtonProps = {
  onClick?: () => void
}

const RemoveButton: FC<RemoveButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <XMarkIcon className='w-6 h-6 text-red-500 hover:scale-150 transition-all'/>
    </button>
  )
}

export default RemoveButton