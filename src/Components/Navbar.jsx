import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaDonate} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import {categories} from "../utils/constansts"
import { useDispatch, useSelector } from 'react-redux'
import { activeToggle } from '../Store/activeLinkReducer'
import { reset } from '../Store/userReducer'
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const navigate = useNavigate()
  const [displayList, setDisplayList] = useState(false)
  const state = useSelector((state) => state)
  const Dispatch = useDispatch()
  const handleClick = (category)=>{
    Dispatch(activeToggle({ payload: category }))
    setDisplayList(false)
  } 
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/signin");
    Dispatch(reset())
  }
  return <div className='container m-auto'>
    <nav className='nav'>
      <Link to="/" >
        <img src={require("../img/health-icon.png")} alt="heart logo" className='w-14 heart' />
      </Link>
      <div onClick={() => setDisplayList(!displayList)} className="lg:hidden text-primary text-xl "> 
        {!displayList ? <RxHamburgerMenu /> : <AiOutlineClose/>}
      </div>
      <div className={displayList === false ? 'lg:flex justify-around items-center grow hidden':" flex-col flex absolute left-0 top-20 p-5 bg-white shadow-lg "}>  
      {categories.map((category, index) => <>
        <Link to={category.navTo} key={index} onClick={() => handleClick(category.name)}
                 className={`${state.activeLink.active.payload === category.name && "border-b-2 border-primary"}
           nav-link `}>
          {category.name}
        </Link>
      </>)}
          <Link to="/support" className='flex'>
          {displayList && <span className={`${state.value === "دعم المبادرة" && "border-b-2 border-primary"}
           duration-100 font-medium xl:text-lg lg:text-sm	 text-primary  mx-2 pb-3  ease-out 
            hover:border-b-2 border-primary mb-4 `} onClick={()=>handleClick("دعم المبادرة")} > دعم المبادرة</span>}
            <FaDonate className='text-3xl text-primary' />
          </Link>
        {!state.user.isLogged? <Link to="/signin" onClick={() => handleClick(null)} className='bg-primary text-center text-white p-3 rounded-md font-medium '>
          تسجيل الدخول
        </Link> : <button onClick={() => logOut()} className='bg-primary text-center text-white p-3 rounded-md font-medium '>
          تسجيل الخروج
        </button>}
        </div>
    </nav>
  </div>
}

export default Navbar