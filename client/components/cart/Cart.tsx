import { useCart } from '../../hooks/cart/useCart'
import { CartProduct } from '../../types/CartProduct'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import CartItem from './cartItem/CartItem'
import Payment from './Payment'

const Cart = () => {

  const { loading, error, data } = useCart()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const cartProducts: CartProduct[] = data.cart.products

  return (
    <Section title='Cart'>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex-auto flex flex-col order-2 gap-5'>
          {cartProducts.length ? cartProducts.map(item => <CartItem key={item.id} cartProduct={item}/>) : <div>Your cart empty</div>}
        </div>
        <Payment cartProducts={cartProducts}/>
      </div>
    </Section>
  )
}

export default Cart