import { Category } from "./Category"
import { ProductImage } from "./ProductImage"

export type Product = {
  id: string
  images: ProductImage[]
  price: number
  category: Category
}