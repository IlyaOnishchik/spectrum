import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { Heading } from '@chakra-ui/react'
import { Card } from '../common/card'

type ProfileItemProps = {
  title: string
  icon?: JSX.Element
  href: string
  children?: ReactNode
}

const ProfileItem: FC<ProfileItemProps> = ({ title, icon, href, children }) => {
  return (
    <li>
      <Card className='h-full'>
        <Link href={href} className='flex flex-col h-full gap-5'>
          <div className='flex gap-3'>
            {icon}
            <Heading as='h3' size='md'>{title}</Heading>
          </div>
          {children}
        </Link>
      </Card>
    </li>
  )
}

export default ProfileItem