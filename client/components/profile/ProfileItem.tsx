import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

type ProfileItemProps = {
  title: string
  icon?: JSX.Element
  href: string
  children?: ReactNode
}

const ProfileItem: FC<ProfileItemProps> = ({ title, icon, href, children }) => {
  return (
    <li className='p-5 shadow-lg hover:shadow-md rounded-lg cursor-pointer transition-all'>
      <Link href={href} className='flex flex-col h-full gap-5'>
        <div className='flex gap-3'>
          {icon}
          <Heading as='h3' size='md'>{title}</Heading>
        </div>
        {children}
      </Link>
    </li>
  )
}

export default ProfileItem