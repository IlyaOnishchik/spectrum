import { Cart } from "./Cart"
import { Product } from "./Product"

export type CartProduct = {
  id: string
  cart: Cart
  product: Product
  quantity: number
}