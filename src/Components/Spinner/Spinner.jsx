import React from 'react'
import "./spinner.css"
import { AiFillHeart } from "react-icons/ai"
const Spinner = () => {
  return (
      <div className=" flex h-screen items-center justify-center container mx-auto" > 
        <AiFillHeart className='text-primary heart text-6xl'/>
      </div>
  )
}

export default Spinner