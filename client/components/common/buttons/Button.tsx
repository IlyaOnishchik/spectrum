import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonProps = {
  className?: string
  children?: ReactNode
  variant?: 'solid' | 'outline'
}

const Button: FC<ButtonProps> = ({ className, children, variant }) => {
  return (
    <button
      className={`${className} min-w-[100px] rounded | transition-all
        ${variant === 'outline'
          ? 'px-[14px] py-[6px] | border-2 border-violet-400 | hover:bg-violet-400 text-violet-400 hover:text-white'
          : 'px-4 py-2 | bg-violet-400 text-white hover:opacity-70'}`
      }
    >
      {children}
    </button>
  )
}

export default Button