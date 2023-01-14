import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-center | gap-3'>
        <img src="/prism.png" alt="Logo (prism)" className='w-10 h-10'/>
        <span className='hidden sm:block text-2xl font-bold text-white'>spectrum</span>
      </div>
    </Link>
  )
}

export default Logo