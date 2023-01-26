import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../../components/common/Loading'
import Product from '../../components/product/Product'

const ProductPage = () => {

  const router = useRouter()
  const { id } = router.query
  if (!id) return <Loading/>

  return (
    <Product id={String(id)}/>
  )
}

export default ProductPage