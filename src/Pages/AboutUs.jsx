import React from 'react'
import { Title } from '../Components'
import test from "../img/test.PNG"
import about from "../img/about.png"
import check from "../img/Capture.png"
import shape1 from "../img/svg/waves.svg"
import shape2 from "../img/svg/waves2.svg"
import { Helmet } from 'react-helmet'
const AboutUs = () => {
  return <>
      <Helmet>
      <title>
        من نحن
      </title>
    </Helmet>
    <div className='container m-auto '>
      <Title img1={test} title="من نحن" addtion="small" />
      <div className='bg-[#E7E6E6] relative mt-5'>
        <figure>
          <img src={shape1} alt="svg shape" />
        </figure>
        <figure className='absolute left-4 top-[-10%]'>
          <img src={about} className="w-44" alt="donation" />
        </figure>
        <div className='lg:w-1/2 text-xl p-10'>
          <h5 className='font-bold mb-4 lg:mt-0 md:mt-5 mt-7'>انقاذ حياة هي مبادرة للربط بين المحتاج والمتبرع بالمجان تحت نخبة من الأطباء والممرضين</h5>
          <ul className='list-disc'>
            <li className='mb-3 text-secondary font-medium' >متخصصين في التبرع بالدم وإشراف صحي متميز</li>
            <li className='mb-3 text-secondary font-medium'>كفاءة عالية من الرعاية والعلاج والإشراف الطبي</li>
            <li className='mb-3 text-secondary font-medium'>رعاية إضافية من فريق متعدد التخصصات</li>
            <li className='mb-3 text-secondary font-medium'>الفحص بشكل دقيق وحازم لضمان سلامتكم</li>
          </ul>
        </div>
      </div>
      <div className='bg-[#E7E6E6] relative mt-20'>
        <figure>
          <img src={shape2} alt="svg shape" />
        </figure>
        <figure className='absolute right-4 md:top-[-5%] top-[-20%]'>
          <img src={check} className="w-44" alt="donation" />
        </figure>
        <div className='md:w-1/2 text-xl p-10 mr-auto'>
          <h4 className='font-2xl font-bold text-primary leading-10'>مبادرة مجانية بالتعاون مع وزارة الصحة ووزارة التضامن الاجتماعي لمساعدة المرضي في جميع أنحاء مصر ورفع روح التشارك والتلاحم والمسؤولية بين أفراد المجتمع.</h4>
        </div>
      </div>

    </div>
  </>
  
  
}

export default AboutUs