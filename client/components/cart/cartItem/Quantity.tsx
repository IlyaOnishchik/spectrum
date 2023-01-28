import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import { FC } from "react"
import { useChangeCartProductQuantity } from "../../../hooks/useChangeCartProductQuantity"

type QuantityProps = {
  cartProductId: string
  cartProductQuantity: number
  productQuantity: number
}

const Quantity: FC<QuantityProps> = ({ cartProductId, cartProductQuantity, productQuantity }) => {

  const [changeCartProductQuantity] = useChangeCartProductQuantity()
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (cartProductQuantity > 1) changeCartProductQuantity({ variables: { id: cartProductId, quantity: cartProductQuantity - 1 } })
  }
  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (cartProductQuantity < productQuantity) changeCartProductQuantity({ variables: { id: cartProductId, quantity: cartProductQuantity + 1 } })
  }

  return (
    <div className='flex items-center gap-2'>
      <button onClick={handleDecrease}>
        <MinusIcon className='w-6 h-6 text-violet-400'/>
      </button>
      <span>{cartProductQuantity}</span>
      <button disabled={cartProductQuantity === productQuantity} onClick={handleIncrease}>
        <PlusIcon className='w-6 h-6 text-violet-400'/>
      </button>
    </div>
  )
}

export default Quantity