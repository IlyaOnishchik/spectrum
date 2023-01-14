import { Heading } from '@chakra-ui/react'
import React from 'react'
import Slider from './slider/Slider'

const Greeting = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <Slider/>
      </div>
    </section>
  )
}

export default Greeting