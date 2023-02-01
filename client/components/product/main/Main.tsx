import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ProductParameter } from '../../../types/ProductParameter'
import { Review } from '../../../types/Review'
import Parameters from './parameters/Parameters'
import Reviews from './reviews/Reviews'

type MainProps = {
  productId: string
  parameters: ProductParameter[]
  reviews: Review[]
}

const Main: FC<MainProps> = ({ productId, parameters, reviews }) => {
  return (
    <div>
      <Tabs colorScheme='purple'>
        <TabList>
          <Tab fontSize={18} fontWeight='bold'>Parameters</Tab>
          <Tab fontSize={18} fontWeight='bold'>Reviews</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Parameters parameters={parameters}/>
          </TabPanel>
          <TabPanel>
            <Reviews productId={productId} reviews={reviews}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Main