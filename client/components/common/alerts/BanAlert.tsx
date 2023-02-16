import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

const BanAlert = () => {
  return (
    <Alert status='error'>
      <AlertIcon/>
      <AlertTitle>Your account is banned!</AlertTitle>
    </Alert>
  )
}

export default BanAlert