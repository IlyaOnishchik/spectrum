import { Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react'
import { useCompared } from '../../hooks/compared/useCompared'
import { Product } from '../../types/Product'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'
import Content from './Content'

const Compared = () => {

  const { loading, error, data } = useCompared()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products: Product[] = data.compared.products

  const categories = Array.from(new Set(products.map(item => item.category.name)))

  return (
    <Section title='Compared'>
      {products.length ? (
        <Tabs variant='soft-rounded' colorScheme='purple'>
          <TabList>
            {categories.map(item => <Tab key={item}>{item}</Tab>)}
          </TabList>
          <TabPanels>
            {categories.map(item => <Content key={item} products={products.filter(product => product.category.name === item)}/>)}
          </TabPanels>
        </Tabs>
      ) : (
        <div><div>Your comapred empty</div></div>
      )}
    </Section>
  )
}

export default Compared