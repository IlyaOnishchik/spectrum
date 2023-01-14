import { FC } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col | h-full'>
      <Header/>
      <main className='flex-auto | mt-[104px] md:mt-[64px] |'>{children}</main>
      <Footer/>
    </div>
  )
}

export default MainLayout