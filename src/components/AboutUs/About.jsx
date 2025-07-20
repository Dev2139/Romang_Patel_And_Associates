import React from 'react'
import Navbar from './Navbar';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section7 from './Section7'
import Footer from './Footer'




const AboutUs = () => {
  return (
    <div className='bg-[#EFE2D9]'>
        {/* Navbar start */}
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section7/>
        <Footer/>

    </div>
  )
}

export default AboutUs