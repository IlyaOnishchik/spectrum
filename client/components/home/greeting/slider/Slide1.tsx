import { Heading } from '@chakra-ui/react'
import Button from '../../../common/Button'

const Slide1 = () => {
  return (
    <div className='flex items-center | h-full'>
      <img src="/macbook.png" alt="Macbook" className='hidden md:block max-w-[50%]'/>
      <div className='flex-auto | flex flex-col items-center | gap-4 | text-center'>
        <Heading as='h1' size='xl'>Online electronics store</Heading>
        <span>We strive to offer our customers maximum benefits and convenience</span>
        <img src="/macbook.png" alt="Macbook" className='block md:hidden max-w-[65%]'/>
        <Button>Open catalog</Button>
      </div>
    </div>
  )
}

export default Slide1