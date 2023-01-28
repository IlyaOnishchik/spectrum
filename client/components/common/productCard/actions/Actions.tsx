import { FC } from 'react'
import FavoritesButton from './FavoritesButton'
import CartButton from './CartButton'
import CompareButton from './CompareButton'
import { useCurrentUser } from '../../../../hooks/useCurrentUser'
import Loading from '../../Loading'
import Error from '../../Error'
import { Product } from '../../../../types/Product'
import { User } from '../../../../types/User'

type ActionsProps = {
  productId: string
}

const Actions: FC<ActionsProps> = ({ productId }) => {

  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const user: User = data.currentUser
  const isInFavorites = !!user.favorites.products.find(item => item.id === productId)
  const isInCart = !!user.cart.products.find(item => item.product.id === productId)

  return (
    <ul className='flex | gap-2'>
      <CompareButton/>
      <FavoritesButton productId={productId} variant={isInFavorites ? 'solid' : 'ouline'}/>
      <CartButton productId={productId} variant={isInCart ? 'solid' : 'ouline'}/>
    </ul>
  )
}

export default Actions