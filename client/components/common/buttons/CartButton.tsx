import { FC } from 'react'
import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline } from '@heroicons/react/24/outline'
import { useCart } from '../../../hooks/cart/useCart'
import Loading from '../Loading'
import { CartProduct } from '../../../types/CartProduct'
import { useToggleCartProduct } from '../../../hooks/cart/useToggleCartProduct'

type CartButtonProps = {
  productId: string
}

const CartButton: FC<CartButtonProps> = ({ productId }) => {

  const [toggleProduct] = useToggleCartProduct()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (data) toggleProduct({ variables: { productId } })
    else alert('Unauthorized')
  }

  const { loading, data } = useCart()
  if (loading) return <Loading/>
  const products: CartProduct[] = data?.cart.products
  const isInCart = !!products?.find(item => item.product.id === productId)

  return (
    <button 
      onClick={handleClick} 
      className={`p-1 | rounded | ${data ? 'transition-all hover:bg-violet-100' : 'opacity-50'}`}
    >
      {
        isInCart ? 
          <ShoppingCartIconSolid className='w-8 h-8 text-violet-500'/> :
          <ShoppingCartIconOutline className='w-8 h-8 text-violet-500'/>
      }
    </button>
  )
}

export default CartButton