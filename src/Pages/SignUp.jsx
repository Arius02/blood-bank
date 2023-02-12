import React from 'react'
import { Helmet } from 'react-helmet'
import { SignForm } from '../Components'

const SignUp = () => {
  return <>
      <Helmet>
      <title>
      تسجيل حساب
      </title>
    </Helmet>
    <div className='my-10 container mx-auto'>
      <SignForm signUp={true}/>
    </div>
  </>
  
}

export default SignUp