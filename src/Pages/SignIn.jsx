import React from 'react'
import { Helmet } from 'react-helmet'
import { SignForm } from '../Components'

const SignIn = () => {
  return <>
    <Helmet>
      <title>
      تسجيل الدخول
      </title>
    </Helmet>
    <div className='my-5 h-screen flex items-center container mx-auto'>
      <SignForm signUp= {false}/>
    </div>
  </>
  
}

export default SignIn