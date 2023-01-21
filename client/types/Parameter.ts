import { ParameterCategory } from "./ParameterCategory"

export type Parameter = {
  id: string
  name: string
  category: ParameterCategory
  order: number
}