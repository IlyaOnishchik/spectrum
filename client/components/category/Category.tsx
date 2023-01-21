import { useRouter } from 'next/router'
import React from 'react'
import { useCategory } from '../../hooks/useCategory'
import { Category } from '../../types/Category'
import Error from '../common/Error'
import Loading from '../common/Loading'

const Category = () => {

  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useCategory({ id: String(id) })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const category: Category = data.category

  return (
    <div>{category.name}</div>
  )
}

export default Category