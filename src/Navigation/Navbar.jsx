// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import logo from '../assets/logo.PNG';
// import { IoClose } from 'react-icons/io5';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedMenu, setExpandedMenu] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       setExpandedMenu(null);
//     }
//   };

//   const toggleSubMenu = (menu) => {
//     setExpandedMenu(expandedMenu === menu ? null : menu);
//   };

//   // Animation variants
//   const overlayVariants = {
//     open: {
//       clipPath: 'circle(150% at 90% 40px)',
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2
//       }
//     },
//     closed: {
//       clipPath: 'circle(0% at 90% 40px)',
//       transition: {
//         delay: 0.3,
//         type: "spring",
//         stiffness: 400,
//         damping: 40
//       }
//     }
//   };

//   const menuItemVariants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         y: { stiffness: 1000, velocity: -100 }
//       }
//     },
//     closed: {
//       y: 50,
//       opacity: 0,
//       transition: {
//         y: { stiffness: 1000 }
//       }
//     }
//   };

//   const subMenuItemVariants = {
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         opacity: { delay: 0.2 }
//       }
//     },
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         opacity: { duration: 0.1 }
//       }
//     }
//   };

//   const staggerVariants = {
//     open: {
//       transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//     },
//     closed: {
//       transition: { staggerChildren: 0.05, staggerDirection: -1 }
//     }
//   };

//   const iconVariants = {
//     hover: {
//       scale: 1.1,
//       rotate: 90,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   const socialIconVariants = {
//     hover: {
//       scale: 1.2,
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   return (
//     <div className='fixed top-0 w-full z-50'>
//       {/* Logo on left and Menu button on right - always visible */}
//       <div className='flex justify-between items-center px-5 md:px-28'>
//         {/* Logo on left */}
//         <div className='z-50'>
//           <Link to="/">
//             <img 
//               src={logo} 
//               alt="Logo" 
//               className='h-20 md:h-24 w-56 object-cover ' 
//             />
//           </Link>
//         </div>

//         {/* Toggle Button on right */}
//         <motion.button
//           onClick={toggleMenu}
//           className='z-50 focus:outline-none'
//           variants={iconVariants}
//           whileHover="hover"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <motion.div
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 90 }}
//               exit={{ rotate: 0 }}
//             >
//               <IoClose className='text-3xl md:text-4xl text-white' />
//             </motion.div>
//           ) : (
//             <GiHamburgerMenu className='text-2xl md:text-3xl text-white' />
//           )}
//         </motion.button>
//       </div>

//       {/* Full-screen Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Dimmed Background Overlay */}
//             <motion.div 
//               className="fixed inset-0 bg-black bg-opacity-70"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//             />
            
//             {/* Main Menu Panel */}
//             <motion.div
//               className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#9a1d20] shadow-lg"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={overlayVariants}
//             >
//               <motion.div 
//                 className="h-full flex flex-col justify-between pl-8 pr-8 py-20"
//                 variants={staggerVariants}
//               >
//                 <div>
//                   {/* Navigation Title with Horizontal Line */}
//                   <div className="flex items-center mb-10">
//                     <hr className="w-16 border-t border-gray-500" />
//                     <span className="mx-4 text-gray-400 text-sm uppercase tracking-widest">Navigation</span>
//                     <hr className="flex-grow border-t border-gray-500" />
//                   </div>
                  
//                   {/* Menu Items */}
//                   <motion.div variants={menuItemVariants}>
//                     <Link to="/" onClick={toggleMenu}>
//                       <p className="text-3xl text-white md:text-4xl font-droid mb-6 hover:text-gray-400 transition-colors duration-300">Home</p>
//                     </Link>
//                   </motion.div>
                  
//                   <motion.div variants={menuItemVariants}>
//                     <Link to="/about" onClick={toggleMenu}>
//                       <p className="text-3xl text-white md:text-4xl font-droid mb-6 hover:text-gray-400 transition-colors duration-300">About</p>
//                     </Link>
//                   </motion.div>
                  
