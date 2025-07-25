import React from 'react'
import Navbar from './Navbar';
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from './Footer'

const Careers = () => {
  return (
    <div className='bg-[#EFE2D9]'>
        {/* Navbar start */}
        <Navbar/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default Careers