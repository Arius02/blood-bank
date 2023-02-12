import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa"
import { MdEmail, MdBloodtype } from "react-icons/md"
import { BiDonateBlood } from "react-icons/bi"
import { GiDna2 } from "react-icons/gi"
import { useDispatch } from 'react-redux'
import { activeToggle } from '../Store/activeLinkReducer'

const Footer = () => {
  const Dispatch = useDispatch()
  return <div className='relative bg-primary'>
    <div className='container m-auto grid grid-cols-3 p-4'>
      <div className=' col-span-3 md:col-span-1'>
        <img src={require("../img/logos.png")} className="opacity-10 m-auto   w-60" alt="" />
      </div>
      <div className='md:col-span-2 col-span-3 flex lg:flex-nowrap flex-wrap  justify-around md:items-center'>
        <div className='md:w-auto pl-2 w-[50%]'>
        <h2 className='text-xl font-semibold'>الدم</h2>
        <ul>
            <li className='text-white cursor-pointer '> 
              <Link to="/blood-donation" onClick={() => Dispatch(activeToggle({ payload: "التبرع بالدم" }))} className=' hover:underline duration-100 ease-out' >التبرع بالدم </Link>
              	</li>
            <li className='text-white cursor-pointer '> 
              <Link to="/search-for-donor" onClick={() => Dispatch(activeToggle({ payload: "البحث عن متبرعين" }))} className=' hover:underline duration-100 ease-out' > محتاج إلى الدم  </Link>
              	</li>
        </ul>
      </div>
        <div className='md:w-auto  pl-2 w-[50%]'>
        <h2 className='text-xl font-semibold'>سلامتك</h2>
        <ul>
            <li className='text-white cursor-pointer '> 
              <a href='#'  className=' hover:underline duration-100 ease-out' > نصائح أطباء </a>
               	</li>
            <li className='text-white cursor-pointer '> 
              <Link to="/medical-info" onClick={() => Dispatch(activeToggle({ payload: "معلومات طبية" }))} className=' hover:underline duration-100 ease-out' > معلومات طبية </Link>
               	</li>
        </ul>
      </div>
        <div className=' mt-4 md:mt-[20px] pl-2  md:w-auto w-[50%]'>
        <h2 className='text-xl font-semibold'>التواصل</h2>
        <ul>
            <li className='text-white'> 
              <Link to="/contact-us" onClick={() => Dispatch(activeToggle({ payload: "تواصل معنا" }))} className=' hover:underline duration-100 ease-out' > تواصل معنا </Link>
               	</li>
            <li className='text-white '> 
              تابعنا عبر مواقع التواصل:
            </li>
        </ul>
        <div className='flex text-white mt-2'>
            <a href="#">
              <FaFacebookF className='cursor-pointer ml-4' />
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
        <div className='mt-4 md:mt-[40px]  pl-2 md:w-auto w-[50%]'>
          <h2 className='text-xl font-semibold'>بنوك الدم</h2>
          <ul>
            <li className='text-white cursor-pointer '>
              <a href='https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8
              %B2+%D8%A7%D9%84%D8%A5%D9%82%D9%84%D9%8A%D9%85%D9%8A+%D9%84%D9%86%D9%82%D9%84
              +%D8%A7%D9%84%D8%AF%D9%85+%D8%A8%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B3%D9%8A%D8%A9
              %E2%80%AD/@30.0656738,31.2822279,17z/data=!3m1!4b1!4m5!3m4!1s0x14583f9f5d79d0b1:0x7549dc2e4eb3df1f!8m2!3d30.0656692!4d31.2848028'
              target="_blank" className=' hover:underline duration-100 ease-out' > بنك الدم الاقليمي - العباسية </a>
               	</li>
            <li className='text-white cursor-pointer '>
              <a href='https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%
              B4%D9%81%D9%89+%D8%A7%D9%84%D9%82%D8%B5%D8%B1+%D8%A7%D9%84%D8%B9%D
              9%8A%D9%86%D9%8A+%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%E2%80%AD/@30.0307072,31.2270088,17z/data=!3m1!4b1!4m5!3m4!1s0x14
              58474ceb13399d:0xd47271511894a3eb!8m2!3d30.0307026!4d31.2295837
              ' target="_blank" className=' hover:underline duration-100 ease-out' > بنك الدم - القصر العيني </a>
               	</li>
            <li className='text-white cursor-pointer '>
              <a href='https://www.google.com/maps/place/Sahel+Teaching+Hospital/@30.0839388,31.239673,17z/data=!3m
              1!4b1!4m5!3m4!1s0x145840687ee6605d:0xce4a0e3d0b6c9d54!8m2!3d30.0839342!4d31.2422479'
              target="_blank" className=' hover:underline duration-100 ease-out' > بنك الدم الاقليمي - مستشفى الساحل </a>
               	</li>
            <li className='text-white cursor-pointer '>
              <a href='https://099.tel/Egypt/w/blood-banks' target="_target" className=' hover:underline duration-100 ease-out' >قائمة بنوك الدم المصرية </a>
               	</li>
           
          </ul>
        </div>
      </div>
    </div>
    <div className=' bg-[#D52B05]  '>
      <div className='container m-auto py-4 px-4 flex  md:flex-row flex-col-reverse items-center text-center'>
        <h3 className='text-white'>  جميع الحقوق محفوظة &copy; 2023</h3>
        <div className='flex md:mr-auto md:flex-row flex-col-reverse items-center'>
          <p className='text-white ml-0 md:ml-2 flex items-center'>
            <a href="tel:+201000002023" className='ml-2 text-center'>201000002023+</a>
            <FaPhoneAlt />
          </p>
          <p className='text-white flex items-center mr-2 '>
            <a href='mailto:blood_donation@inkazhayah.org' className='ml-2'>blood_donation@inkazhayah.org</a>
            <MdEmail />
          </p>
        </div>
      </div>
    </div>
    <BiDonateBlood className='absolute top-20 left-0  text-4xl text-white opacity-20'/>
    <BiDonateBlood className='absolute top-1/2 rotate-45 left-50 text-4xl text-white opacity-20'/>
    <MdBloodtype className='absolute   top-[80%] right-[40%] rotate-[30deg] text-4xl text-white opacity-20'/>
    <MdBloodtype className='absolute top-20 left-40 hidden md:block rotate-[30deg] text-4xl text-white opacity-20'/>
    <MdBloodtype className='absolute hidden md:block top-10 left-[40%] rotate-[30deg] text-4xl text-white opacity-20'/>
    <GiDna2 className='absolute top-[80%] left-20 text-4xl rotate-[20deg] text-white opacity-20' />
    <GiDna2 className='absolute top-1/4 hidden md:block left-[50%] text-4xl rotate-[20deg] text-white opacity-20' />
    <GiDna2 className='absolute top-[50%] left-[11%] text-4xl rotate-[20deg] text-white opacity-20' />
    <GiDna2 className='absolute top-20 right-50 text-4xl text-white opacity-20' />
    <GiDna2 className='absolute top-[50%] right-[30%] text-4xl text-white opacity-20' />
  </div>
}

export default Footer