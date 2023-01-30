import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline } from '@heroicons/react/24/outline'
import { useCart } from '../../../hooks/cart/useCart'
import Loading from '../Loading'
import Error from '../Error'
import { Product } from '../../../types/Product'
import { FC } from 'react'
import { CartProduct } from '../../../types/CartProduct'
import { useToggleCartProduct } from '../../../hooks/cart/useToggleCartProduct'

type CartButtonProps = {
  productId: string
}

const CartButton: FC<CartButtonProps> = ({ productId }) => {

  const [toggleProduct] = useToggleCartProduct()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  }

  const { loading, error, data } = useCart()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: CartProduct[] = data.cart.products
  const isInCart = !!products.find(item => item.product.id === productId)


  return (
    <button onClick={handleClick} className='p-1 | rounded | transition-all hover:bg-violet-100'>
      {
        isInCart ? 
          <ShoppingCartIconSolid className='w-8 h-8 text-violet-400'/> :
          <ShoppingCartIconOutline className='w-8 h-8 text-violet-400'/>
      }
    </button>
  )
}

export default CartButton