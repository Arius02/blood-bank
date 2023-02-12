import  { useState } from 'react'
import {  useSelector } from 'react-redux'
import { SignModal } from "../Components"

const Header = ({ title, word, paragraph, image, verse, setLayout, type, isForm }) => {
 

  const [modalIsOpen, setIsOpen] = useState(false);

  const { isLogged } = useSelector((state) => state.user)
  const makeARequest= ()=>{
   if(isLogged){
    setLayout(true)
  }else {
     setIsOpen(true)
  }
  }
    return (
    <div className="">

      <SignModal type={type} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className='text-center mt-4 px-10'>
      <h6 className='text-primary font-light'>{title}</h6>
      <h2 className='md:text-4xl text-xl my-3'>{verse && <small className='text-xs'>قال تعالي</small>} {word}</h2>
          {isForm && <div className='flex '>
            <div className='text-start md:w-[60%] w-full'>
              <p className='mt-5 text-gray-500 text-lg'>{paragraph}</p>
              <button onClick={() => makeARequest()}
                className='px-3 py-1 bg-secondary text-white mt-4 rounded-md' >سجل الان</button>
            </div>
            <figure className='w-[40%] md:block hidden'>
              <img src={image} className="w-full" alt="giving" />
            </figure>
          </div>}
    </div></div>
  )
}

export default Header