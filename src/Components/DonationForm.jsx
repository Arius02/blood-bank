import React from 'react'
import doctor from '../img/doctor.PNG'
import blood from '../img/svg/004-blood.svg'
import {useSelector} from 'react-redux'
import donate from '../img/donation form.PNG'
import {DonorValidation, PatientValidation } from '../Validation'
import {toast} from 'react-toastify'
const DonationForm = ({ type, setLayout }) => {
const {user:{user:{first_name, last_name, age,_id}}}= useSelector((state)=>state.user)
let donor={
  first_name,
  last_name,
  age,
  country:"",
  location:"",
  phone_number:"",
  blood_type:"",
  first_message:"",
  last_message:"",

} 
let patient = {
  first_name,
  last_name,
  age,
  country: "",
  location: "",
  phone_number: "",
  blood_type: "",
  first_message: "",
  last_message: "",
  blood_bags_req: 1,
  status:"stable",
}
const handleChange = (e)=>{
  const newForm =type==="donor"? {...donor}:{...patient}
  newForm[`${e.target.id}`] = e.target.value;
  type === "donor" ? donor = { ...newForm } : patient = { ...newForm }
  console.log(newForm)
}
const saveForm = JSON.parse(localStorage.getItem("user"))
const handleSubmit= (e)=>{
e.preventDefault();
  const res = type ==="donor"? DonorValidation(donor) : PatientValidation(patient)
  if (res.status) {
    setLayout(false)
    toast.success("تم تسجيلك بنجاح")
  }else {
      toast.error(res.message)
    }
  if (type === "donor" && res.status){
  // ui doesn't work with this question
  donor.chronic={ status: false };
    donor.img= "https://ucarecdn.com/cf30035c-7e64-4c39-bcdb-e494fba2406e/user.jpg"
    donor._id= _id
    donor.type = "donor"
//there is no Api so every thing is static 
saveForm.user_form= donor;
localStorage.setItem("user", JSON.stringify(saveForm));
  } else if (type === "patient" && res.status) {
    patient.img = "https://ucarecdn.com/cf30035c-7e64-4c39-bcdb-e494fba2406e/user.jpg"
    patient._id = _id
    patient.type = "patient"
   saveForm.user_form = patient;
   localStorage.setItem("user", JSON.stringify(saveForm));
  }
}
  return <div>
    <div className=' w-full p-5 shadow-lg relative z-10 rounded-3xl '>
      <h2 className='font-medium text-2xl mb-3 text-gray-500'> {type=== "donor" ? "قم بادخال البيانات كمتبرع بالدم":"قم بإدخال البيانات للتسجيل كمحتاج للدم"}</h2>
      <form className='realtive' onSubmit={handleSubmit}>
        <div className='my-4 grid grid-cols-2 gap-5' >
          <div className='col-span-1 '>
            <input id="first_name" onChange={handleChange} value={first_name} type="text" placeholder='الاسم' className=' donation-card' />
          </div>
          <div className='col-span-1 '>
            <input id="last_name" onChange={handleChange} value={last_name} type="text" placeholder='اسم الأب' className=' donation-card' />
          </div>
          <div className='col-span-1 '>
            <input id="country" onChange={handleChange} type="text" placeholder='البلد' className=' donation-card' />
          </div>
          <div className='col-span-1 '>
            <input id="location" onChange={handleChange} type="text" placeholder='المدينة' className='donation-card' />
          </div>
          <div className='col-span-1 ' >
            <input id="phone_number" onChange={handleChange} type="text" placeholder='رقم الهاتف' className='donation-card' />
          </div>
          <div className='col-span-1 '>
            <input id="age" onChange={handleChange} value={age} type="text" placeholder='العمر' className='donation-card' />
          </div>
          <div className="col-span-1  border-none ">
            <select id="gander" onChange={handleChange} className=" w-full  p-1 text-white bg-secondary focus:border-none  
            rounded-md shadow-sm  outline-none appearance-none ">
              <option>الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
          <div className='col-span-1'>
            <input id="blood_type" onChange={handleChange} type="text" placeholder='فصيلة الدم' className='donation-card' />
          </div>
          {type === "patient"? <>
            <div className='col-span-1 '>
              <select id="status" onChange={handleChange} className=" w-full  p-1 text-white bg-secondary focus:border-none  
            rounded-md shadow-sm  outline-none appearance-none ">
                <option>الحالة</option>
                <option value="stable">مستقرة</option>
                <option value="dangerous">حرجة</option>
              </select>
            </div><div className="col-span-1">
              <input id="blood_bags_req" onChange={handleChange} type="text" placeholder='عدد أكياس الدم المطلوبة' className='donation-card'/>
            </div>
          </> : <>
            <div className='md:col-span-1 col-span-2 '>
              <select id="last_time" onChange={handleChange} className=" w-full  p-1 text-white bg-secondary focus:border-none  
            rounded-md shadow-sm  outline-none appearance-none ">
                <option>اخر مرة قمت بالتبرع</option>
                <option value="أقل من شهر">أقل من شهر</option>
                <option value="منذ شهر">منذ شهر</option>
                <option value="منذ شهرين">منذ شهر</option>
                <option value="منذ ثلاث أشهر">منذ ثلاث أشهر</option>
                <option value="منذ ثلاث أشهر فأكثر">منذ ثلاث أشهر فأكثر</option>
              </select>
            </div>
            <div className="md:col-span-1 col-span-2"></div>
            </>
          }
          <div className='md:col-span-1 col-span-2'>
            <h3 className='font-medium text-gray-500  text-2xl'>لحفظ سلامتك</h3>
            <label htmlFor="date" className='text-primary text-medium '>
              {type === "donor" ? "اخر مرة قمت بالتبرع بالدم؟" : "ما حالة المصاب المحتاج إلى الدم؟"}
                          </label>
            <textarea  id="first_message" onChange={handleChange}  cols="20" rows="3" className='w-full bg-secondary focus:outline-none text-white caret-white
         placeholder:text-white rounded-md p-1 block mt-2 mb-5 ' placeholder='كتابة الاجابة هنا...'></textarea>
            <label htmlFor="date" className='text-primary text-medium '>
              {type === "donor" ? "هل أنت مصاب بأي أمراض؟": "كم يحتاج المصاب من أكياس الدم وكيف هي الحالة؟"}
             </label>
            <textarea id="last_message" onChange={handleChange}  cols="20" rows="3" className='w-full bg-secondary focus:outline-none text-white caret-white
placeholder:text-white rounded-md p-1 block mt-2 mb-5 ' placeholder='كتابة الاجابة هنا...'></textarea>
          </div>
          <div className='md:col-span-1 col-span-2'>
            <figure>
              <img src={type === "donor" ? donate : doctor} alt="donate" className='w-full' />
            </figure>
          </div>
        </div>
        <div className='text-center'>
          <button className='px-4 py-2 text-white bg-secondary
           rounded-md font-medium   '> {type === "donor" ? "تسجيلي كمتبرع" : "تسجيلي كمحتاج الأن"} </button>
        </div>
        <figure className={`absolute  ${type === "donor" ? "left-[-1%] rotate-45 bottom-[10%]" : "bottom-[-4%] rotate-[-45deg] right-[-2%]"} opacity-25 `}>
          <img src={blood} alt="blood" className='w-20' />
        </figure>
      </form>
    </div>
  </div>
}

export default DonationForm