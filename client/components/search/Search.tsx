import { FC } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { Product } from '../../types/Product'
import Error from '../common/Error'
import Loading from '../common/Loading'
import ProductCard from '../common/productCard/ProductCard'
import Section from '../common/Section'
import SearchItem from './SearchItem'

type SearchProps = {
  query: string
}

const Search: FC<SearchProps> = ({ query }) => {

  const { loading, error, data } = useProducts({ query })
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.products.items

  return (
    <Section title={`You search "${query}"`}>
      <div className='flex-grow-0 flex flex-wrap gap-10'>
        {products.map(item => <SearchItem key={item.id} id={item.id}/>)}
      </div>
    </Section>
  )
}

export default Search