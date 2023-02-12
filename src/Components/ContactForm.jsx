import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {ContactValidation} from '../Validation'

const ContactForm = () => {
  const user= {
    name:"",
    email:"",
    phoneNumber:"",
    message:""
  }
  const handleChange = (e)=>{
    user[`${e.target.id}`] = e.target.value
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const res= ContactValidation(user)
    if(res.status){
      document.getElementById("name").value=""
      document.getElementById("phoneNumber").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      toast.success("تم ارسال رسالتك بنجاح")
      document.getElementById("send").setAttribute("disabled", true)
    }else {
      toast.error(res.message)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="p-10 bg-gray-100 rounded-lg">
      <h6 className=' text-secondary my-4'>من فضلك قم بملئ البيانات الاتية:</h6>
      <input id="name" onChange={handleChange} type="text" placeholder='الاسم' className='form-control mb-4' /> 
  <input id="phoneNumber" onChange={handleChange} type="text" placeholder='رقم الهاتف' className='form-control mb-4' /> 
 <input id="email" onChange={handleChange} type="text" placeholder='البريد الإلكتروني' className='form-control mb-4' /> 
      <textarea id="message" onChange={handleChange} rows="7" placeholder='رسالتك' className='form-control mb-5' ></textarea> 
      <div className='text-center'>
        <button id="send"  className='px-6  py-2 text-white bg-secondary
           rounded-upnormal font-medium mb-3'> ارسال </button>
      </div>
    </form> 
  )
}

export default ContactForm