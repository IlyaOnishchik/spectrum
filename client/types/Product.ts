import { Category } from "./Category"
import { ProductImage } from "./ProductImage"
import { ProductParameter } from "./ProductParameter"

export type Product = {
  id: string
  price: number
  quantity: number
  category: Category
  images: ProductImage[]
  parameters: ProductParameter[]
}