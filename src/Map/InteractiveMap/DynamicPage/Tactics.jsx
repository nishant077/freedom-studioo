import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle } from 'react-icons/fa';
import tatics from '../../../assets/tatics.webp'

const Tactics = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // List items data
  const tacticsList = [
    "Encirclement outside the municipality office with agricultural tools",
    "Collecting handprints of the individuals and families affected by the issue.",
    "Live art session regarding the issues by victims and artists in the theme of the issue",
    "Social media mobilization",
    "Formation of strugglers committee as an institution",
    "Showcasing and exhibiting their issues during festivals and events."
  ];

  return (
    <section className="w-full py-12 md:py-20 px-5 sm:px-8 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-8 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex items-center justify-center"
            variants={imageVariants}
          >
            <img 
  src={tatics} 
  alt="Tactics Illustration" 
  className="rounded-lg shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md object-cover h-auto"
/>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-[#9a1d20] text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8"
              variants={itemVariants}
            >
              Tactics Used:
            </motion.h2>

            <motion.ul 
              className="space-y-4 md:space-y-5"
              variants={containerVariants}
            >
              {tacticsList.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <FaCheckCircle className="text-[#9a1d20] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tactics;