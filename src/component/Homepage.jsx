import {React, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Designed from './Designed';
import './Font.css';
import Footer from './Footer';
import OurWork from './OurWork';
import Tags from './Tags';
import Navbar from '../Navigation/Navbar';
import Homepagevideo from '../assets/EveryChild.mp4'
import logo from '../assets/logo.PNG'
import MapMain from '../Map/MapMain';

const Homepage = () => {
  const headline = "Freedom Studio is a creative initiative that empowers social movements and civic organizations through strategic nonviolent action and digital innovation. Through its non-profit and social entrepreneurial model, Freedom Studio fosters leadership, strengthens activism, and provides cutting-edge creative solutions to drive meaningful social change."
  
  const letters = headline.split(" ");

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
 
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [150, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);
  
 
  const videoY = useTransform(scrollYProgress, [0, 0.9], [0, -200]);
  const videoOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
  
      <div className="relative h-[200vh] bg-black" ref={containerRef}>
          
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen overflow-hidden"
          style={{
            y: videoY,
            opacity: videoOpacity,
            scale: videoScale
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={Homepagevideo} type="video/mp4" />
          </video>
        </motion.div>

     
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none"
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale
          }}
        >
          <h1 className="text-white text-4xl md:text-7xl font-bold text-center px-4 leading-tight">
            When Creativity 
            <br></br>
            Meets change
          </h1>
        </motion.div>

       
        <motion.div 
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
            y: useTransform(scrollYProgress, [0.4, 0.7], [50, 0])
          }}
          className='absolute bottom-24 text-white font-sans px-6 md:px-14 text-center md:text-left'
        >
          {/* <h1 className='text-4xl md:text-6xl font-bold'>Where Creativity</h1>
          <hr className='mt-2 w-4/5 mx-auto md:mx-0'></hr>
          <h1 className='mt-2 text-4xl md:text-6xl font-bold'>Meets Change</h1> */}
        </motion.div>
      </div>
      <div>
            <img src={logo} className="w-64 h-48 object-cover absolute top-0 left-10"/>
          </div>
      {/* Navigation */}
      <Navbar/>

      {/* Main content area - appears after video section */}
      <div className="relative z-10 bg-black">
        {/* Red Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          className='bg-[#9A1D20] w-full h-10'
        ></motion.div>

        {/* About Section */}
        <div className='section2 bg-black w-full py-16 px-6 md:px-24'>
          {letters.map((letter, index) => (
            <motion.p 
              key={index} 
              initial={{ filter:"blur(10px)", opacity: 0, y: 12 }} 
              whileInView={{ filter:"blur(0px)", opacity: 1, y: 0 }} 
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "backOut"
              }} 
              viewport={{ once: true, margin: "-50px" }}
              className='text-sm md:text-2xl text-white inline-block mr-1.5'
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.p>
          ))}

          <motion.hr 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: letters.length * 0.05 }}
            viewport={{ once: true }}
            className='mt-8 w-3/4 mx-auto'
          ></motion.hr>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='font-semibold text-white text-center text-3xl md:text-4xl mt-10'
          >
            Interactive Map
          </motion.h2>
         <MapMain/>
        </div>

        <Designed />
        <OurWork/>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;