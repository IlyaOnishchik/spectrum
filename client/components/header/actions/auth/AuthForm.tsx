import { FC } from 'react'
import { Field, Formik } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import AuthInput from './AuthInput'
import Button from '../../../common/Button'

type AuthFormProps = {
  callback: (email: string, password: string) => Promise<void>,
  onClose: () => void
  title: string
}

const AuthForm: FC<AuthFormProps> = ({ callback, onClose, title }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await callback(values.email, values.password)
          onClose()
        } catch(error: any) {
          alert(error.message)
        }
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 pb-2'>
          <FormControl className='flex flex-col'>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Field
              as={AuthInput}
              id="email"
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl isInvalid={!!errors.password && touched.password} className='flex flex-col'>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field
              as={AuthInput}
              id="password"
              name="password"
              type="password"
              validate={(value: string) => {
                let error;
                if (value.length < 5) {
                  error = "Password must contain at least 5 characters";
                }
                return error;
              }}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <div className='text-right'>
            <Button>{title}</Button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default AuthForm