import { FC } from 'react'
import { useFavorites } from '../../hooks/favorites/useFavorites'
import { Product } from '../../types/Product'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import FavoritesItem from './FavoritesItem'

const Favorites = () => {

  const { loading, error, data } = useFavorites()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.favorites.products

  return (
    <Section title='Favorites'>
      {products.length ? products.map(item => <FavoritesItem key={item.id} product={item}/>) : <div>Your favorites empty</div>}
    </Section>
  )
}

export default Favorites