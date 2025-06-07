import React from 'react'
import Navbar from '../Navigation/Navbar'
import team from '../assets/Gallery13.jpeg'
import { IoArrowDownOutline } from "react-icons/io5";
import Team from './Team';
import Partners from './Partners';
import Footer from '../component/Footer';
import AboutGallery from './AboutGallery';

const About = () => {
  return (
    <>
      <div className='bg-black min-h-screen'>
        <Navbar/>
        
     
        <div className='flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-28 px-4 lg:px-10 gap-8'>
       
          <div className='w-full lg:w-[60%] xl:w-[50%] 2xl:w-[40%] relative'>
            <img 
              src={team} 
              className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] xl:h-[500px] object-cover rounded-lg lg:rounded-[2vw]'
              alt='Freedom Studio Team'
            />
            
          
            <div className='lg:hidden absolute top-4 left-4'>
              <h1 className='font-droid text-4xl sm:text-5xl text-white'>
                AB<span className='text-[#9a1d20]'>O</span>UT
              </h1>
            </div>
          </div>
          
       
          <div className='w-full lg:w-[40%] xl:w-[50%] 2xl:w-[60%] text-white'>
        
            <div className='hidden lg:block'>
              <h1 className='font-droid text-5xl xl:text-6xl 2xl:text-7xl text-white mb-6'>
                AB<span className='text-[#9a1d20]'>O</span>UT
              </h1>
            </div>
            
            <p className='text-sm sm:text-base opacity-60 mb-6'>
              At Freedom Studio, we believe in the transformative power of creativity to challenge injustices, amplify marginalized voices, and drive meaningful social change. Our initiative is built on the foundation that freedom thrives through creative actions and fostering resilience.
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <p className='text-sm font-droid mb-2'>We operate through two entities:</p>
                <ul className='text-sm opacity-60 space-y-1'>
                  <li>• Freedom Studio International</li>
                  <li>• Freedom Studio Nepal</li>
                </ul>
              </div>
              
              <div className='space-y-4'>
                <p className='text-sm opacity-60'>
                  <span className='font-medium'>Freedom Studio International:</span> A creative enterprise that provides digital solutions for social organizations and movements worldwide, specializing in strategic planning, campaign design, multimedia production, data visualization, and IT innovation.
                </p>
                
                <p className='text-sm opacity-60'>
                  <span className='font-medium'>Freedom Studio Nepal:</span> A grassroots movement that strengthens marginalized communities through nonviolent resistance, leadership development, artivism, and digital mobilization.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Down Arrow */}
        <div className='flex justify-center mt-8 lg:mt-12 mb-12'>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-white border-2 cursor-pointer animate-bounce">
            <IoArrowDownOutline color="white" size={24} />
          </div>
        </div>
      </div>
      
      <AboutGallery/>
      <Team/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default About