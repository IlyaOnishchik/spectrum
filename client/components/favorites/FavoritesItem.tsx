import Link from "next/link"
import { FC } from "react"
import { useToggleFavoritesProduct } from "../../hooks/favorites/useToggleFavoritesProduct"
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

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    toggleProduct({ variables: { productId: product.id } }) 
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        <CardImage src={src} alt={`${brand} ${model}`}/>
        <CardBody>
          <div className='flex items-center h-full gap-5'>
            <div className='flex-auto'>
              <div className='text-2xl'>{name}</div>
              <div className='text-xl font-bold'>${product.price}</div>
              <div>Left <span className='font-bold'>{product.quantity}</span></div>
            </div>
            <div>
              <RemoveButton onClick={handleRemove}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default FavoritesItem