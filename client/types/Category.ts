import { Filters } from "./Filters"
import { Image } from "./Image"
import { Product } from "./Product"

export type Category = {
  id: string
  name: string
  image: Image | null
  parentCategoryId: string | null
  order: number
  products: Product[]
  filters: Filters
}