import { Badge, Tooltip } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useProduct } from '../../../hooks/useProduct'
import { OrderProduct } from '../../../types/OrderProduct'
import { Product } from '../../../types/Product'
import Error from '../../common/Error'
import Loading from '../../common/Loading'
import ProductCard from '../../common/productCard/ProductCard'

type BodyItemProps = {
  status: string
  orderProduct: OrderProduct
}

const BodyItem: FC<BodyItemProps> = ({ status, orderProduct }) => {

  const { loading, error, data } = useProduct({ id: orderProduct.product.id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const product: Product = data.product

  console.log(orderProduct)

  return (
    <>
      {
        status === 'fullfilled' ? (
          <>
            <div className='relative'>
              <ProductCard product={product}/>
              <Tooltip label='paid'>
                <Badge fontSize={18} colorScheme='green' className='absolute top-0 right-0'>{orderProduct.paid}</Badge>
              </Tooltip>
            </div>
            <div className='relative'>
              <ProductCard product={product} className='opacity-30'/>
              <Tooltip label='canceled'>
                <Badge fontSize={18} colorScheme='red' className='absolute top-0 right-0'>{orderProduct.quantity - orderProduct.paid}</Badge>
              </Tooltip>
            </div>
          </>
        ) : (
          <div className='relative'>
            <ProductCard product={product}/>
            <Tooltip label='quantity'>
              <Badge fontSize={18} colorScheme='purple' className='absolute top-0 right-0'>{orderProduct.quantity}</Badge>
            </Tooltip>
          </div>
        )}
    </>

  )
}

export default BodyItem