import React, { useRef } from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/gallery1.jpeg';
import img2 from '../assets/gallery2.jpeg';
import img3 from '../assets/Gallery4.jpeg';
import img4 from '../assets/Gallery5.jpeg';
import img5 from '../assets/Gallery6.jpeg';
import img6 from '../assets/Gallery7.jpeg';
import img7 from '../assets/Gallery8.jpeg';
import img8 from '../assets/Gallery11.jpeg';
import img9 from '../assets/Gallery12.jpeg';
import img10 from '../assets/Gallery13.jpeg';
import img11 from '../assets/Gallery14.jpeg';
import img12 from '../assets/Gallery15.jpeg';
import img13 from '../assets/Gallery16.jpeg';
import img14 from '../assets/Gallery17.jpeg';
import img15 from '../assets/Gallery20.jpeg';
import img16 from '../assets/Gallery21.jpeg';
import img17 from '../assets/Gallery24.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
                img11, img12, img13, img14, img15, img16, img17];

const OurWork = () => {
  const containerRef = useRef(null);
  const duplicatedImages = [...images, ...images, ...images]; // Triple for seamless loop

  return (
    <div className='bg-black w-full h-auto py-10 px-4 md:px-10'>
      <h2 className='md:text-4xl text-3xl text-white font-droid text-center mb-16'>
        Gallery
      </h2>
      
      {/* Gallery Container */}
      <div 
        ref={containerRef}
        className='relative w-full overflow-hidden py-5'
      >
        {/* Gradient overlays */}
        <div className='absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10' />
        <div className='absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10' />
        
        {/* Motion Container */}
        <motion.div
          className='flex gap-4 md:gap-6' // Reduced gap for more images
          initial={{ x: 0 }}
          animate={{ 
            x: ['0%', `-${(images.length * 100) / 3}%`] // Adjusted for triple array
          }}
          transition={{
            repeat: Infinity,
            duration: 80, 
            ease: "linear",
          }}
        >
          {duplicatedImages.map((img, index) => (
            <motion.div
              key={`gallery-img-${index}`}
              className='flex-shrink-0'
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
            >
              <img 
                src={img} 
                className='w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-lg' // Slightly smaller
                alt="Gallery image" 
                loading="lazy" // Lazy loading for performance
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <p className='text-center text-xl md:text-2xl my-16 max-w-3xl mx-auto text-white'>
        An initiative where freedom thrives through creative actions and <span className='text-[#9a1d20] font-semibold'>resilience</span>
      </p>
    </div>
  );
};

export default OurWork;