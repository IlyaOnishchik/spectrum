import { CartProduct } from "./CartProduct"
import { Product } from "./Product"

export type Cart = {
  id: string
  products: CartProduct[]
}