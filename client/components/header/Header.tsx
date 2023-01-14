import React from 'react'
import Actions from './actions/Actions'
import Logo from './Logo'
import Menu from './menu/Menu'
import Search from './Search'

const Header = () => {
  return (
    <header className='fixed z-10 | w-full | bg-violet-400'>
      <div className='container py-3'>
        <div className='flex flex-col | gap-2'>
          <div className='flex justify-between items-center gap-5'>
            <Logo/>
            <div className='flex-auto | hidden md:flex justify-center items-center | gap-5'>
              <Menu/>
              <Search/>
            </div>
            <Actions/>
          </div>
          <div className='flex-auto | flex md:hidden items-center | gap-5'>
            <Menu/>
            <Search/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header