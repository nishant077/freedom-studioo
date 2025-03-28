import {React,useRef} from 'react';
import { motion,useInView } from 'framer-motion';
import women1 from '../assets/women1.jpg';
import women2 from '../assets/women2.jpg';
import women3 from '../assets/women3.jpg';
import women4 from '../assets/women4.jpg';
import clientlogo from '../assets/clientlogo.JPG';
import projectlogo from '../assets/projectlogo.JPG';
import capture from '../assets/capture1.JPG';
import countryReached from '../assets/countryReached.JPG';
import CountUp from 'react-countup';


const cardArray = [
  {
    image: women1,
    title: 'Activism Fellowship',
    description: 'Emerging artists and activists around Nepal'
  },
  {
    image: women2,
    title: 'Activism Fellowship',
    description: 'Emerging artists and activists around Nepal'
  },
  {
    image: women3,
    title: 'Activism Fellowship',
    description: 'Emerging artists and activists around Nepal'
  },
  {
    image: women4,
    title: 'Activism Fellowship',
    description: 'Emerging artists and activists around Nepal'
  }
];

const Designed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className='bg-black w-full min-h-screen px-5 py-10 mt-1'
    >
      <h2 className='text-4xl text-white font-bold text-center'>We Designed</h2>
      <div className='mt-12 flex flex-wrap justify-center gap-8'>
        {cardArray.map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='bg-[#9a1d20] rounded-lg shadow-lg w-72 h-80 p-5 flex flex-col items-center transform hover:scale-105 transition-all duration-300'
          >
            <img src={card.image} className='w-full h-40 object-cover rounded-md' alt='Activism' />
            <h3 className='text-white text-xl font-semibold text-center mt-4'>{card.title}</h3>
            <p className='text-sm text-white font-light text-center mt-3'>{card.description}</p>
          </motion.div>
        ))}
      </div>
      {/* <div className='text-3xl text-white mt-20'>
         <h2 className='text-center'>Key Impact</h2>
         <div className='bg-[#1D1D1D] px-10 py-5 mt-5'>
         <div className='flex justify-center mt-5'>
          <div className='flex  gap-36'>
            <div>
          <img src={clientlogo}/>
          <span className='text-xl'>20+ Client</span>
          </div>
           <div>
          <img src={projectlogo}/>
          <span className='text-xl'>25+ Projects</span>
          </div>
          </div>
         </div>
         <div className='flex justify-center mt-5'>
         <div className='flex gap-20'>
          <div>
         <img src={capture} className='w-36 h-32 object-cover'/>
         <span className='text-xl'>250+ Content Produced</span>
         </div>
         <div>
         <img src={countryReached}  className='w-36 h-32 object-cover' />
         <span className='text-xl'>35+ Countries Reached</span>
         </div>
         </div>
         </div>
         </div>
     </div> */}
    <div className='text-white mt-20 px-5 md:px-10 lg:px-20'>
      <h2 className='text-center text-3xl md:text-4xl font-bold'>Key Impact</h2>

      {/* Impact Box */}
      <div className='bg-[#1D1D1D] px-5 md:px-20 py-10 mt-5 rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-center relative'>

          {/* Left Top */}
          <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='flex flex-col items-center md:border-r-2 border-white pb-6 md:pb-0'
    >
      <img src={clientlogo} className='w-26 h-20' alt='Clients' />
      <span className='text-xl md:text-2xl font-semibold mt-3'>
        {isInView && <CountUp start={0} end={20} duration={3} />}
        + Clients
      </span>
      <hr className='border-white border w-64 mt-5' />
    </motion.div>

          {/* Right Top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
           className='flex flex-col items-center border-b-2 border-white lg:ml-28 pb-6 w-64 md:pb-0 '>
            <img src={projectlogo} className='w-26 h-20' alt='Projects' />
            <span className='text-xl md:text-2xl font-semibold mt-3'>
           {isInView && <CountUp start={0} end={25} duration={3}/>}+ Projects</span>
          </motion.div>

          {/* Left Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='flex flex-col items-center md:border-r-2 border-white pt-6 md:pt-0'>
            <img src={capture} className='w-26 h-20' alt='Content Produced' />
            <span className='text-xl md:text-2xl font-semibold mt-3'> 
            {isInView &&<CountUp start={0} end={250} duration={3}/>}+ Content Produced
              </span>
          </motion.div>

          {/* Right Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className='flex flex-col items-center pt-6 md:pt-0'>
            <img src={countryReached} className='w-26 h-20' alt='Countries Reached' />
            <span className='text-xl md:text-2xl font-semibold mt-3'>
           {isInView && <CountUp start={0} end={35} duration={3}/>}+ Countries Reached</span>
          </motion.div>

          {/* Center FS text (optional if needed) */}
          {/* <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xs md:text-sm'>FS</span> */}
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Designed;
