import { Badge } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useProduct } from '../../../hooks/useProduct'
import { OrderProduct } from '../../../types/OrderProduct'
import { Product } from '../../../types/Product'
import Error from '../../common/Error'
import Loading from '../../common/Loading'
import ProductCard from '../../common/productCard/ProductCard'

type BodyItemProps = {
  orderProduct: OrderProduct
}

const BodyItem: FC<BodyItemProps> = ({ orderProduct }) => {

  const { loading, error, data } = useProduct({ id: orderProduct.product.id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const product: Product = data.product

  return (
    <div className='relative'>
      <ProductCard product={product}/>
      <Badge colorScheme='purple' className='absolute top-0 right-0'>{orderProduct.quantity}</Badge>
    </div>
  )
}

export default BodyItem