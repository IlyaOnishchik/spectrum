import { OrderProduct } from "./OrderProduct"
import { User } from "./User"

export type Order = {
  id: string
  user: User
  orderProducts: OrderProduct[]
  amount: number
  status: string
  createdAt: string
  updatedAt: string
  name: string
  phone: string
  country: string
  city: string
  address: string
  zipCode: number
}