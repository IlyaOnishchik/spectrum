import { ChartBarSquareIcon as ChartBarSquareIconSolid} from '@heroicons/react/24/solid'
import { ChartBarSquareIcon as ChartBarSquareIconOutline} from '@heroicons/react/24/outline'
import { useCompared } from '../../../hooks/compared/useCompared'
import Loading from '../Loading'
import Error from '../Error'
import { Product } from '../../../types/Product'
import { FC } from 'react'
import { useToggleComparedProduct } from '../../../hooks/compared/useToggleComparedProduct'

type ComparedButtonProps = {
  productId: string
}

const ComparedButton: FC<ComparedButtonProps> = ({ productId }) => {

  const [toggleProduct] = useToggleComparedProduct()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId } })
  }

  const { loading, error, data } = useCompared()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.compared.products
  const isInCompared = !!products.find(item => item.id === productId)

  return (
    <button onClick={handleClick} className='p-1 | rounded | transition-all hover:bg-violet-100'>
      {
        isInCompared ?
          <ChartBarSquareIconSolid className='w-8 h-8 text-violet-500'/> :
          <ChartBarSquareIconOutline className='w-8 h-8 text-violet-500'/>
      }
    </button>
  )
}

export default ComparedButton