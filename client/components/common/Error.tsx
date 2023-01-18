import React, { FC } from 'react'

type ErrorProps = {
  message: string
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div>Error: {message}</div>
  )
}

export default Error