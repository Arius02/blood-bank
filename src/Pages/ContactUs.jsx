import React from 'react'
import { Helmet } from 'react-helmet'
import { ContactForm, Grid, Title } from '../Components'
import bag from "../img/bag.png"
import contact from "../img/Contact.png"

const ContactUs = () => {
  return <>
        <Helmet>
      <title>
        تواصل معنا
      </title>
    </Helmet>
  <div className='container m-auto px-10]'>
    <Title img1={bag} title="تواصل معنا الان"/>

<Grid form={<ContactForm/>} media={contact} addition={{borderRadius: true}} dir="ltr" isImage={true}/>
  </div>
  </>
}

export default ContactUs 