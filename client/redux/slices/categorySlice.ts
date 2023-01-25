import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckFilter, Filters, RangeFilter } from "../../types/Filters";

// export type ReduxFilters = {
//   checkFilters: ReduxCheckFilter[]
//   rangeFilters: ReduxRangeFilter[]
// }

// type ReduxFilter = {
//   id: string
//   name: string
//   order: number
// }

// export type ReduxCheckFilter = ReduxFilter & {
//   values: ReduxCheckFilterValue[]
// }

// type ReduxCheckFilterValue = {
//   value: string
//   unit: string
//   isChecked: boolean
// }

// export type ReduxRangeFilter = ReduxFilter & {
//   min: number
//   max: number
//   from: number
//   to: number
//   unit: string
// }

type Price = {
  min: number
  max: number
  from: number
  to: number
}

type CategoryState = {
  count: number
  page: number
  take: number
  sortBy: string
  order: string
  price: Price
  filters: Filters
}

const initialState: CategoryState = {
  count: 0,
  page: 0,
  take: 6,
  sortBy: 'price',
  order: 'asc',
  price: { min: 0, max: 0, from: 0, to: 0 },
  filters: {
    checkFilters: [],
    rangeFilters: []
  }
}

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    // pagination
    setCount: (state, action: PayloadAction<number>) => { state.count = action.payload },
    setPage: (state, action: PayloadAction<number>) => { state.page = action.payload },
    setTake: (state, action: PayloadAction<number>) => { state.take = action.payload },
    // sorting
    setSortBy: (state, action: PayloadAction<string>) => { state.sortBy = action.payload },
    setOrder: (state, action: PayloadAction<string>) => { state.order = action.payload },
    // price filter
    setPrice: (state, action: PayloadAction<Price>) => { state.price = action.payload },
    setPriceFrom: (state, action: PayloadAction<number>) => { state.price.from = action.payload },
    setPriceTo: (state, action: PayloadAction<number>) => { state.price.to = action.payload },
    // filters
    setFilters: (state, action: PayloadAction<Filters>) => {
      const checkFilters: CheckFilter[] = []
      action.payload.checkFilters.forEach(filter => {
        checkFilters.push({ ...filter, type: 'check', values: filter.values.map(value => ({ value: value.value, unit: value.unit, isChecked: false })) })
      })
      const rangeFilters: RangeFilter[] = []
      action.payload.rangeFilters.forEach(filter => {
        rangeFilters.push({ ...filter, type: 'range', from: filter.min, to: filter.max })
      })
      state.filters = { checkFilters, rangeFilters }
    }
  }
})

export const { 
  setCount, setPage, setTake,
  setSortBy, setOrder, 
  setPrice, setPriceFrom, setPriceTo,
  setFilters
} = categorySlice.actions
export const categoryReducer = categorySlice.reducer