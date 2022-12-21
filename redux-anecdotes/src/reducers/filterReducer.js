import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filteredWord(state, action) {
      return action.payload.toLowerCase()
    }
  }
})

export const { filteredWord } = filterSlice.actions
export default filterSlice.reducer