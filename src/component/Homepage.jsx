import React from 'react';
import { motion } from 'framer-motion';
import homepageimg from '../assets/homepage.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import Services from './Services';
import Designed from './Designed';
import './Font.css';
import Footer from './Footer';
import OurWork from './OurWork';
// import logo from '../assets/FSN.PNG';

const Homepage = () => {
  const headline =" Freedom Studio is a creative initiative that empowers social movements and civic organizations through strategic nonviolent action and digital innovation. Through its non-profit and social entrepreneurial model, Freedom Studio fosters leadership, strengthens activism, and provides cutting-edge creative solutions to drive meaningful social change."
  
  const letters=headline.split(" ");
  
  return (
    <>
      <div className='relative h-screen'>
        <img src={homepageimg} className='w-full h-full object-cover' alt='Homepage' />
      </div>

       {/* <div className='flex justify-start absolute top-0 left-14  mt-6 md:mt-10'>
         <img src={logo} className='w-36 h-16'/>
      </div> */}
      {/* Navigation */}
      <div className='absolute top-0 right-8 text-white font-semibold mt-6 md:mt-10'>
        <ul className='cursor-pointer flex flex-col md:flex-col gap-2 text-lg'>
          <li className='flex gap-3'>Home <span className='mt-1'><GiHamburgerMenu /></span></li>
          <li>About</li>
          <li>Initiatives</li>
          <li>Movements</li>
          <li>Connect</li>
          <li>Map</li>
        </ul>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute bottom-24 text-white font-sans px-6 md:px-14 text-center md:text-left'>
        <h1 className='text-4xl md:text-6xl font-bold'>Where Art</h1>
        <hr className='mt-2 w-1/2 mx-auto md:mx-0'></hr>
        <h1 className='mt-2 text-4xl md:text-6xl font-bold'>Meets Activism</h1>
      </motion.div>

      {/* Red Section */}
      <div className='bg-[#9A1D20] w-full h-10'></div>

      {/* About Section */}
      <div className='section2 bg-black w-full py-16 px-6 md:px-24'>
        {/* <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='text-lg md:text-2xl text-white px-5'>
          Freedom Studio is a creative initiative that empowers social movements and civic organizations through strategic nonviolent action and digital innovation. Through its non-profit and social entrepreneurial model, Freedom Studio fosters leadership, strengthens activism, and provides cutting-edge creative solutions to drive meaningful social change.
        </motion.p> */}
        
        {letters.map((letter, index) => (
          <motion.p 
            key={index} 
            initial={{ filter:"blur(10px)", opacity: 0, y: 12 }} 
            whileInView={{ filter:"blur(0px)",opacity: 1, y: 0 }} 
            // animate={{ filter:"blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            viewport={{ once: false }}
            className='text-base md:text-2xl text-white inline-block  mr-1.5'
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.p>
        ))}


        <hr className='mt-8 w-3/4 mx-auto'></hr>
        <h2 className='font-semibold text-white text-center text-3xl md:text-4xl mt-10'>Interactive Map</h2>
      </div>

      <Services />
      <Designed />
      <OurWork/>
      <Footer/>
    </>
  );
};

export default Homepage;
