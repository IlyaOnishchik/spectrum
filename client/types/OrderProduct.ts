import { Order } from "./Order"
import { Product } from "./Product"

export type OrderProduct = {
  id: string
  order: Order
  product: Product
  quantity: number
  paid: number
}