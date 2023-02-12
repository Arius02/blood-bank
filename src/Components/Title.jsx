import React from 'react'

const Title = ({img1, title, img2,  addtion}) => {
  return (
    <div className='flex justify-center items-center my-10'>
      {img1&&<figure>
        <img src={img1} className={`${addtion? "w-7":"w-16"}`} alt="donate" />
      </figure>}
      <h2 className='font-medium md:text-3xl 
      text-xl mx-5  text-gray-600'>{title}</h2>
      {img2&& <figure>
        <img src={img2} className=" w-14" alt="donate" />
      </figure>}
    </div>
    )
}

export default Title