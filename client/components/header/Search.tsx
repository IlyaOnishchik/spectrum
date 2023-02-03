import { useState } from 'react'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {

  const [query, setQuery] = useState('')
  const router = useRouter()
  const handleSearch = () => { if (query) router.push(`/search?query=${query}`) }

  return (
    <div className='flex-auto flex items-center max-w-full md:max-w-[400px]'>
      <input className='w-full px-2 py-1 | rounded-l | bg-white' type="text" value={query} onChange={e => setQuery(e.target.value)}/>
      <button className='px-2 py-1 | rounded-r | bg-violet-500 hover:bg-violet-600 transition-all' onClick={handleSearch}>
        <MagnifyingGlassIcon className='w-6 h-6 | text-white'/>
      </button>
    </div>
  )
}

export default Search