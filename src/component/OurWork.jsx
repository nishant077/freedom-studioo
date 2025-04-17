// import React from 'react';
// import img1 from '../assets/workimg1.jpg';
// import img2 from '../assets/workimg2.jpg';
// import img3 from '../assets/workimg3.jpg';
// import img4 from '../assets/workimg4.jpg';
// import img5 from '../assets/workimg5.jpg';
// import img6 from '../assets/workimg6.jpg';
// import img7 from '../assets/workimg7.jpg';
// import { motion } from "framer-motion";
// import clientlogo from '../assets/clientlogo.JPG';
// import projectlogo from '../assets/projectlogo.JPG';
// import capture from '../assets/capture1.JPG';
// import countryReached from '../assets/countryReached.JPG';

// const images = [img1, img2, img3, img4, img5, img6, img7];

// const OurWork = () => {
//   return (
//     <>
//       {/* <div className='bg-[#9A1D20] w-full h-10'></div> */}
//       <div className='bg-black w-full h-auto py-10 px-4'>
//       <div className='text-white mt-20 px-5 md:px-10 lg:px-20'>
//   <h2 className='text-center text-3xl md:text-4xl font-bold'>Key Impact</h2>

//   {/* Impact Box */}
//   <div className='bg-[#1D1D1D] px-5 md:px-20 py-10 mt-5 rounded-lg'>
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-center relative'>

//       {/* Left Top */}
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className='flex flex-col items-center md:border-r-2 border-white pb-6 md:pb-0'
//       >
//         <img src={clientlogo} className='w-26 h-20' alt='Clients' />
//         <span className='text-xl md:text-2xl font-semibold mt-3'>
//           {isInView && <CountUp start={0} end={20} duration={3} />}
//           + Clients
//         </span>
//         <hr className='border-white border w-64 mt-5' />
//       </motion.div>

//       {/* Right Top */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//         className='flex flex-col items-center border-b-2 border-white lg:ml-28 pb-6 w-64 md:pb-0'
//       >
//         <img src={projectlogo} className='w-26 h-20' alt='Projects' />
//         <span className='text-xl md:text-2xl font-semibold mt-3'>
//           {isInView && <CountUp start={0} end={25} duration={3}/>}+ Projects
//         </span>
//       </motion.div>

//       {/* Left Bottom */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
//         className='flex flex-col items-center md:border-r-2 border-white pt-6 md:pt-0'
//       >
//         <img src={capture} className='w-26 h-20' alt='Content Produced' />
//         <span className='text-xl md:text-2xl font-semibold mt-3'> 
//           {isInView && <CountUp start={0} end={250} duration={3}/>}+ Content Produced
//         </span>
//       </motion.div>

//       {/* Right Bottom */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
//         className='flex flex-col items-center pt-6 md:pt-0'
//       >
//         <img src={countryReached} className='w-26 h-20' alt='Countries Reached' />
//         <span className='text-xl md:text-2xl font-semibold mt-3'>
//           {isInView && <CountUp start={0} end={35} duration={3}/>}+ Countries Reached
//         </span>
//       </motion.div>
//     </div>
//   </div>
// </div>
//         <h2 className='text-4xl text-white font-bold text-center mt-10'>
//           Our Work
//         </h2>
//         <div className='overflow-hidden w-full flex justify-center mt-10'>
//           <motion.div
//             className='flex gap-8'
//             initial={{ x: 0 }}
//             animate={{ x: "-100%" }}
//             transition={{
//               repeat: Infinity,
//               duration: 10,
//               ease: "linear"
//             }}
//           >
//             {[...images, ...images].map((img, index) => (
//               <img key={index} src={img} className='w-56 h-56 object-cover' />
//             ))}
//           </motion.div>
//         </div>
//         <h2 className='text-center text-3xl font-semibold my-14 max-w-lg mx-auto text-white'>
//         An initiative where freedom thrives through creative actions and <span className='text-[#9a1d20]'>resilience</span>
//         </h2>
//       </div>
//     </>
//   );
// };

// export default OurWork;

import {React,useRef} from 'react';
import img1 from '../assets/workimg1.jpg';
import img2 from '../assets/workimg2.jpg';
import img3 from '../assets/workimg3.jpg';
import img4 from '../assets/workimg4.jpg';
import img5 from '../assets/workimg5.jpg';
import img6 from '../assets/workimg6.jpg';
import img7 from '../assets/workimg7.jpg';
import { motion } from "framer-motion";
import KeyImpact from './KeyImpact';



const images = [img1, img2, img3, img4, img5, img6, img7];

const OurWork = () => {

  return (
    <>
      <div className='bg-black w-full h-auto py-5 px-4'>
           <KeyImpact/>
        <h2 className='text-4xl text-white font-bold text-center'>
          Our Work
        </h2>
        <div className='overflow-hidden w-full flex justify-center mt-10'>
          <motion.div
            className='flex gap-8'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}
          >
            {[...images, ...images].map((img, index) => (
              <img key={index} src={img} className='w-56 h-56 object-cover' alt="Our work" />
            ))}
          </motion.div>
        </div>
        <h2 className='text-center text-3xl font-semibold my-14 max-w-lg mx-auto text-white'>
          An initiative where freedom thrives through creative actions and <span className='text-[#9a1d20]'>resilience</span>
        </h2>
      </div>
    </>
  );
};

export default OurWork;
