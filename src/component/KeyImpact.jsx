import {React,useRef} from 'react'
import { motion,useInView } from 'framer-motion';
import clientlogo from '../assets/Clients.png';
import projectlogo from '../assets/Projects.png';
import capture from '../assets/Content Produced.png';
import countryReached from '../assets/Countries.png';
import CountUp from 'react-countup';

const KeyImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <>
     <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className='bg-black w-full min-h-screen px-5 py-2 mt-1'
    >
     <div className='text-white mt-20 px-5 md:px-10 lg:px-20'>
      <h2 className='text-center text-3xl md:text-4xl font-bold'>Our Impact</h2>

      {/* Impact Box */}
       <div className='px-5 md:px-20 py-10 mt-5 rounded-lg'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 text-center relative'>

           {/* Plus sign lines */}
           <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-white"></div>
           <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-white"></div>
           
           
           <div className="md:hidden absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-white"></div>
           <div className="md:hidden absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-white"></div>

           
           <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-white">
             <span className="text-white text-xl font-bold">FS</span>
           </div>

           {/* FS Text - Mobile (centered between the two horizontal lines) */}
           <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-white">
             <span className="text-white text-xl font-bold">FS</span>
           </div>

           {/* Left Top */}
          <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='flex flex-col items-center pb-6 md:pb-0'
    >
      <img src={clientlogo} className='w-44 h-40 object-cover' alt='Clients' />
      <span className='text-xl md:text-2xl font-semibold'>
        {isInView && <CountUp start={0} end={20} duration={3} />}
        <span className="text-white">+</span> Clients
      </span>
    </motion.div>

          {/* Right Top */}
          <motion.div
           initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
           className='flex flex-col items-center pb-6 md:pb-0'>
            <img src={projectlogo} className='w-44 h-40 object-cover' alt='Projects' />
            <span className='text-xl md:text-2xl font-semibold'>
           {isInView && <CountUp start={0} end={25} duration={3}/>}<span className="text-white">+</span> Projects</span>
          </motion.div> 

           {/* Left Bottom */}
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='flex flex-col items-center pt-6 md:pt-0'>
            <img src={capture} className='w-44 h-40 object-cover' alt='Content Produced' />
            <span className='text-xl md:text-2xl font-semibold'> 
            {isInView &&<CountUp start={0} end={250} duration={3}/>}<span className="text-white">+</span> Content Produced
              </span>
          </motion.div>
           {/* Right Bottom */}
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className='flex flex-col items-center pb-6 md:pb-0'>
            <img src={countryReached} className='w-44 h-40 object-cover' alt='Countries Reached' />
            <span className='text-xl md:text-2xl font-semibold'>
           {isInView && <CountUp start={0} end={35} duration={3}/>}<span className="text-white">+</span> Countries Reached</span>
          </motion.div>
        </div>
       </div>
     </div>
     </motion.div>
     <div className="px-24 py-10 text-center ">
         <p className="text-white text-lg">Freedom Studio isn't just about creative work-it's about results. We partner with<br></br> forward-thinking organization to produce work that isn't just cool, but makes a tangible difference.</p>
     </div>
    </>
  )
}

export default KeyImpact