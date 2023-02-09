import React, { FC } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@chakra-ui/react'
import OrderInput from './OrderInput'
import { useCreateOrder } from '../../../hooks/order/useCreateOrder'

type OrderFormProps = {
  onClose: () => void
}

const OrderForm: FC<OrderFormProps> = ({ onClose }) => {

  const [createOrder] = useCreateOrder()

  return (
    <Formik
      initialValues={{ name: '', phone: '', country: '', city: '', address: '', zipCode: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        phone: Yup.string().required(),
        country: Yup.string().required(),
        city: Yup.string().required(),
        address: Yup.string().required(),
        zipCode: Yup.number().required(),
      })}
      onSubmit={(values) => {
        createOrder({
          variables: { 
          name: values.name, 
          phone: values.phone, 
          country: values.country, 
          city: values.city, 
          address: values.address, 
          zipCode: +values.zipCode
          }
        })
        onClose()
      }}
    >
      {(errors) => (
        <Form className='flex flex-col gap-3'>

          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name:</label>
            <Field name='name' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='name'/></span>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='phone'>Phone:</label>
            <Field name='phone' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='phone'/></span>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='country'>Country:</label>
            <Field name='country' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='country'/></span>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='city'>City:</label>
            <Field name='city' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='city'/></span>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='address'>Address:</label>
            <Field name='address' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='address'/></span>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='zipCode'>Zip code:</label>
            <Field name='zipCode' type='text' as={OrderInput}/>
            <span className='text-red-500'><ErrorMessage name='zipCode'/></span>
          </div>

          <Button colorScheme='purple' width='fit-content' type='submit'>Checkout</Button>
        </Form>
      )}
    </Formik>
  )
}

export default OrderForm