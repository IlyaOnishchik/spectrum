import { Product } from "./Product"

export type PriceHistory = {
  id: string
  product: Product
  createdAt: string
  value: number
}