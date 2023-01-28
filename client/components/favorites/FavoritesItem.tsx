import Link from "next/link"
import { FC } from "react"
import { useToggleFavoritesProduct } from "../../hooks/useToggleFavoritesProduct"
import { Product } from "../../types/Product"
import { Card, CardBody, CardImage } from "../common/card"
import RemoveButton from "../common/RemoveButton"

type FavoritesItemProps = {
  product: Product
}

const FavoritesItem: FC<FavoritesItemProps> = ({ product }) => {

  const brand = product.parameters.find(item => item.parameter.name === 'Brand')?.value || 'Brand'
  const model = product.parameters.find(item => item.parameter.name === 'Model')?.value || 'Model'
  const name = brand + ' ' + model
  const image = product.images.find(item => item.order === 1)?.image
  const src = `${process.env.NEXT_PUBLIC_API_URL}/${image?.name}`

  const [toggleProduct] = useToggleFavoritesProduct()

  const handleRemove = () => { toggleProduct({ variables: { productId: product.id } }) }

  return (
    <Card>
      <Link href={`/products/${product.id}`}>
        <CardImage src={src} alt={`${brand} ${model}`}/>
      </Link>
      <CardBody>
        <div className='flex items-center h-full gap-5'>
          <div className='flex-auto text-2xl'>
            {brand} {model}
          </div>
          <div>
            <RemoveButton onClick={handleRemove}/>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default FavoritesItem