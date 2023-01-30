import { HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline} from '@heroicons/react/24/outline'
import { FC } from 'react'
import { useFavorites } from '../../../hooks/favorites/useFavorites'
import Loading from '../Loading'
import Error from '../Error'
import { Product } from '../../../types/Product'
import { useToggleFavoritesProduct } from '../../../hooks/favorites/useToggleFavoritesProduct'

type FavoritesButtonProps = {
  productId: string
}

const FavoritesButton: FC<FavoritesButtonProps> = ({ productId }) => {

  const [toggleProduct] = useToggleFavoritesProduct()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  }

  const { loading, error, data } = useFavorites()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.favorites.products
  const isInFavorites = !!products.find(item => item.id === productId)

  return (
    <button onClick={handleClick} className='p-1 | rounded | transition-all hover:bg-violet-100'>
      {
        isInFavorites ?
          <HeartIconSolid className='w-8 h-8 text-violet-400'/> :
          <HeartIconOutline className='w-8 h-8 text-violet-400'/>
      }
    </button>
  )
}

export default FavoritesButton