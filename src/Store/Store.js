import { configureStore } from "@reduxjs/toolkit"
import activeLinkSlice  from "./activeLinkReducer"
import screenSlice from "./screenReducer"
import searchTermSlice from "./SearchReducer"
import userSlice from "./userReducer"
const store = configureStore({ reducer: { activeLink: activeLinkSlice.reducer, 
  searchTerm: searchTermSlice.reducer,
  screen: screenSlice.reducer, user: userSlice.reducer }})

export default store