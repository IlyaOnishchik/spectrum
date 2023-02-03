import { Category } from "./Category"
import { ProductImage } from "./ProductImage"
import { ProductParameter } from "./ProductParameter"
import { ProductRating } from "./ProductRating"
import { Review } from "./Review"

export type Product = {
  id: string
  name: string
  price: number
  quantity: number
  category: Category
  images: ProductImage[]
  parameters: ProductParameter[]
  reviews: Review[]
  rating: ProductRating
}