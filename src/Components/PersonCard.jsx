import React  from 'react'
import blood from "../img/hand.png"
import heart from "../img/heartHand.png"
import { MdOutlineBloodtype } from "react-icons/md"
import { GrMapLocation } from "react-icons/gr"
import { GiDuration } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CgDanger } from 'react-icons/cg'
const PersonCard = ({type , list}) => {
  const state = useSelector((state)=>state.searchTerm.term)
  const filterdList = list.filter((person)=>{
    return state === "all" || state.payload === "all" ? person : person.bloodType === state.payload
  })
  return filterdList.length >0 ? filterdList.map((person, index) => <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
    <div className={`${type === "donor" ? "bg-gray-100 " : "bg-white"} donor-card`}
     key={person.id}>
      <div className={`${type === "donor" ? "donor-path" : "patient-path " } bg-secondary absolute`}></div>
      <figure className='card-image'>
        <img src={person.image} className="w-28 h-28 rounded-full  " alt="donor person" />
        <figcaption className='font-bold mt-2 text-lg'>{person.first_name} {person.last_name}</figcaption>
      </figure>
      <div className='relative z-10'>
        <div className='flex justify-between'>
          <p className={`${type=== "donor"? "text-secondary" : "text-white "} mt-2 font-medium`} >
            {<MdOutlineBloodtype className='donation-icons'/>} فصيلة الدم {person.blood_type}</p>

          {type === "patient" && person.status === "dangerous" && <p className='mt-2 font-medium text-white'>
            {<CgDanger className='donation-icons'/>}  الحالة حرجة
          </p>}

        </div>
        <p className={`${type=== "donor"? "text-secondary" : "text-white "} mt-2 font-medium`} >
          {<GrMapLocation className='donation-icons'/>}{person.location}
          </p>

        <p className={`${type === "donor" ? "text-secondary" : "text-white "} mt-2 font-medium`} >
          {<GiDuration className='donation-icons'/>}  {person.age} {person.age<10 ?"أعوام" : "عام"} </p>
      </div>
      <Link to={`${type === "donor" ?"donor-details":"patient-details"}/${index}`}
       className='bg-primary text-white px-2 py-1 absolute bottom-0 left-[-1px]'>
        للمزيد من المعلومات 
      </Link>
      <figure>
        <img src={type=== "donor"? blood : heart} className="absolute left-0 top-9  z-10 w-14" alt="donation" />
      </figure>
    </div>
  </div>) : <p className="text-primary text-center">عذراً لا يوجد متبرعين يحملون هذه الفصيلة حالياً</p>
}

export default PersonCard