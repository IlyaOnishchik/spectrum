import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ProductParameter } from '../../../types/ProductParameter'
import Parameters from './parameters/Parameters'

type MainProps = {
  parameters: ProductParameter[]
}

const Main: FC<MainProps> = ({ parameters }) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab fontSize={18} fontWeight='bold'>Parameters</Tab>
          <Tab fontSize={18} fontWeight='bold'>Reviews</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Parameters parameters={parameters}/>
          </TabPanel>
          <TabPanel>
            Reviews
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Main