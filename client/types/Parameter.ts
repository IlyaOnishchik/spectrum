import { ParameterCategory } from "./ParameterCategory"
import { ParameterType } from "./ParameterType"

export type Parameter = {
  id: string
  name: string
  type: ParameterType
  category: ParameterCategory
  order: number
}