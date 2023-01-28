import { FC } from 'react'
import { Product } from '../../types/Product'
import Section from '../common/Section'

type CartProps = {
  products: Product[]
}

const Cart: FC<CartProps> = ({ products }) => {
  return (
    <Section title='Cart'>

    </Section>
  )
}

export default Cart