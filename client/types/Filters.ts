export type Filters = {
  checkFilters: CheckFilter[]
  rangeFilters: RangeFilter[]
}

type Filter = {
  id: string
  name: string
  order: number
}

export type CheckFilter = Filter & {
  values: CheckFilterValue[]
  type: 'check'
}

export type CheckFilterValue = {
  value: string
  unit: string
  isChecked: boolean
}

export type RangeFilter = Filter & {
  type: 'range'
  min: number
  max: number
  from: number
  to: number
  unit: string
}