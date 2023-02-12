import React from 'react'
import { Camp, NewsLetter, Title } from '../Components'
import car from "../img/car.png"
import bag from "../img/bag.png"
import { Helmet } from 'react-helmet'

const Campaings = () => {
 

  return <>
        <Helmet>
      <title>
      القوافل الطبية
      </title>
    </Helmet>
    <div className='my-7 px-10 container mx-auto '>
      <Title img1={car} title="قوافلنا الطبية" img2={bag} />
      <Camp />
      <NewsLetter title="اشترك معنا الآن ليصلك خط سير قوافلنا الأسبوعية:" />
    </div>
  </>
}

export default Campaings