import { FC } from 'react'
import { CartProduct } from '../../types/CartProduct'
import { Product } from '../../types/Product'
import Section from '../common/Section'
import CartItem from './cartItem/CartItem'
import Payment from './Payment'

type CartProps = {
  cartProducts: CartProduct[]
}

const Cart: FC<CartProps> = ({ cartProducts }) => {
  return (
    <Section title='Cart'>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex-auto flex flex-col order-2 gap-5'>
          {cartProducts.length ? cartProducts.map(item => <CartItem key={item.id} cartProduct={item}/>) : <div>Your cart empty.</div>}
        </div>
        <Payment cartProducts={cartProducts}/>
      </div>
    </Section>
  )
}

export default Cart