//                   <motion.div variants={menuItemVariants} className="mb-6">
//                     <div 
//                       className="flex items-center cursor-pointer"
//                       onClick={() => toggleSubMenu('services')}
//                     >
//                       <p className="text-3xl text-white md:text-4xl font-droid hover:text-gray-400 transition-colors duration-300">Services</p>
//                       <motion.span
//                         className="ml-2 text-white text-2xl"
//                         animate={{ rotate: expandedMenu === 'services' ? 180 : 0 }}
//                       >
//                         ▼
//                       </motion.span>
//                     </div>
                    
//                     <AnimatePresence>
//                       {expandedMenu === 'services' && (
//                         <motion.div
//                           className="pl-4 mt-2 space-y-3"
//                           variants={subMenuItemVariants}
//                           initial="closed"
//                           animate="open"
//                           exit="closed"
//                         >
//                           <Link to="/services/knowledge-design" onClick={toggleMenu}>
//                             <p className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Knowledge Design</p>
//                           </Link>
//                           <Link to="/services/strategy-development" onClick={toggleMenu}>
//                             <p className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Strategy Development</p>
//                           </Link>
//                           <Link to="/services/digital-communication" onClick={toggleMenu}>
//                             <p className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Digital Communication</p>
//                           </Link>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
                  
//                   <motion.div variants={menuItemVariants}>
//                     <Link to="/connect" onClick={toggleMenu}>
//                       <p className="text-3xl text-white md:text-4xl font-droid mb-6 hover:text-gray-400 transition-colors duration-300">Connect</p>
//                     </Link>
//                   </motion.div>

//                   <motion.div variants={menuItemVariants}>
//                     <Link to="/map" onClick={toggleMenu}>
//                       <p className="text-3xl text-white md:text-4xl font-droid mb-6 hover:text-gray-400 transition-colors duration-300">Map</p>
//                     </Link>
//                   </motion.div>
//                 </div>

