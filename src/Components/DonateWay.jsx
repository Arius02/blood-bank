import React from 'react'

const DonateWay = ({way, icon}) => {
  return (
      <div className='md:col-span-1 col-span-2 cursor-pointer'>
      <div className='p-10 rounded-2xl bg-white hover:shadow-primary shadow-lg flex items-center
      hover:shadow-lg border-[1px] border-transparent hover:border-secondary duration-500'>
        <div className='text-2xl text-secondary'>
        {icon}
        </div>
        <h3 className='text-2xl font-semibold mr-5'> 
        {way}  
        </h3>
        </div>
      </div>
  )
}

export default DonateWay