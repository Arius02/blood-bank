import React, { useState } from 'react'
import { donorsList } from '../utils/constansts'
import donateHand from "../img/donatehand.PNG"
import giving from "../img/img1.png"
import measure from "../img/measure.PNG"
import { Grid, Header, PersonCard, Title, SearchSide, DonationForm, DonateNow } from '../Components'
import { Helmet } from 'react-helmet'


const SearchForDonor = () => {
  const [layout, setLayout] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))
  let isForm = true
  if (user?.user_form && user?.user_form.type === "donor") {
    console.log(user, "is")
    donorsList.unshift(user.user_form)
  }
  if (user?.user_form) {
    isForm = false
  }
  return <>
    <Helmet>
      <title>
        {!layout ? "البحث عن متبرعين" : "طلب تبرع"}
      </title>
    </Helmet>
    <div className='container m-auto'>
      {!layout ? <div>
        <Header title="قال رسول الله صلي عليه وسلم:"
          word="مثلُ المؤمنين في تَوادِّهم ، وتَرَاحُمِهِم ، وتعاطُفِهِمْ . مثلُ الجسَدِ إذا اشتكَى منْهُ عضوٌ تدَاعَى لَهُ سائِرُ الجسَدِ بالسَّهَرِ والْحُمَّى."
          paragraph="إذا كنت مريض أو تعرف أحد يحتاج إلي الدم لا تترد في التسجيل وملئ بيانتك لتنضم إلى مبادراتنا التي تضم أكتر من مليون متبرع ومتلقي للدم في جميع أنحاء مصر"
          image={giving} setLayout={setLayout} type="المحتاجين للدم" isForm={isForm} />
        <Title img1={measure}
          title="قائمة المتقدمين للتبرع بالدم"
          img2={donateHand} />
        <div className='grid grid-cols-4 gap-6  my-5 px-10'>
          <div className='md:col-span-1 col-span-4'>
            <h2 className='text-2xl text-secondary'>بحث</h2>
            <SearchSide />
          </div>
          <div className='grid grid-cols-3 gap-3 md:col-span-3 col-span-4'>
            <PersonCard type="donor" list={donorsList} />
          </div>
        </div>
      </div> : <Grid form={<DonationForm type="donor" setLayout={setLayout} />} isImage={false} dir="ltr" media={<DonateNow />} />}
    </div>
  </>
}

export default SearchForDonor