//                 {/* Social Icons */}
//                 <motion.div 
//                   className="flex justify-center space-x-6 mt-10"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={socialIconVariants} whileHover="hover">
//                     <FaFacebook className="text-2xl text-gray-400 hover:text-blue-500 transition-colors" />
//                   </motion.a>
//                   <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={socialIconVariants} whileHover="hover">
//                     <FaTwitter className="text-2xl text-gray-400 hover:text-blue-400 transition-colors" />
//                   </motion.a>
//                   <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={socialIconVariants} whileHover="hover">
//                     <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition-colors" />
//                   </motion.a>
//                   <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={socialIconVariants} whileHover="hover">
//                     <FaWhatsapp className="text-2xl text-gray-400 hover:text-green-500 transition-colors" />
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.PNG';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHoveredItem(null);
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

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const arrowVariants = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -10, opacity: 0 }
  };

  const subItemVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className='fixed top-0 w-full z-50'>
      {/* Logo on left and Menu button on right - always visible */}
      <div className='flex justify-between items-center px-5 md:px-28'>
        {/* Logo on left */}
        <div className='z-50'>
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className='h-20 md:h-24 w-56 object-cover' 
            />
          </Link>
        </div>

        {/* Toggle Button on right */}
        <motion.button
          onClick={toggleMenu}
          className='z-50 focus:outline-none'
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
      </div>

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
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-black shadow-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
            >
              <motion.div 
                className="h-full flex flex-col justify-between pl-8 pr-8 py-20"
                variants={staggerVariants}
              >
                <div>
                  {/* Navigation Title with Horizontal Line */}
                  <div className="flex items-center mb-12">
                    <hr className="w-16 border-t border-gray-500" />
                    <span className="mx-4 text-gray-400 text-sm uppercase tracking-widest">Navigation</span>
                    <hr className="flex-grow border-t border-gray-500" />
                  </div>
                  
                  {/* Menu Items */}
                  <div className="space-y-8">
                    <motion.div 
                      variants={menuItemVariants}
                      onHoverStart={() => setHoveredItem('home')}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link to="/" onClick={toggleMenu} className="group flex items-center justify-between">
                        <p className="text-3xl text-white md:text-5xl font-droid hover:text-gray-400 transition-colors duration-300">
                          Home
                        </p>
                        <AnimatePresence>
                          {hoveredItem === 'home' && (
                            <motion.div
                              variants={arrowVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-gray-400 mr-4"
                            >
                              <FaArrowRight />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      variants={menuItemVariants}
                      onHoverStart={() => setHoveredItem('about')}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link to="/about" onClick={toggleMenu} className="group flex items-center justify-between">
                        <p className="text-3xl text-white md:text-5xl font-droid hover:text-gray-400 transition-colors duration-300">
                          About
                        </p>
                        <AnimatePresence>
                          {hoveredItem === 'about' && (
                            <motion.div
                              variants={arrowVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-gray-400 mr-4"
                            >
                              <FaArrowRight />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      variants={menuItemVariants}
                      onHoverStart={() => setHoveredItem('services')}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <div className="group">
                        <Link to="/services" onClick={toggleMenu} className="flex items-center justify-between">
                          <p className="text-3xl text-white md:text-5xl font-droid hover:text-gray-400 transition-colors duration-300">
                            Services
                          </p>
                          <AnimatePresence>
                            {hoveredItem === 'services' && (
                              <motion.div
                                variants={arrowVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="text-gray-400 mr-4"
                              >
                                <FaArrowRight />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Link>
                        <div className="mt-2 ml-2 flex flex-wrap gap-3">
                          <motion.div variants={subItemVariants} whileHover="hover">
                            <Link to="/services/knowledge-design" onClick={toggleMenu} className="block">
                              <p className="text-xs text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 bg-gray-800 rounded">
                                Knowledge Design
                              </p>
                            </Link>
                          </motion.div>
                          <motion.div variants={subItemVariants} whileHover="hover">
                            <Link to="/services/strategy-development" onClick={toggleMenu} className="block">
                              <p className="text-xs text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 bg-gray-800 rounded">
                                Strategy Development
                              </p>
                            </Link>
                          </motion.div>
                          <motion.div variants={subItemVariants} whileHover="hover">
                            <Link to="/services/digital-communication" onClick={toggleMenu} className="block">
                              <p className="text-xs text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 bg-gray-800 rounded">
                                Digital Communication
                              </p>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      variants={menuItemVariants}
                      onHoverStart={() => setHoveredItem('connect')}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link to="/connect" onClick={toggleMenu} className="group flex items-center justify-between">
                        <p className="text-3xl text-white md:text-5xl font-droid hover:text-gray-400 transition-colors duration-300">
                          Connect
                        </p>
                        <AnimatePresence>
                          {hoveredItem === 'connect' && (
                            <motion.div
                              variants={arrowVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-gray-400 mr-4"
                            >
                              <FaArrowRight />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>

                    <motion.div 
                      variants={menuItemVariants}
                      onHoverStart={() => setHoveredItem('project')}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link to="/map" onClick={toggleMenu} className="group flex items-center justify-between">
                        <p className="text-3xl text-white md:text-5xl font-droid hover:text-gray-400 transition-colors duration-300">
                          Project
                        </p>
                        <AnimatePresence>
                          {hoveredItem === 'project' && (
                            <motion.div
                              variants={arrowVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="text-gray-400 mr-4"
                            >
                              <FaArrowRight />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Social Icons */}
                <motion.div 
                  className="flex justify-center space-x-6 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variants={socialIconVariants} 
                    whileHover="hover"
                    className="relative group"
                  >
                    <FaFacebook className="text-2xl text-gray-400 hover:text-blue-500 transition-colors" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Facebook
                    </span>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variants={socialIconVariants} 
                    whileHover="hover"
                    className="relative group"
                  >
                    <FaTwitter className="text-2xl text-gray-400 hover:text-blue-400 transition-colors" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Twitter
                    </span>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variants={socialIconVariants} 
                    whileHover="hover"
                    className="relative group"
                  >
                    <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition-colors" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Instagram
                    </span>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    variants={socialIconVariants} 
                    whileHover="hover"
                    className="relative group"
                  >
                    <FaWhatsapp className="text-2xl text-gray-400 hover:text-green-500 transition-colors" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      WhatsApp
                    </span>
                  </motion.a>
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
