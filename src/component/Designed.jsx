

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';
import Eshban from '../assets/Eshban.jpeg'
import RitaThapa from '../assets/Rita Thapa.jpg'
import Yuvaraj from '../assets/Yuvaraj Acharya.png'
import peacedirect from '../assets/peacedirect.webp'

const Designed = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation loop with slower speed (0.15 instead of 0.3)
  const animateScroll = (time) => {
    if (previousTimeRef.current !== undefined && !isHovered) {
      const deltaTime = time - previousTimeRef.current;
      const scrollSpeed = 0.1; // Reduced speed for slower scrolling
      const newPos = scrollPos + (scrollSpeed * deltaTime);
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      
      if (newPos >= maxScroll) {
        setScrollPos(0);
        containerRef.current.scrollLeft = 0;
      } else {
        setScrollPos(newPos);
        containerRef.current.scrollLeft = newPos;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, [scrollPos, isHovered]);


  const handleMouseEnter = () => {
    if (containerRef.current) {
      setScrollPos(containerRef.current.scrollLeft);
    }
    setIsHovered(true);
  };
  const testimonials = [
        {
          id: 1,
          name: 'Peace Direct ',
          role: 'Head of Community @Goldman',
          content: 'Working with Freedom Studio on ‘The Problem with Partnerships’ was more than a production experience; it was a process of deep listening and co-creation between our team. They held the complexity of the topic with care, helped shape the production work with careful detailing and brought our vision to life through effective sound and design. Their ability to combine our story with digital production gave our message the resonance it deserved. ',
          image: peacedirect
        },
        {
          id: 2,
          name: 'Yuvaraj Acharya,',
          role: 'Country Director, International Republican Institute Nepal.',
          content: 'Freedom Studio delivered more than we imagined. From mobilizing artists and social media influencers to crafting powerful videos and digital art, their team combined speed, creativity, and cultural nuance to help Nepali youth understand ways to counter disinformation effectively. The artistic exhibition in Patan Durbar Square was a brilliant culmination of creative engagement and youth mobilization.',
          image: Yuvaraj
        },
        {
          id: 3,
          name: 'Eshban Kwesiga',
          role: ' Knowledge Weaving and Influencing Manager, Global Fund for Community Foundation',
          content: 'Too Southern to Be Funded was not just a campaign; it was a statement. And Freedom Studio helped us say it loud and clear. Through striking animations, bold visuals, and collaborative storytelling, they helped us challenge narratives and mobilize solidarity worldwide. Their creative design was sharp, and their process was inclusive where they were able to effectively coordinate with more than 12 partners of GFCF in animation making process. ',
          image: Eshban
        },
        {
          id: 4,
          name: 'Rita Thapa',
          role: 'Founder Tewa & Nagarik Aawaz',
          content: 'It was my pleasure to get to know Freedom Studio and partner the Anupam Abhiyan (AA) of the IGFF with them as our creative partners. Over a 1-year journey together, I feel we as IGFF and the movement AA, have gained more visibility and better documentation. Aligning with our principles, they have been sincere and dedicated to Nepal’s equitable justice through our 5 yearlong feminist movement building work.',
          image: RitaThapa
        },
      ];

      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          };
        
          const cardVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }
          };

  return (
    <>
     <section className="bg-white relative md:py-10" ref={ref}>
      <div className="container mx-auto px-4 pt-12">
        <h2 className='text-center md:text-4xl text-2xl font-droid'>Client Testimonial</h2>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.10, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-16 text-gray-800"
        >
        </motion.h2>
      </div>
  
      <div className="absolute inset-0 overflow-hidden -z-10"></div>
        
      <div className="container mx-auto px-4">
        <div 
          ref={containerRef}
          className="overflow-x-hidden pb-4 relative cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex gap-8 w-max px-4"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                variants={cardVariants}
                className="rounded-xl overflow-hidden border border-gray-200 flex-shrink-0 relative bg-white"
                style={{ 
                  height: '380px', // Slightly increased height
                  width: '380px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Top colored section */}
                <div className="h-[70%] bg-[#9a1d20] p-8 flex flex-col relative">
                  {/* Quote icon positioned at top right */}
                  <div className="absolute top-6 left-8">
                    <FaQuoteLeft size={20} className="text-white opacity-30 text-3xl" />
                  </div>
                  <p className="text-white text-xs leading-relaxed mt-3  z-10">
                    {testimonial.content}
                  </p>
                  
                  {/* Image positioned to overlap sections */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Bottom white section */}
                <div className="h-[30%] bg-white pt-14 pb-6 px-8 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Designed;