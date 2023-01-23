import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Price = {
  from: number
  to: number
}

type CategoryState = {
  count: number
  page: number
  take: number
  sortBy: string
  order: string
  price: Price | null
}

const initialState: CategoryState = {
  count: 0,
  page: 0,
  take: 6,
  sortBy: 'price',
  order: 'asc',
  price: null
}

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => { state.count = action.payload },
    setPage: (state, action: PayloadAction<number>) => { state.page = action.payload },
    setTake: (state, action: PayloadAction<number>) => { state.take = action.payload },
    setSortBy: (state, action: PayloadAction<string>) => { state.sortBy = action.payload },
    setOrder: (state, action: PayloadAction<string>) => { state.order = action.payload },
    setPrice: (state, action: PayloadAction<Price>) => { state.price = action.payload }
  }
})

export const { setCount, setPage, setTake, setSortBy, setOrder, setPrice } = categorySlice.actions
export const categoryReducer = categorySlice.reducer