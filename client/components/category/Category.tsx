import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useCategory } from '../../hooks/useCategory'
import { useAppDispatch } from '../../redux/hooks'
import { Category } from '../../types/Category'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import Content from './Content'

type CategoryProps = {
  id: string
}

const Category: FC<CategoryProps> = ({ id }) => {

  const { loading, error, data } = useCategory({ id })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const category: Category = data.category
  
  return (
    <Section title={category.name}>
      <Content categoryId={id}/>
    </Section>
  )
}

export default Category