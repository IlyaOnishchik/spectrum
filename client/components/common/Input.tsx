import React, { FC } from 'react'

type InputProps = {
  type: 'text' | 'password'
}

const Input: FC<InputProps> = ({ type }) => {
  return (
    <input 
      type={type}
      className='w-max px-4 py-2 rounded bg-violet-100'  
    />
  )
}

export default Input