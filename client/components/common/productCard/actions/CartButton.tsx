import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline } from '@heroicons/react/24/outline'
import ActionsItem from './ActionsItem'

const CartButton = () => {
  return (
    <ActionsItem>
      <ShoppingCartIconOutline className='w-8 h-8 text-violet-400'/>
    </ActionsItem>
  )
}

export default CartButton