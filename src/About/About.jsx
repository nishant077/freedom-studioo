import React from 'react'
import Navbar from '../Navigation/Navbar'
import team from '../assets/Gallery13.jpeg'
import { IoArrowDownOutline  } from "react-icons/io5";
import Team from './Team';
import Partners from './Partners';
import FeedbackForm from './FeedbackForm';
import Footer from '../component/Footer';
import AboutGallery from './AboutGallery';

const About = () => {
  return (
    <>
      {/* <div className='bg-[#4a4a4a] text-white w-full h-screen'>
        <div className='py-7 px-4 '>
          <div className='mt-4 md:mt-16 text-center'>
            <h2 className='text-2xl font-droid md:text-5xl'>
              About
            </h2>
          </div>
          <div>
            <Navbar/>
          </div>
     
      </div>
      <hr className='text-black'/>
      
      <div className='w-full h-auto bg-[#4a4a4a] py-10 md:py-20 px-4 md:px-10'>
        <div className='md:mt-5 mt-2'>
          <h3 className='text-3xl md:text-4xl font-droid text-center text-white'>Introduction</h3>
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
      
      
      {/* <div className='w-full h-auto bg-black py-10 md:py-14 px-4 md:px-10 relative'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-white font-bold mt-10 md:mt-80 flex'>
            <div>
              <p className='font-thin text-xs md:text-sm'>We fosters leadership, strengthens activism,<br/> and provides cutting-edge creative solutions</p>
              <h1 className='text-3xl font-droid md:text-5xl mt-3 md:mt-5'>We Are</h1>
              <h1 className='text-3xl font-droid md:text-5xl'>Freedom Studio.</h1>
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
        </div> */}
        {/* <div className='bg-[#9A1D20] w-full h-10 text-white'></div> */}
      
      {/* </div> */} 
      <div className='bg-black h-screen overflow-y-hidden'>
        <Navbar/>
        <div className='flex justify-center items-center pt-28 ml-10'>
          <img src={team} className='w-[900px] h-[500px] object-cover box-border rounded-[2vw] relative'/>
          <div className='absolute left-28'>
            <h1 className='font-droid text-7xl text-white'>AB<span className='text-[#9a1d20] font-droid'>O</span>UT</h1>
            <p className='text-xs text-white absolute w-40  mt-5 opacity-60'>
            ​At Freedom Studio, we believe in the transformative power of creativity to challenge injustices, amplify marginalized voices, and drive meaningful social change. Our initiative is built on the foundation that freedom thrives through creative actions and fostering resilience. 
            </p>
          </div>
        </div>
        <div className='flex justify-around text-white mt-5 text-xs opacity-60'>
          <div className='space-y-1'>
           <p className='text-sm font-droid'> We operate through two entities:</p>
           <ul className='space-y-1'>
            <li>Freedom Studio International</li>
            <li>Freedom Studio Nepal</li>
           </ul>
          </div>
          <div>
            <p className='w-56'>Freedom Studio International: A creative enterprise that provides digital solutions for social organizations and movements worldwide, specializing in strategic planning, campaign design, multimedia production, data visualization, and IT innovation.</p>
          </div>
          <div>
              <p className='w-56'>Freedom Studio Nepal: A grassroots movement that strengthens marginalized communities through nonviolent resistance, leadership development, artivism, and digital mobilization. ​</p> 
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-white border-2 cursor-pointer">
            <IoArrowDownOutline color="white" size={24} />
          </div>
        </div>
      </div>
      <AboutGallery/>
      <Team/>
      <Partners/>
      <FeedbackForm/>
      <Footer/>
      
     
    </>
  )
}

export default About