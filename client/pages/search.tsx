import { useRouter } from 'next/router'
import React from 'react'
import Loading from '../components/common/Loading'
import Search from '../components/search/Search'

const SearchPage = () => {

  const router = useRouter()
  const { query } = router.query
  if (!query) return  <Loading/>

  return (
    <Search query={String(query)}/>
  )
}

export default SearchPage