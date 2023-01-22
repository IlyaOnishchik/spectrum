import { useRouter } from 'next/router'
import React from 'react'
import { useCategory } from '../../hooks/useCategory'
import { Category } from '../../types/Category'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Pagination from '../common/Pagination'
import Section from '../common/Section'
import Filtration from './Filtration'
import Products from './Products'
import Sorting from './Sorting'

const Category = () => {

  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useCategory({ id: String(id) })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const category: Category = data.category

  return (
    <Section title={category.name}>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <Sorting/>
          <Products category={category}/>
          <Pagination/>
        </div>
        <Filtration/>
      </div>
    </Section>
  )
}

export default Category