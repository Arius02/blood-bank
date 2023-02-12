import React from 'react'
import Background from "../img/hero.jpg"
import hand from "../img/heartHand.png"
import pulses from "../img/pulses.png"
import donation from "../img/svg/001-blood-donation.svg"
import cloud from "../img/cloud.PNG"
import { Link } from 'react-router-dom'
import { MdEditLocationAlt } from 'react-icons/md'
import { BsDropletHalf } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { RiHeartPulseLine } from 'react-icons/ri'
import { Helmet } from 'react-helmet'
const Home = () => {

  return <>
  <Helmet>
      <title>
        انقاذ حياة
      </title>
    </Helmet>
  <div className='container m-auto'>
    <div className="lg:flex block lg:pl-0 p-10" >
      <div >
        <div className='flex  items-center'>
          <h2 className=' xl:text-5xl text-3xl font-bold text-primary'>
            فوائد التبرع بالدم
          </h2>
          <figure>
            <img src={hand} className="w-20" alt="hand and heart" />
          </figure>
        </div>
        <p className='text-xl text-gray-500 mt-4 leading-7 lg:w-full w-[90%]'>
          التبرع بالدم من أهم الوسائل التي تقي من الأمراض ويساعد على الحماية من كثير من مسببات الألم  كما أن التبرع بالدم مفيد جدا بالصحة
        </p>
        <figure  >
          <img className='mt-4 m-auto' src={pulses} alt="pulses" />
        </figure>
        <p className='text-xl text-gray-500 mt-4 mb-7 '>
          كن سببا في إنقاذ شخص مريضا الان
        </p>
        <Link to="/signup" className='bg-secondary px-4  text-center text-white p-3 rounded-md font-medium '>
          قم بالتسجيل الان
        </Link>
      </div>
      <div className='w-[100%] relative lg:mt-0 mt-4'>
        <img src={Background} className='w-full' alt="hero" />
        <figure>
          <img className='absolute top-[25%] opacity-40 left-0 w-16' src={donation} alt="blood dontion" />
        </figure>
        <figure>
          <img className='absolute top-[20%]  left-20 w-16' src={cloud} alt="blood dontion" />
        </figure>
        <figure>
          <img className='absolute top-[10%]  left-[35%] w-16' src={cloud} alt="blood dontion" />
        </figure>
        <figure>
          <img className='absolute top-[30%]  left-[73%] w-16' src={cloud} alt="blood dontion" />
        </figure>
      </div>
    </div>
    <div className='grid grid-cols-4 mt-[100px] mb-[50px] gap-x-5 gap-y-52 px-5'>
      <div className='home-card lg:mt-0 mt-[50px] '>
        <div className='rounded-full absolute bottom-[100%] 
        left-[50%] translate-x-[-50%] translate-y-[10%]  shadow-lg  
        flex items-center  justify-center h-[150px] w-[150px]'>
          <MdEditLocationAlt className='text-primary text-9xl ' />
        </div>
        <div className='mt-4  text-gray-500'>
          <h2 className='text-secondary font-bold text-xl mb-2'>أماكننا</h2>
          <p className='font-medium '>من الأفضل أن تقوم بحجز موعد قبل التوجه إلى مراكزنا للتبرع بالدم</p>
        </div>
      </div>
      <div className='home-card lg:mt-0  md:mt-[50px] '>
        <div className='rounded-full absolute bottom-[100%] 
        left-[50%] translate-x-[-50%] translate-y-[10%]  shadow-lg  
        flex items-center  justify-center h-[150px] w-[150px]'>
          <BsDropletHalf className='text-primary text-9xl ' />
        </div>
        <div className='mt-4  text-gray-500'>
          <h2 className='text-secondary font-bold text-xl mb-2'>هل يمكنني التبرع بالدم</h2>
          <p className='font-medium '> اعثر على معلومات حول التبرع بالدم وجرب اختبار الأهلية السريع </p>
        </div>
      </div>
      <div className=' home-card'>
        <div className='rounded-full absolute bottom-[100%] 
        left-[50%] translate-x-[-50%] translate-y-[10%]  shadow-lg  
        flex items-center  justify-center h-[150px] w-[150px]'>
          <AiOutlineSchedule className='text-primary text-9xl ' />
        </div>
        <div className='mt-4  text-gray-500'>
          <h2 className='text-secondary font-bold text-xl mb-2'>قبل الحضور</h2>
          <p className='font-medium '>ماذا أفعل قبل الحضور وماذا يحدث في العيادة؟</p>
        </div>
      </div>
      <div className='home-card '>
        <div className='rounded-full absolute bottom-[100%] 
        left-[50%] translate-x-[-50%] translate-y-[10%]  shadow-lg  
        flex items-center  justify-center h-[150px] w-[150px]'>
          <RiHeartPulseLine className='text-primary text-9xl ' />
        </div>
        <div className='mt-4  text-gray-500'>
          <h2 className='text-secondary font-bold text-xl mb-2'>معلومات حول الدم</h2>
          <p className='font-medium '>أساسيات فصيلة الدم ، حقائق مثيرة للاهتمام ، الاختبارات ، ما الغرض من استخدام الدم</p>
        </div>
      </div>

    </div>
  </div>
  </>
}

export default Home