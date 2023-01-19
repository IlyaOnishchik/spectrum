import Link from 'next/link'
import React, { FC } from 'react'

type ActionsItemProps = {
  name: string
  href: string
  icon: JSX.Element
  onClick?: () => void
}

const ActionsItem: FC<ActionsItemProps> = ({ name, href, icon, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      <li className='p-1 rounded hover:bg-violet-500 transition-all'>
        {icon}
      </li>
    </Link>
  )
}

export default ActionsItem