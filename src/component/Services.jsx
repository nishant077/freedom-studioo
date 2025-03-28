import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import services from '../assets/services.jpg';

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='mt-10 max-h-full px-5'
    >
      <h2 className='text-center text-3xl font-semibold font-sans'>Our Services</h2>
      
      <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-10'>
        <motion.img 
          src={services} 
          className='w-full md:w-1/4 h-auto rounded-lg shadow-lg' 
          alt='Services' 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <div className='text-lg md:text-2xl space-y-6 w-full md:w-1/2'>
          {['Institution Building', 'Branding & Digital Strategy', 'Web & Digital Solution', 'Creative Production & Storytelling'].map((service, index) => (
            <motion.div 
              key={index} 
              className='flex justify-between items-center border-b border-gray-400 pb-2'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className='font-medium'>{service}</span>
              <FaArrowRight className='text-gray-600' />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;