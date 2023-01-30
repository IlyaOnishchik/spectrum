import { useRouter } from 'next/router'
import React from 'react'
import Category from '../../components/category/Category'
import Loading from '../../components/common/Loading'

const CategoryPage = () => {

  const router = useRouter()
  const { id } = router.query
  if (!id) return <Loading/>

  return <Category id={String(id)}/>
}

export default CategoryPage