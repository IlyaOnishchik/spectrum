import Link from "next/link"
import { FC } from "react"
import { useToggleFavoritesProduct } from "../../hooks/favorites/useToggleFavoritesProduct"
import { Product } from "../../types/Product"
import { Card, CardBody, CardFooter, CardImage } from "../common/card"
import RemoveButton from "../common/buttons/RemoveButton"

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
      <div className='flex flex-col gap-3 p-5 shadow hover:shadow-md rounded-lg transition-all'>
        <div className='flex gap-5 justify-between'>
          <div className='relative w-[100px] h-[100px]'>
            <img src={src} alt={name} className='absolute w-full h-full object-contain'/>
          </div>
          <div className='flex-auto hidden sm:flex flex-col'>
            <span className='text-lg'>{name}</span>
            <span className='text-lg font-semibold'>${product.price}</span>
          </div>
          <div>
            <RemoveButton onClick={handleRemove}/>
          </div>
        </div>
        <div className='flex sm:hidden flex-col'>
          <span className='text-lg'>{name}</span>
          <span className='text-lg font-semibold'>${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default FavoritesItem