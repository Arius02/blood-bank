import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { donorsList, patientsList } from '../utils/constansts'
import { MdOutlineBloodtype } from "react-icons/md"
import { GrMapLocation } from "react-icons/gr"
import { GiDuration } from "react-icons/gi"
import check from "../img/check.PNG"
import check2 from "../img/check2.PNG"
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Helmet } from 'react-helmet'
const PersonDetials = () => {
  const data  = useParams()
  const navigate = useNavigate()
  const person = data.donor? donorsList[data.id]: patientsList[data.id]
  const handleClick= ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    delete user.user_form
    localStorage.setItem("user",JSON.stringify(user))
    if(data.donor){
      navigate("/search-for-donor")
       donorsList.shift()
    } else{
      navigate("/blood-donation")
      patientsList.shift()
    }
    console.log(user)
  }
  return <>
    <Helmet>
      <title>
        {data.donor?"بيانات المتبرع":"بيانات المريض"}
      </title>
    </Helmet>
    <div className='container m-auto'>
      <figure className="text-center card-image">
        <img src={person.image} className=" w-32 h-32 rounded-full " alt="person pic" />
        <figcaption className='font-bold mt-2 text-lg'>{person.first_name} {person.last_name}</figcaption>
      </figure>
      <div className=' flex flex-wrap  justify-around mb-10'>
        <div className='flex justify-between mt-5 h-[400px] md:w-[45%] w-[90%] m-auto flex-wrap  rounded-3xl bg-white shadow-lg p-10'>
          <div className='w-[50%]'>
            <p className='donor-p'>{<MdOutlineBloodtype className='person-icons' />}فصيلة الدم {person.blood_type}</p>
            <p className='donor-p'>{<GrMapLocation className='person-icons' />}{person.location}</p>
            <p className='donor-p'>{<GiDuration className='person-icons' />}  {person.age} عام</p>
          </div>
          <p className='flex w-[50%] justify-center mt-2 items-center h-fit'>
            <a href="tel:+201000002023" className='ml-2 text-center'>{person.phone_number}</a>
            <FaPhoneAlt />
          </p>
          <div className='mt-4 w-[45%]'>
            <p className='text-gray-800'>التواصل الاجتماعي:</p>
            <div className='flex text-primary mt-3'>
              <a href="#">
                <FaFacebookF className='cursor-pointer ml-4 mr-4' />
              </a>
              <a href="#">
                <FaInstagram className='cursor-pointer ml-4' />
              </a>
              <a href="#">
                <FaLinkedinIn className='cursor-pointer ml-4' />
              </a>
              <a href="#">
                <FaTwitter className='cursor-pointer ' />
              </a>
            </div>
          </div>
          <figure className='w-[45%]'>
            <img src={check} className="w-[95%]" alt="check" />
          </figure>
        </div>
        <div className='md:w-[45%]  mt-5 w-[90%] h-[400px] m-auto flex flex-wrap rounded-3xl justify-between bg-white shadow-lg p-10'>
          {data.donor && <div className='w-[50%]'>
            <h2>أخر مرة قام بالتبرع:</h2>
            <h5 className='text-secondary mt-1'>{person.last_time}</h5>
          </div>}
          {data.patient && <div className='w-[50%]'>
            <h2>أكياس الدم المطلوبة:</h2>
            <h5 className='text-secondary mt-1'>{person.blood_bags_req} {person.age < 3 ? "كيس" : "أكياس"} </h5>
          </div>}
          {data.donor && <div className='w-[50%]'>
            <h2>الحالة الصحية:</h2>
            {person.chronic.status === true ? person.chronic.diseases.map((diseases, index) =>
              <p className='text-secondary mt-1 mr-1 inline-block' key={index}>-{diseases}</p>)
              : <h5 className='text-secondary mt-1'> ليس لديه أي مرض</h5>}
          </div>}
          {data.patient && <div className='w-[50%]'>
            <h2>الحالة الصحية:</h2>
            {person.status === "dangerous" ? <h5 className='text-secondary mt-1 mr-1 inline-block' >حرجة</h5>
              : <h5 className='text-secondary mt-1'>مستقرة</h5>}
          </div>}
          <div className='mt-5'>
            <label htmlFor='message'>أرسل رسالة لـ{person.first_name}:</label>
            <textarea name="" id="message" cols="20" rows="6" className='w-full bg-secondary focus:outline-none text-white caret-white
placeholder:text-white rounded-md p-1 block mt-2 mb-5 ' placeholder='اجعل رسالتك بناءة...'></textarea>
            <button className='bg-secondary px-3 py-1 m-auto rounded-md text-white block '>إرسال</button>
          </div>
          <figure className='w-[50%] mt-5'>
            <img src={check2} className="w-[95%]" alt="chick" />
          </figure>
        </div>
      </div>
   <div className='text-center mt-5 mb-10'>
        <button  onClick={handleClick} className='px-6  py-2 text-white bg-secondary
           rounded-upnormal font-medium mb-3'>
          حذف الملف
        </button>
   </div>
    </div>
  </>
}

export default PersonDetials