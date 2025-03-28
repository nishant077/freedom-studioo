import React from 'react';
import img1 from '../assets/workimg1.jpg';
import img2 from '../assets/workimg2.jpg';
import img3 from '../assets/workimg3.jpg';
import img4 from '../assets/workimg4.jpg';
import img5 from '../assets/workimg5.jpg';
import img6 from '../assets/workimg6.jpg';
import img7 from '../assets/workimg7.jpg';
import { motion } from "framer-motion";

const images = [img1, img2, img3, img4, img5, img6, img7];

const OurWork = () => {
  return (
    <>
      <div className='bg-[#9A1D20] w-full h-10'></div>
      <div className='bg-black w-full h-auto py-10 px-4'>
        <h2 className='text-4xl text-white font-bold text-center mt-10'>
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
              <img key={index} src={img} className='w-56 h-56 object-cover' />
            ))}
          </motion.div>
        </div>
        <h2 className='text-center text-4xl font-semibold my-20 max-w-2xl mx-auto text-white'>
          I am a frontend developer. I am using react js to make project i.e
          Freedom<span className='text-[#9a1d20]'>Studio</span>
        </h2>
      </div>
    </>
  );
};

export default OurWork;
