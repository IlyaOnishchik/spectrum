import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: CategoryState = {
  count: 0,
  page: 0,
  take: 6,
  sortBy: 'price',
  order: 'asc',
  price: { min: 0, max: 0, from: 0, to: 0 }
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
  }
})

export const { setCount, setPage, setTake, setSortBy, setOrder, setPrice, setPriceFrom, setPriceTo } = categorySlice.actions
export const categoryReducer = categorySlice.reducer