import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline } from '@heroicons/react/24/outline'
import ActionsItem from './ActionsItem'
import { FC } from 'react'
import { useToggleCartProduct } from '../../../../hooks/cart/useToggleCartProduct'

type CartButtonProps = {
  productId: string
  variant: 'ouline' | 'solid'
}

const CartButton: FC<CartButtonProps> = ({ productId, variant = 'ouline' }) => {

  const [toggleProduct] = useToggleCartProduct()
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  } 

  return (
    <ActionsItem onClick={handleClick}>
      {
        variant === 'ouline' ?
          <ShoppingCartIconOutline className='w-8 h-8 text-violet-400'/> :
          <ShoppingCartIconSolid className='w-8 h-8 text-violet-400'/>
      }
    </ActionsItem>
  )
}

export default CartButton