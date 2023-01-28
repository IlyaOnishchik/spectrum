import { FC } from 'react'
import { HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline} from '@heroicons/react/24/outline'
import ActionsItem from './ActionsItem'
import { useToggleFavoritesProduct } from '../../../../hooks/useToggleFavoritesProduct'
import { useCurrentUser } from '../../../../hooks/useCurrentUser'

type FavoritesButtonProduct = {
  productId: string
  variant: 'ouline' | 'solid'
}

const FavoritesButton: FC<FavoritesButtonProduct> = ({ productId, variant = 'ouline' }) => {

  const [toggleProduct] = useToggleFavoritesProduct()
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => { 
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  }

  return (
    <ActionsItem onClick={handleClick}>
      {
        variant === 'ouline' ? 
          <HeartIconOutline className='w-8 h-8 text-violet-400'/> :
          <HeartIconSolid className='w-8 h-8 text-violet-400'/>
      }
    </ActionsItem>
  )
}

export default FavoritesButton