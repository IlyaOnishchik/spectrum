import { FC } from 'react'
import { Product } from '../../types/Product'
import Section from '../common/Section'
import FavoritesItem from './FavoritesItem'

type FavoritesProps = {
  products: Product[]
}

const Favorites: FC<FavoritesProps> = ({ products }) => {

  return (
    <Section title='Favorites'>
      {
        products.length ? products.map(item => <FavoritesItem key={item.id} product={item}/>) : <div>Your favorites empty.</div>
      }
    </Section>
  )
}

export default Favorites