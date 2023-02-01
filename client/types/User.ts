import { Cart } from "./Cart"
import { Favorites } from "./Favorites"
import { Review } from "./Review"
import { Role } from "./Role"

export type User = {
  id: string
  email: string
  roles: Role[]
  isActivated: boolean
  isBanned: boolean
  cart: Cart
  favorites: Favorites
  reviews: Review[]
}