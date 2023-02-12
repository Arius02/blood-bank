import { createSlice } from "@reduxjs/toolkit";
let initialState = { size: 0 }
const screenSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    screenSize: (state, action) => {
      state.size = action.payload
    }
  }
})

export const { screenSize } = screenSlice.actions

export default screenSlice