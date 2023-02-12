import { Button, Popover, PopoverContent, PopoverTrigger, Portal, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useUpdateOrder } from '../../../../../hooks/order/useUpdateOrder'

type StatusProps = {
  id: string,
  status: string
  skip: number, take: number, 
  sortBy: string, order: string
}

const Status: FC<StatusProps> = ({ id, status, skip, take, sortBy, order }) => {

  const [updateOrder] = useUpdateOrder({ skip, take, sortBy, order })

  const handleChange = (status: string) => updateOrder({ variables: { id, status } })

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='purple'>Change status</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <RadioGroup value={status} onChange={handleChange}>
            <Stack p={5}>
              <Radio colorScheme='purple' value='new'>new</Radio>
              <Radio colorScheme='purple' value='delivery'>delivery</Radio>
              <Radio colorScheme='purple' value='delivered'>delivered</Radio>
              <Radio colorScheme='purple' value='fullfilled'>fullfilled</Radio>
            </Stack>
          </RadioGroup>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default Status