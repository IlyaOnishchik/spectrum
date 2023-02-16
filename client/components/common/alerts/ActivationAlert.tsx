import React, { FC } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

type ActivationAlertProps = {
  email: string
}

const ActivationAlert: FC<ActivationAlertProps> = ({ email }) => {
  return (
    <Alert status='warning'>
      <AlertIcon/>
      <div>
        Seems your account is not activated, check your email <span className='font-semibold'>{email}</span>
      </div> 
    </Alert>
  )
}

export default ActivationAlert