import React from 'react'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import IconButton from '../../../common/IconButton'

const Filtration = () => {
  return (
    <div className='flex lg:hidden justify-center items-center'>
      <IconButton>
        <AdjustmentsHorizontalIcon className='w-6 h-6'/>
      </IconButton>
    </div>
  )
}

export default Filtration