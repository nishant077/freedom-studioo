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
            <p className='text-sm sm:text-base opacity-60 mb-6'>
            Freedom Studio is a civic media agency that partners with movements, organizations and businesses worldwide to craft strategic, creative, and digital solutions for impactful change. 
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <p className='text-sm font-droid mb-2'>Our three Foundational Principles </p>
                <ul className='text-sm opacity-60 space-y-1'>
                  <li>• Healing-Centered Practice</li>
                   <p>We design processes that center emotional well-being and collective healing practices in the organizations we work with.</p>
                  <li>• Participatory Research </li>
                  <p>
                  We treat knowledge as co-created. Our insights come from collaboration with communities, movements, and people closest to the issues — not just traditional institutions.
                  </p>
                  <li>• Cultural Relevance  </li>
                  <p>
                  We create with context. From visual aesthetics to campaign tone, our work resonates because it is rooted in place, history, and community.
                  </p>
                </ul>
              </div>
              
              {/* <div className='space-y-4'>
              <p className='text-sm font-droid mb-2'>Our Values </p>
                <p className='text-sm opacity-60'>
                   At Freedom Studio, our values are rooted in the belief that creativity, innovation, and collective leadership can transform the world. They guide how we show up for our clients, collaborators, communities, and the causes we care about. 
                </p>
                <ul className='text-sm opacity-60 space-y-1'>
                  <li>• Bold Vision </li>
                   <p>We dream big and act boldly. We back visionary ideas with long-term commitment, knowing transformative change requires creativity, courage, and persistence.</p>

                  <li>• Leadership with Trust </li>
                  <p>
                  We believe in the power of people. By fostering an environment of trust, we empower and invite creative individuals from diverse backgrounds to lead and innovate.
                  </p>

                  <li>• Impact with Purpose   </li>
                  <p>
                  We are committed to making a sustainable difference. Our work is informed by ongoing reflection, learning, and deep partnership with the clients and communities we serve.
                  </p> 

                  <li>• Integrity in Action    </li>
                  <p>
                  We lead with honesty, uphold high ethical standards, and take full responsibility for our actions and commitments.
                  </p>

                  <li>• Respect for All Voices     </li>
                  <p>
                  We honor the dignity of every person. We listen deeply, value lived experience, and ensure our spaces are inclusive and collaborative.
                  </p>

                </ul>
              </div> */}
            </div>
          </div>
        </div>
        
    
        <div className='flex justify-center mt-5 lg:mt-12 mb-12'>
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