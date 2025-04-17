

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

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

  // Save position when hover starts
  const handleMouseEnter = () => {
    if (containerRef.current) {
      setScrollPos(containerRef.current.scrollLeft);
    }
    setIsHovered(true);
  };
  const testimonials = [
        {
          id: 1,
          name: 'Elona Mosco',
          role: 'Head of Community @Goldman',
          content: 'Yes, no doubt it is indeed expensive, but there\'s a clear reason why it\'s the best tax firm in the world.',
          image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
          id: 2,
          name: 'Michael Chen',
          role: 'CEO, Startup Ventures',
          content: 'Exceptional service from start to finish. They understood our vision perfectly and delivered beyond our expectations.',
          image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 3,
          name: 'Emma Rodriguez',
          role: 'Product Manager, DesignHub',
          content: 'The quality of work and professionalism is outstanding. They met all our tight deadlines.',
          image: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        {
          id: 4,
          name: 'David Wilson',
          role: 'CTO, InnovateSoft',
          content: 'Their technical expertise solved complex challenges we were facing. The team is knowledgeable and responsive.',
          image: 'https://randomuser.me/api/portraits/men/75.jpg'
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
     <section className="bg-white relative mb-4" ref={ref}>
      <div className="container mx-auto px-4 pt-12">
        <h2 className='text-center md:text-4xl text-3xl font-bold'>Client Testimonial</h2>
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
                  height: '340px', // Slightly increased height
                  width: '380px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Top colored section */}
                <div className="h-[60%] bg-[#9a1d20] p-8 flex flex-col relative">
                  {/* Quote icon positioned at top right */}
                  <div className="absolute top-6 left-8">
                    <FaQuoteLeft size={20} className="text-white opacity-30 text-3xl" />
                  </div>
                  <p className="text-white text-lg leading-relaxed mt-8 z-10">
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
                <div className="h-[40%] bg-white pt-14 pb-6 px-8 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs mt-2">{testimonial.role}</p>
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