import { FC } from 'react'
import ComparedButton from '../buttons/ComparedButton'
import FavoritesButton from '../buttons/FavoritesButton'
import CartButton from '../buttons/CartButton'

type ActionsProps = {
  productId: string
}

const Actions: FC<ActionsProps> = ({ productId }) => {
  return (
    <ul className='flex | gap-2'>
      <li><ComparedButton productId={productId}/></li>
      <li><FavoritesButton productId={productId}/></li>
      <li><CartButton productId={productId}/></li>
    </ul>
  )
}

export default Actions