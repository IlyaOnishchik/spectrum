import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Stack, Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useToggleBanUser } from '../../../../hooks/useToggleBanUser'
import { User } from '../../../../types/User'
import Ban from './Ban'
import Details from './Details'

type TableItemProps = {
  user: User,
  skip: number, take: number, 
  sortBy: string, order: string
}

const TableItem: FC<TableItemProps> = ({ user, skip, take, sortBy, order}) => {

  const [toggleBanUser] = useToggleBanUser({ skip, take, sortBy, order })

  const handleToggleBanUser = () => toggleBanUser({ variables: { id: user.id } })

  return (
    <Popover>
      <PopoverTrigger>
      <Tr cursor='pointer'>
        <Td>{user.email}</Td>
        <Td>{String(user.isBanned)}</Td>
      </Tr>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Stack>
              <Details user={user}/>
              {
                user.isBanned ? 
                  <Button colorScheme='green' onClick={handleToggleBanUser}>Unban</Button> :
                  <Button colorScheme='red' onClick={handleToggleBanUser}>Ban</Button>
              }
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default TableItem