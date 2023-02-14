import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, useToast } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import { useUpdateProduct } from '../../../../../hooks/product/useUpdateProduct'
import Input from '../../../../common/Input'

type PriceProps = {
  id: string,
  price: number,
  skip: number, take: number, 
  sortBy: string, order: string
}

const Price: FC<PriceProps> = ({ id, price, skip, take, sortBy, order }) => {

  const [value, setValue] = useState(price)
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(+e.target.value)

  const [updateProduct, { error, data }] = useUpdateProduct({ skip, take, sortBy, order })

  const handleUpdateProduct = () => updateProduct({ variables: { id, price: value } })

  const toast = useToast()

  useEffect(() => {
    if (data) toast({ title: 'Price changed', status: 'success', duration: 3000, isClosable: true })
  }, [data])

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='purple'>Change price</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody className='flex flex-col gap-2'>
            <Input type='number' className='w-[80%]' value={value} onChange={handleChangeValue}/>
            <Button width='fit-content' colorScheme='purple' onClick={handleUpdateProduct}>Save</Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default Price