import React from 'react'
import Navbar from '../Navigation/Navbar'
import logo from '../assets/logo.PNG'
import team from '../assets/team.JPG'
import { HiArrowUpRight } from "react-icons/hi2";
import freedom1 from '../assets/freedom1.png'
import freedom2 from '../assets/freedom2.jpg'
import Team from './Team';
import Partners from './Partners';
import FeedbackForm from './FeedbackForm';
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
      <div className='bg-black text-white w-full py-7 md:py-10 px-4 md:px-20'>
        <div className='flex  justify-between'>
          <div>
            <img src={logo} className='w-32 h-20 md:w-60 md:h-44 object-cover absolute top-0'/>
          </div> 
          <div className='mt-4 md:mt-16'>
            <h2 className='text-2xl md:text-6xl'>
              About
            </h2>
          </div>
          <div>
            <Navbar/>
          </div>
        </div>
      </div>
      <hr className='text-white'/>
      
      <div className='w-full h-auto bg-black py-10 md:py-20 px-4 md:px-10'>
        <div className='md:mt-5 mt-2'>
          <h3 className='text-2xl md:text-5xl text-center text-white'>Introduction</h3>
        </div>
        <p className='text-justify text-white text-sm md:text-lg font-light mt-5 md:mt-10 px-2 md:px-36'>
          ​At Freedom Studio, we believe in the transformative power of creativity to challenge injustices, amplify marginalized voices, and drive meaningful social change. Our initiative is built on the foundation that freedom thrives through creative actions and fostering resilience. We operate through two entities:
          <br/><br/>
          Freedom Studio International: A creative enterprise that provides digital solutions for social organizations and movements worldwide, specializing in strategic planning, campaign design, multimedia production, data visualization, and IT innovation.  
          <br/><br/>
          Freedom Studio Nepal: A grassroots movement that strengthens marginalized communities through nonviolent resistance, leadership development, artivism, and digital mobilization.
          ​<br/><br/>
          Together, we cultivate movements, build leadership, and co-create impactful solutions with activists, social organizations, and global networks—ensuring that those who fight for freedom and justice have the tools, strategy, and voice to make a difference.
        </p>
      </div>
      
      <hr/>
      
      <div className='w-full h-auto bg-black py-10 md:py-14 px-4 md:px-10 relative'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-white font-bold mt-10 md:mt-80 flex'>
            <div>
              <p className='font-thin text-xs md:text-sm'>We fosters leadership, strengthens activism,<br/> and provides cutting-edge creative solutions</p>
              <h1 className='text-4xl md:text-6xl mt-3 md:mt-5'>We Are</h1>
              <h1 className='text-4xl md:text-6xl'>Freedom Studio.</h1>
            </div>
            <div className='mt-10 md:mt-20 hidden md:block'>
              <HiArrowUpRight size={60} className='bg-[#9a1d20]' />
            </div>
          </div>
          
          <div className='flex gap-2 md:gap-4 order-first md:order-last'>
            <img src={freedom1} className='w-16 h-32 md:w-40 md:h-80 object-cover bg-black opacity-50'/>
            <img src={team} className='w-40 h-32 md:w-80 md:h-72 mt-8 md:mt-16 object-cover'/> 
            <img src={freedom2} className='w-16 h-32 md:w-40 md:h-80 object-cover bg-black opacity-50'/>
          </div>
        </div>
      </div>
      
      <div className='bg-[#9A1D20] w-full h-10 text-white'></div>
      <Team/>
      <Partners/>
      <FeedbackForm/>
      <Footer/>
    </>
  )
}

export default About