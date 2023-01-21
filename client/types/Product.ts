import { Category } from "./Category"
import { ProductImage } from "./ProductImage"
import { ProductParameter } from "./ProductParameter"

export type Product = {
  id: string
  price: number
  category: Category
  images: ProductImage[]
  parameters: ProductParameter[]
}