import { useRouter } from 'next/router'
import React from 'react'
import { useCategory } from '../../hooks/useCategory'
import { Category } from '../../types/Category'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import Products from './Products'

const Category = () => {

  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useCategory({ id: String(id) })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const category: Category = data.category

  return (
    <Section title={category.name}>
      <div className='flex'>
        <div className='flex-auto flex flex-col'>
          <div>sorting</div>
          <Products category={category}/>
          <div>pagination</div>
        </div>
        <div>filtration</div>
      </div>
    </Section>
  )
}

export default Category