import {React, useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Designed from './Designed';
import './Font.css';
import Footer from './Footer';
import OurWork from './OurWork';
import Navbar from '../Navigation/Navbar';
import Homepagevideo from '../assets/Hero Page video.mp4'
import HomePageMap from './HomePageMap';
import KeyImpact from './KeyImpact';
import Expertise from './Expertise';
import FeedbackForm from '../About/FeedbackForm';

const Homepage = () => {
  const headline = "Freedom Studio is a creative initiative that empowers social movements and civic organizations through strategic nonviolent action and digital innovation. Through its non-profit and social entrepreneurial model, Freedom Studio fosters leadership, strengthens activism, and provides cutting-edge creative solutions to drive meaningful social change."
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // First text appears (0-0.3), stays (0.3-0.5), disappears (0.5-0.7)
  const firstHeadlineOpacity = useTransform(scrollYProgress, 
    [0, 0.3, 0.5, 0.7],
    [0, 1, 1, 0]  
  );
  
  const firstHeadlineY = useTransform(scrollYProgress, 
    [0, 0.4],
    [100, 0]
  );
  
  // Second text only appears after first is completely gone (starts at 0.7)
  const paragraphOpacity = useTransform(scrollYProgress, 
    [0.7, 0.9],
    [0, 1]
  );
  
  const paragraphY = useTransform(scrollYProgress, 
    [0.7, 0.9],
    [100, 0]
  );
  
  // Video animation starts after second text appears
  const videoY = useTransform(scrollYProgress, 
    [0.9, 1], 
    [0, -200]
  );
  
  const videoOpacity = useTransform(scrollYProgress, 
    [0.9, 1], 
    [1, 0.8]
  );

  return (
    <>
      <div className="relative h-[300vh] bg-black" ref={containerRef}>
        {/* Video background */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen overflow-hidden"
          style={{
            y: videoY,
            opacity: videoOpacity
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

        {/* First headline - appears first */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: firstHeadlineOpacity,
            y: firstHeadlineY,
            transition: "opacity 0.5s ease-out"
          }}
        >
          <h1 className="text-white text-4xl md:text-7xl font-droid text-center px-4 leading-tight">
            When Creativity 
            <br />
            Meets Change
          </h1>
        </motion.div>

        {/* Paragraph text - appears only after first is gone */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-8"
          style={{
            opacity: paragraphOpacity,
            y: paragraphY,
            transition: "all 0.5s ease-out"
          }}
        >
          <p className="text-white text-lg md:text-2xl text-center max-w-4xl leading-relaxed">
            {headline}
          </p>
        </motion.div>
      </div>

      <Navbar/>

      <div className="relative z-10 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          className='bg-[#9A1D20] w-full h-10'
        ></motion.div>

        <div className='section2 bg-black w-full py-16 px-6 md:px-36'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='font-droid text-white text-center text-3xl md:text-4xl'
          >
            Interactive Map 
          </motion.h2>
          <div className="border border-white mt-3">
            <a href="/map">
              <HomePageMap/>
            </a>
          </div>
        </div>
        
        <Expertise/>
        <KeyImpact/>
        <Designed />
        <OurWork/>
        <FeedbackForm/>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;