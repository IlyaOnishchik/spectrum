import { Heading } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  title: string
}

const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='flex flex-col | gap-5'>
          <Heading as='h2' size='lg'>{title}</Heading>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section