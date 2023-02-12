import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const signIn = createAsyncThunk("user/signIn",async (arg,thunkAPI)=>{
    const {data} = await axios.post("https://sticky-note-fe.vercel.app/signin", arg)
  if (data.message === "success") {
    localStorage.setItem("user", JSON.stringify(data))
    return data
  } else if (data.message === "incorrect password" ||  "email doesn't exist"){
      return thunkAPI.rejectWithValue("كلمة السر أو البريد الإلكتروني غير صحيح")
    } 
})

const initialState = { 
  loading:false,
  isLogged:false,
  isError: false,
  message:"",
  user:null,
  }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    reset:(state,action)=>{
      state.isLogged = false;
      state.user = null;
    },
    stayLogged:(state, action)=>{
      state.isLogged = true;
      state.user = JSON.parse(localStorage.getItem("user"))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.message = "برجاء الانتظار"
        state.loading = true;
        state.isError = false;
      })
      .addCase(signIn.fulfilled, (state,action)=>{
        state.message = "تم تسجيل الدخول بنجاح"
        state.loading = false
        state.isError = false;
        state.isLogged = true;
        state.user = action.payload
      })
      .addCase(signIn.rejected, (state,action)=>{
        state.message = action.payload
        state.loading = false;
        state.isError = true;
      })
    }
})
export const {reset, stayLogged} = userSlice.actions

export default userSlice