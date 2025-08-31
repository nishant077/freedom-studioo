import React from 'react';
import { motion } from 'framer-motion';
import { fetchImage } from '../../../Api/ImageConfig';

const Sectionn2 = ({location}) => {
  const text = location.aboutDescription;
  const words = text.split(/(?=\s+)/);

  return (
    <div className="flex-wrap overflow-x-hidden py-8 px-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="border-t-[1px] border-zinc-300 mt-8 flex flex-wrap justify-evenly items-center">
        <div className="flex justify-center gap-4 md:gap-24 lg:gap-96 mt-5">
          <h3 className="border rounded-xl p-2 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Empowering Youth
          </h3>
          <h3 className="border rounded-xl p-2 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Environmental Action
          </h3>
          <h3 className="border rounded-xl p-2 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer">
            Community Development
          </h3>
        </div>
      </div> 
      
      <div>
        <h2 className='text-center flex-wrap text-xl md:text-3xl font-bold mt-10 mb-6'>
          {location.aboutTitle}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-5 md:px-10 px-5 w-full"
      >
        <div className="lg:grid grid-cols-2 flex-wrap md:gap-10 p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="flex justify-center"
          >
            <div className='container flex flex-col md:flex-row justify-stretch flex-wrap gap-4'>
              <img
                src={fetchImage(location.aboutImage1)}
                className="md:h-72 md:w-72 w-full h-64 object-cover border-4 border-white shadow-lg rounded-lg p-2"
                alt="Community gathering"
              />
              <img 
                src={fetchImage(location.aboutImage2)} 
                className="md:h-60 md:w-60 w-full h-52 object-cover md:mt-20 border-4 border-white shadow-lg rounded-lg p-2"
                alt="Team collaboration" 
              />
            </div>
          </motion.div>
          
          <div className="mt-8 md:mt-0">
            <h2 className='text-[#9a1d20] md:text-4xl text-2xl font-droid mb-6'>About</h2>
            <div className="mt-6 text-justify leading-relaxed paragraph-text">
              {words.map((word, index) => {
              
                if (word.trim() === '') {
                  return <span key={index} className="inline-block">{word}</span>;
                }
                
                return (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      ease: "backOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="font-normal md:text-lg text-[#343434] tracking-tight inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      
      <style jsx>{`
        .paragraph-text {
          line-height: 1.7;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .paragraph-text {
            font-size: 1rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </div>
  );
};

export default Sectionn2;