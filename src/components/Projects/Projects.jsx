import React from 'react'
import Navbar from './Navbar';
import Section1 from './Section1'
import Section6 from '../LandingPage/Section6'
import Section9 from '../LandingPage/Section9'
import Section3 from './Section3'
import Footer from './Footer'




const AboutUs = () => {
  return (
    <div className='bg-[#EFE2D9]'>
        {/* Navbar start */}
        <Navbar/>
        <Section1/>
        <Section6/>
        <Section3/>
        <Section9/>
        <Footer/>

    </div>
  )
}

export default AboutUs