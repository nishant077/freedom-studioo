import React from 'react'
import Dictory from '../Map/InteractiveMap/Dictory'
import FlipTheCard from '../Map/InteractiveMap/FlipTheCard'
import StrategyTactics from '../Map/InteractiveMap/StrategyTactics'
import UsefulLinks from '../Map/InteractiveMap/UsefulLinks'
import Testimonials from '../Map/InteractiveMap/Testimonials'
import Feedback from '../Map/InteractiveMap/Feedback'
import Footer from '../component/Footer'
import learning from '../assets/gallery1.jpeg'
import Navbar from '../Navigation/Navbar'
import gallery from '../assets/Gallery4.jpeg'
import { motion } from 'framer-motion';


const LearningCorner = () => {
  return (
    <>
     <div className='py-12 md:py-20 bg-black relative overflow-hidden'>
   
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-20 left-10 w-40 h-40 rounded-full bg-[#9a1d20] blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#9a1d20] blur-3xl'></div>
      </div>
      
      <Navbar/>
      
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-10 md:mt-20'>
          {/* Image Section - Order changes on mobile vs desktop */}
          <motion.div 
            className='lg:w-1/2 order-2 lg:order-1 w-full'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='relative rounded-xl overflow-hidden shadow-2xl hover:shadow-[#9a1d20]/30 transition-shadow duration-500'>
              <img 
                src={gallery} 
                className='w-full h-auto max-h-[400px] md:max-h-[500px] object-cover transform hover:scale-105 transition-transform duration-700' 
                alt="Learning Corner"
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent'></div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div 
            className='lg:w-1/2 order-1 lg:order-2 w-full'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='text-center lg:text-left'>
              <motion.h2 
                className='mt-5 mb-6 text-4xl md:text-5xl font-bold text-white'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className='bg-clip-text font-droid text-transparent text-white'>
                  LEARNING CORNER
                </span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className='text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose mx-auto lg:mx-0 max-w-2xl'>
                  Learning Corner is a peer-to-peer learning space where movement leaders sharpen their tactics, share stories, and build collective wisdom. Through online and in-person sessions.
                </p>
                
                <p className='mt-4 text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose mx-auto lg:mx-0 max-w-2xl'>
                Learning Corner explores practical strategies,
campaign design, and lived experiences, helping community and leaders
adapt, resist, and grow. In a world of shifting challenges, the Learning
Corner nurtures resilience, creativity, and cross-movement solidarity.
                </p>
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      <Dictory/>
       <div className='py-12 px-4 md:px-8 lg:px-32'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
              <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
                  <img src={learning} className='h-auto  w-full object-cover' alt="Learning Corner"/>
              </div>
              <div className='lg:w-1/2 order-1 lg:order-2'>
                  <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold'>MOVEMENT SUMMARY</h2>
                  <p className='opacity-80 text-justify  leading-relaxed'>
                  Learning Corner is both a physical and digital space for activists and
      social movement leaders to connect, exchange ideas, and learn tools
      and techniques for effective activism. It fosters cross movement
      solidarity and strengthens strategies of nonviolent resistance and
      creative civic expression at the grassroots level. By nurturing
      collaboration and continuous learning, we aim to deepen civic
      engagement across social, economic, political and cultural spheres. It
      empowers activists and changemakers with knowledge, skills, and
      tactics to hold power accountable, while also serving as a valuable
      resource for civic groups and media to co-create tools for civic
      engagement and community empowerment.
                  </p>
              </div>
          </div>
      </div>
      <FlipTheCard/>
<StrategyTactics/>
<UsefulLinks/>
<Testimonials/>
<Feedback/>
<Footer/>
    </>
  )
}

export default LearningCorner