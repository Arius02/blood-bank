import { createSlice } from "@reduxjs/toolkit";
let initialState = { active: "الرئيسية" }
const activeLinkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    activeToggle: (state, action) => {
      state.active = action.payload
    }
  }
})

export const { activeToggle } = activeLinkSlice.actions

export default activeLinkSlice