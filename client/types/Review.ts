import { Product } from "./Product"
import { User } from "./User"

export type Review = {
  id: string
  user: User
  product: Product
  text: string
  createdAt: string
}