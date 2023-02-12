import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewsLetter = ({title}) => {
  const handleClick = (e) => {
    e.preventDefault()

    let el = document.getElementById("send")
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(el.value)) {
      toast.success("تم الاشتراك بنجاح");
      document.getElementById("submit").setAttribute("disabled", true)
      el.value = ""
    } else {
      toast.error("برجاء ادخال بريد صالح")
    }
  }
  return (
    <div>
      <h2 className='text-center mt-10 text-xl font-semibold text-gray-600'>
        {title}
        </h2>
      <form className='text-center my-5 rounded-3xl shadow-lg w-fit mx-auto' onSubmit={handleClick}>
        <button id="submit" type="submit" className='bg-primary rounded-3xl px-4 py-2 text-white' >اشترك</button>
        <input id='send' type="text" className='rounded-3xl focus-visible:outline-0 px-3 ' placeholder='أدخل بريدك الإلكتروني' />
      </form>
    </div>
  )
}

export default NewsLetter