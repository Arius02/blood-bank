import React from 'react'
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <div className="flex flex-col  absolute top-0 left-0 bottom-0 right-0 z-50 items-center bg-white " >
      <h2 className="text-2xl foont-Bold mt-10 mb-5">الصفحة غير موجودة :'(</h2>
      <h3>يبدو أن الرابط الذي أدخلته غير صحيح</h3>
      <div className="flex mt-5 text-secondary">
        <Link to="/" className="ml-2 hover:underline ">الصفحة الرئيسة</Link>
        <Link to="/search-for-donor" className="ml-2 hover:underline " >أبحث عن متبرع</Link>
        <Link to="/blood-donation" className=" hover:underline ">أريد التبرع</Link>
      </div>
    </div>
  )
}

export default NotFound