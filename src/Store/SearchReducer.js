import { createSlice } from "@reduxjs/toolkit";
let initialState = { term: "all" }
const searchTermSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.term = action.payload
    }
  }
})

export const { searchTerm } = searchTermSlice.actions

export default searchTermSlice