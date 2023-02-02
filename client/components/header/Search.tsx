import { Input } from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
  return (
    <div className='flex-auto flex items-center max-w-full md:max-w-[400px]'>
      <input className='w-full px-2 py-1 | rounded-l | bg-white' type="text"/>
      <button className='px-2 py-1 | rounded-r | bg-violet-500 hover:bg-violet-600 transition-all'>
        <MagnifyingGlassIcon className='w-6 h-6 | text-white'/>
      </button>
    </div>
  )
}

export default Search