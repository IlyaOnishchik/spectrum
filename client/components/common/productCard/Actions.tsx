import { HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingCartIconSolid, ChartBarSquareIcon as ChartBarSquareIconSolid} from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline, ShoppingCartIcon as ShoppingCartIconOutline, ChartBarSquareIcon as ChartBarSquareIconOutline} from '@heroicons/react/24/outline'

const Actions = () => {
  return (
    <ul className='flex | gap-2'>
      <li className='p-1 | rounded | transition-all cursor-pointer hover:bg-violet-100'><ChartBarSquareIconOutline className='w-8 h-8 text-violet-400'/></li>
      <li className='p-1 | rounded | transition-all cursor-pointer hover:bg-violet-100'><HeartIconOutline className='w-8 h-8 text-violet-400'/></li>
      <li className='p-1 | rounded | transition-all cursor-pointer hover:bg-violet-100'><ShoppingCartIconOutline className='w-8 h-8 text-violet-400'/></li>
    </ul>
  )
}

export default Actions