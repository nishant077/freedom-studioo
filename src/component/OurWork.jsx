import React, { useRef } from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/workimg1.jpg';
import img2 from '../assets/workimg2.jpg';
import img3 from '../assets/workimg3.jpg';
import img4 from '../assets/workimg4.jpg';
import img5 from '../assets/workimg5.jpg';
import img6 from '../assets/workimg6.jpg';
import img7 from '../assets/workimg7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const OurWork = () => {
  const containerRef = useRef(null);

  return (
    <>
    <div className='bg-black w-full h-auto py-10 px-4 md:px-10'>
      <h2 className='md:text-4xl text-3xl text-white font-droid text-center mb-16'>
       Gallery
      </h2>
      
      {/* Gallery Container */}
      <div 
        ref={containerRef}
        className='relative w-full overflow-hidden py-5'
      >
        {/* Gradient overlays for better UX */}
        <div className='absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10' />
        <div className='absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10' />
        
        {/* Motion Container */}
        <motion.div
          className='flex gap-6 md:gap-8'
          initial={{ x: 0 }}
          animate={{ x: ['0%', `-${(images.length * 100) / (images.length * 2)}%`] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, index) => (
            <motion.div
              key={`${index}-${img}`}
              className='flex-shrink-0'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={img} 
                className='w-56 h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-lg'
                alt="Our work" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <p className='text-center text-xl md:text-2xl my-16 max-w-3xl mx-auto text-white'>
        An initiative where freedom thrives through creative actions and <span className='text-[#9a1d20] font-semibold'>resilience</span>
      </p>
    </div>
    <div className='bg-[#9a1d20] w-full h-10'>
    </div>
    </>
  );
};

export default OurWork;