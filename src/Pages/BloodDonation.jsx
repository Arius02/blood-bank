import React, { useState } from 'react'
import heart from '../img/heartHand.png'
import car from '../img/car.png'
import donate from '../img/10780139_19198095.jpg'
import giving from "../img/giving.png"
import { patientsList } from "../utils/constansts"
import { Header, PersonCard, Title, DonationForm, SearchSide, Grid } from '../Components'
import { Helmet } from 'react-helmet'

const BloodDonation = () => {
  const [layout, setLayout] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))
  let isForm = true
  if (user?.user_form && user?.user_form.type === "patient") {
    patientsList.unshift(user.user_form)
  } if (user?.user_form) {
    isForm = false
  }

  return <>
    <Helmet>
      <title>
        {layout ? "التبرع بالدم" : "تسجيل متبرع"}
      </title>
    </Helmet>
    <div className='container m-auto'>
      {!layout ? <div>
        <Header title="دمك حياة لغيرك"
          verse={true}
          word="وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعاً"
          paragraph="اشترك الان وكن جزء من عمل عظيم.. تبرعك ينقذ حياة الأخرين و يعود علي صحتك بالنفع .. تبرع كل 3 شهور بدمك وحث غيرك علي العطاء"
          image={giving} setLayout={setLayout} type="المتبرعين" isForm={isForm} />
        <Title img1={car}
          title="قائمة المحتاجين للدم"
          img2={heart} />
        <div className='grid grid-cols-4 gap-6  my-5 px-10'>
          <div className='md:col-span-1 col-span-4'>
            <h2 className='text-2xl text-secondary'>بحث</h2>
            <SearchSide />
          </div>
          <div className='grid grid-cols-3 gap-3 md:col-span-3 col-span-4'>
            <PersonCard type="patient" list={patientsList} />
          </div>
        </div>

      </div> : <Grid form={<DonationForm type="patient" setLayout={setLayout} />} isImage={true} dir="rtl" media={donate} />}
    </div>
  </>


}

export default BloodDonation