import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Section from '../common/Section'
import Orders from './orders/Orders'

const Admin = () => {
  return (
    <Section title='Admin'>
      <Tabs variant='soft-rounded' colorScheme='purple'>
        <TabList>
          <Tab>Orders</Tab>
          <Tab>Products</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><Orders/></TabPanel>
          <TabPanel>Products</TabPanel>
          <TabPanel>Users</TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  )
}

export default Admin