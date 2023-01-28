import { ChartBarSquareIcon as ChartBarSquareIconSolid} from '@heroicons/react/24/solid'
import { ChartBarSquareIcon as ChartBarSquareIconOutline} from '@heroicons/react/24/outline'
import ActionsItem from './ActionsItem'

const CompareButton = () => {
  return (
    <ActionsItem>
      <ChartBarSquareIconOutline className='w-8 h-8 text-violet-400'/>
    </ActionsItem>
  )
}

export default CompareButton