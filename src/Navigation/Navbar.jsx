import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const overlayVariants = {
    open: {
      clipPath: 'circle(150% at 90% 40px)',
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: 'circle(0% at 90% 40px)',
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const staggerVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className='fixed top-0 right-0 z-50'>
      {/* Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className='fixed top-6 right-5 md:top-10 md:right-28 z-50 focus:outline-none'
        variants={iconVariants}
        whileHover="hover"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            exit={{ rotate: 0 }}
          >
            <IoClose className='text-3xl md:text-4xl text-white' />
          </motion.div>
        ) : (
          <GiHamburgerMenu className='text-2xl md:text-3xl text-white' />
        )}
      </motion.button>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed Background Overlay */}
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Main Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-md bg-black shadow-2xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
            >
              <motion.div 
                className="h-full flex flex-col justify-center pl-16 pr-8 py-20"
                variants={staggerVariants}
              >
                <motion.div variants={menuItemVariants}>
                  <Link to="/" onClick={toggleMenu}>
                    <p className="text-4xl text-white md:text-5xl font-bold mb-8 hover:text-gray-400 transition-colors duration-300">Home</p>
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link to="/about" onClick={toggleMenu}>
                    <p className="text-4xl text-white md:text-5xl font-bold mb-8 hover:text-gray-400 transition-colors duration-300">About</p>
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link to="/services" onClick={toggleMenu}>
                    <p className="text-4xl text-white md:text-5xl font-bold mb-8 hover:text-gray-400 transition-colors duration-300">Services</p>
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link to="/connect" onClick={toggleMenu}>
                    <p className="text-4xl text-white md:text-5xl font-bold mb-8 hover:text-gray-400 transition-colors duration-300">Connect</p>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;