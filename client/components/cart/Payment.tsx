
import { FC } from "react"
import { CartProduct } from "../../types/CartProduct"
import Button from "../common/buttons/Button"

type PaymentProps = {
  cartProducts: CartProduct[]
}

const Payment: FC<PaymentProps> = ({ cartProducts }) => {

  const total = cartProducts.reduce((total, item) => total += item.quantity * item.product.price, 0)

  return (
    <div className='md:self-start flex flex-col items-center order-1 md:order-2 gap-3 p-5 shadow rounded-md'>
      <div className='self-stretch'>
        {cartProducts.map(item => 
          <div key={item.id} className='flex justify-between border-b'><span>{item.quantity} x </span><span>${item.product.price}</span></div>
        )}
      </div>
      <div>Total: <span className='font-bold'>${total}</span></div>
      <Button className='md:w-full'>Buy</Button>
    </div>
  )
}

export default Payment