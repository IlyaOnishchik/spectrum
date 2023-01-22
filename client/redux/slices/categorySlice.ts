import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoryState = {
  count: number
  page: number
  take: number
}

const initialState: CategoryState = {
  count: 0,
  page: 0,
  take: 1,
}

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => { state.count = action.payload },
    setPage: (state, action: PayloadAction<number>) => { state.page = action.payload },
    setTake: (state, action: PayloadAction<number>) => { state.take = action.payload }
  }
})

export const { setCount, setPage, setTake } = categorySlice.actions
export const categoryReducer = categorySlice.reducer