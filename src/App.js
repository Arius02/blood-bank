import React,{ useEffect, Suspense,lazy } from "react"
import { HashRouter, Route, Routes,  } from 'react-router-dom';

import { useDispatch} from 'react-redux';
import { Footer, Navbar,  Spinner } from './Components';
import { ToastContainer } from 'react-toastify';
import {  stayLogged } from './Store/userReducer'
const App= ()=> {
  //this is not the best way for lazy loading ofcourse but this is my first time doing this :)
  const HomeLazy = lazy(() => import("./Pages/Home"))
  const BloodDonationLazy = lazy(() => import("./Pages/BloodDonation") )
  const CampaingsLazy = lazy(() => import("./Pages/Campaings")  )
  const DonationFormLazy = lazy(() => import("./Components/DonationForm"))
  const ContactUsLazy = lazy(() => import("./Pages/ContactUs"))
  const PersonDetialsLazy = lazy(() => import("./Pages/MedicalInfo"))
  const MedicalInfoLazy = lazy(() => import("./Pages/MedicalInfo"))
  const SearchForDonorLazy = lazy(() => import("./Pages/SearchForDonor"))
  const NotFoundLazy = lazy(() => import("./Pages/NotFound"))
  const SignInLazy = lazy(() => import("./Pages/SignIn"))
  const SignUpLazy = lazy(() => import("./Pages/SignUp"))
  const SupportLazy = lazy(() => import("./Pages/Support") )
  const AboutUsLazy = lazy(() => import("./Pages/AboutUs") )
  const Dispatch = useDispatch()
  const user = localStorage.getItem("user")
useEffect(() => {
  if (user) {
    Dispatch(stayLogged())
  }
}, [])
 return <HashRouter>
      <Navbar  />
      <Routes>
     <Route path="/" element={
     <Suspense fallback={<Spinner/>}>
      <HomeLazy/>
     </Suspense>} />
        <Route path="/blood-donation" element={
       <Suspense fallback={<Spinner />}>
         <BloodDonationLazy />
       </Suspense>
        } />
       <Route path="/donation-form" element={
       <Suspense fallback={<Spinner />}>
         <DonationFormLazy />
       </Suspense>
       }/>
        <Route path="/search-for-donor" element={
       <Suspense fallback={<Spinner />}>
         <SearchForDonorLazy />
       </Suspense>
        } />
        <Route path="about-us" element={
          <Suspense fallback={<Spinner />}>
         <AboutUsLazy />
       </Suspense>
      } />
        <Route path="/contact-us" element={
       <Suspense fallback={<Spinner />}>
         <ContactUsLazy />
       </Suspense>
      } />
        <Route path="/campaings" element={
       <Suspense fallback={<Spinner />}>
         <CampaingsLazy />
       </Suspense>
         } />
        <Route path="/medical-info" element={
       <Suspense fallback={<Spinner />}>
         <MedicalInfoLazy />
       </Suspense>
      } />
        <Route path="/support" element={
       <Suspense fallback={<Spinner />}>
         <SupportLazy />
       </Suspense>
        } />
        <Route path="search-for-donor/:donor-details/:id" element={
       <Suspense fallback={<Spinner />}>
         <PersonDetialsLazy />
       </Suspense>
        } />
        <Route path="/blood-donation/:patient-details/:id" element={
       <Suspense fallback={<Spinner />}>
         <PersonDetialsLazy />
       </Suspense>
        } />
        <Route path="/signup" element={
       <Suspense fallback={<Spinner />}>
         <SignUpLazy />
       </Suspense>
        } />
        <Route path="/Signin" element={
       <Suspense fallback={<Spinner />}>
         <SignInLazy />
       </Suspense>
        } />
        <Route path="*" element={
       <Suspense fallback={<Spinner />}>
         <NotFoundLazy />
       </Suspense>
        } /> 
      </Routes>
      <ToastContainer position="top-center" />
      <Footer />
    </HashRouter>

}


export default App;
