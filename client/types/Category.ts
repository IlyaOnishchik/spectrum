import { Image } from "./Image"

export type Category = {
  id: string
  name: string
  image: Image | null
  parentCategoryId: string | null
  order: number
}