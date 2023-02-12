import axios from 'axios'
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signIn,  } from '../Store/userReducer'
import { SignInValidation, SignUpValidation } from '../Validation'
const SignForm = ({ signUp, isModal }) => {
const Dispatch = useDispatch()
const Navigate= useNavigate()
  const { loading, isError, isLogged, message } = useSelector((state) => state.user)
  let newUser ={
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "age": 0
  }
  let oldUser ={
    "email": "",
    "password": "",
  }
  
  const handleChange = (e) => {

    let user =  signUp ? {...newUser} : {...oldUser}
    user[`${e.target.id}`] = e.target.value
    signUp? newUser= user : oldUser=user
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const res = signUp?SignUpValidation(newUser) : SignInValidation(oldUser)
    if (res.status && signUp) {
        send(newUser)
    } else if(res.status && !signUp) {
      Dispatch(signIn(oldUser))
    } else{
      toast.error(res.message)
    }
  }
const send = async (user)=>{
  const {data} = await axios.post(`https://sticky-note-fe.vercel.app/signup`, user)
  if (data.message === "citizen validation failed: email: email already registered"){
      toast.error("هذا البريد الإلكتروني مسجل من قبل")
    }  
    else {
      toast.success("تم التسجيل بنجاح")
      setTimeout(()=>{
        Navigate(`/signin`)
      },1500)
    }
}
const toastId = useRef(null);
useEffect(()=>{
  if(loading){
    toastId.current =toast.loading(message)
  }
  else if(isLogged){
    toast.dismiss(toastId.current);
    toast.success(message)
    Navigate(`/`)
  } else if(isError){
    toast.dismiss(toastId.current);
    toast.error(message)
  }
},[loading, isLogged, isError, message])
  return (
    <form onSubmit={handleSubmit} className={`${isModal ? "w-11/12" :"lg:w-1/3 md:w-1/2 "}bg-gray-200  mx-auto w-11/12  rounded-xl p-10`}>
      <h2 className='text-2xl text-primary font-semibold my-5'>
        {signUp ? "تسجيل حساب" : "تسجيل الدخول"}
      </h2>
      {signUp && <> <input id='first_name' onChange={handleChange} className='form-control mb-5' type="text" placeholder='الاسم الأول' />
        <input id='last_name' onChange={handleChange} type="text" className='form-control mb-5 ' placeholder='اسم الأب' />
        <input id='age' onChange={handleChange} type="number" className='form-control  mb-5' placeholder='العمر' /></>}
      <input id='email' onChange={handleChange} type="text" className='form-control  mb-5' placeholder='البريد الإلكتروني' />
      <input id='password' onChange={handleChange} type="password" className='form-control  mb-5' placeholder='كلمة المرور' />
      <button className='bg-secondary px-4 py-3 rounded-xl block mx-auto text-white'>
        {signUp ? "تسجيل " : " دخول"}
      </button>
        <div>
        <small> {`${signUp ? "لديك حساب؟" : "ليس لديك حساب؟"  }`} <Link to={`/${signUp ? "signin" : "signup" }`} className="hover:underline"> {`${signUp ? "تسجيل الدخول" : "تسجيل حساب"  }`} </Link></small>
      </div>
    </form>
  )
}

export default SignForm