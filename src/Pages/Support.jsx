import React from 'react'
import { FaMoneyCheckAlt, FaRegCreditCard, FaAngleLeft } from 'react-icons/fa'
import { AiTwotoneBank } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import DonateWay from '../Components/DonateWay'
import { Title } from '../Components'
import hand from "../img/heartHand.png"
import heart from "../img/health-icon.png"
import { Helmet } from 'react-helmet'

const Support = () => {
  return <>
    <Helmet>
      <title>
        الدعم
      </title>
    </Helmet>
    <div className='container mx-auto '>
      <Title img2={hand} title="ادعمونا لنستمر" />
      <div className='grid grid-cols-2 gap-6 my-10 px-10'>
        <DonateWay way="التبرع من خلال بطاقتك الإلكترونية" icon={<FaRegCreditCard />} />
        <DonateWay way="التحويل البنكي" icon={<AiTwotoneBank />} />
        <DonateWay way="التبرع عن طريق مندوب" icon={<GiReceiveMoney />} />
        <DonateWay way="طرق تبرع أخرى" icon={<FaMoneyCheckAlt />} />
      </div>
      <div className='grid grid-cols-2 border-t-[1px] p-10 '>
        <div className='md:col-span-1 col-span-2'>
          <div className='flex flex-col md:items-start items-center'>
            <figure>
              <img src={heart} alt="heart logo" />
            </figure>
            <div className='mt-4 text-gray-500 font-medium text-lg'>
              <h5>نرحب بتواصلكم معنا</h5>
              <h5>
                تليفون: <a href='tel:+2019999'>19999</a>
              </h5>
              <a href="mailto:contact_us@nkazhayah.org">contact_us@nkazhayah.org</a>
            </div>
          </div>
        </div>
        <div className='md:col-span-1 col-span-2'>
          <ul className='flex flex-col md:items-start items-center mt-10'>
          <li className=' duration-500 hover:text-secondary hover:-translate-x-2'>
            <FaAngleLeft className='inline-block '/>
          <a href="#">أخبار المبادرة</a>
        </li>
            <li className=' duration-500 hover:text-secondary hover:-translate-x-2'>
              <FaAngleLeft className='inline-block ' />
          <a href="#">فاعليات المبادرة</a>
        </li>
            <li className=' duration-500 hover:text-secondary hover:-translate-x-2'>
              <FaAngleLeft className='inline-block ' />
              <a href="#">أسئلة متكررة</a>
            </li>
            <li className=' duration-500 hover:text-secondary hover:-translate-x-2'>
              <FaAngleLeft className='inline-block ' />
              <a href="#">
                سياسة الخصوصية
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  
}

export default Support