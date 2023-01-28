import Link from 'next/link'
import { FC } from 'react'
import { CartProduct } from '../../../types/CartProduct'
import { Card, CardBody, CardImage } from '../../common/card'
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
      <Card>
        <CardImage src={src} alt={name}/>
        <CardBody>
          <div className='flex items-center h-full gap-5'>
            <div className='flex-auto flex flex-col md:flex-row justify-between'>
              <div>
                <div className='text-2xl'>{name}</div>
                <div className='text-xl font-bold'>${product.price}</div>
              </div>
              <div className='flex flex-col md:items-center gap-2'>
                <Quantity cartProductId={cartProduct.id} cartProductQuantity={cartProduct.quantity} productQuantity={product.quantity}/>
                <div>Left <span className='font-bold'>{cartProduct.product.quantity}</span></div>
              </div>
            </div>
            <Remove productId={product.id}/>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default CartItem