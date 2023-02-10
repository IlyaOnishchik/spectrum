import Link from 'next/link'
import { FC } from 'react'
import { CartProduct } from '../../../types/CartProduct'
import RemoveButton from '../../common/buttons/RemoveButton'
import { Card } from '../../common/card'
import Quantity from './Quantity'
import Remove from './Remove'

type CartItemProps = {
  cartProduct: CartProduct
}

const CartItem: FC<CartItemProps> = ({ cartProduct }) => {

  const product = cartProduct.product
  const href = `/products/${cartProduct.product.id}`
  const brand = product.parameters.find(item => item.parameter.name === 'Brand')?.value || 'Brand'
  const model = product.parameters.find(item => item.parameter.name === 'Model')?.value || 'Model'
  const name = brand + ' ' + model
  const image = product.images.find(item => item.order === 1)?.image
  const src = `${process.env.NEXT_PUBLIC_API_URL}/${image?.name}`

  return (
    <Link href={href}>
      <Card className='flex flex-col gap-3'>
        <div className='flex gap-5 justify-between'>
          <div className='relative w-[100px] h-[100px]'>
            <img src={src} alt={name} className='absolute w-full h-full object-contain'/>
          </div>
          <div className='flex-auto hidden sm:flex flex-col gap-1'>
            <span className='text-lg'>{name}</span>
            <span className='text-lg font-semibold'>${product.price}</span>
            <Quantity cartProductId={cartProduct.id} cartProductQuantity={cartProduct.quantity} productQuantity={product.quantity}/>
          </div>
          <Remove productId={product.id}/>
        </div>
        <div className='flex sm:hidden flex-col gap-1'>
          <span className='text-lg'>{name}</span>
          <span className='text-lg font-semibold'>${product.price}</span>
          <Quantity cartProductId={cartProduct.id} cartProductQuantity={cartProduct.quantity} productQuantity={product.quantity}/>
        </div>
      </Card>
    </Link>
  )
}

export default CartItem