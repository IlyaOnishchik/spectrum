import Error from "../components/common/Error"
import Loading from "../components/common/Loading"
import ProductCard from "../components/common/productCard/ProductCard"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { useProducts } from "../hooks/useProducts"
import { useAuth } from "../lib/auth/useAuth"


const TestPage = () => {

  const { loading, error, data } = useProducts()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const products = data.products
  const product = products[0]
  const images = product.images.map(item => ({...item.image, order: item.order}))
  console.log(images)

  return (
    <div>
      <ProductCard name="product" price={product.price} images={images}/>
    </div>
  )
}

export default TestPage