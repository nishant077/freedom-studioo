import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import kathmandu from '../../assets/kathmandu.png';
import kathmandu2 from '../../assets/kathmandu2.png';
import kathmandu3 from '../../assets/kathmandu3.png';
import kathmandu4 from '../../assets/kathmandu4.png';
import kathmandu5 from '../../assets/kathmandu5.png';
import kathmandu6 from '../../assets/kathmandu6.png';

import sudan1 from '../../assets/sudan1.png';
import sudan2 from '../../assets/sudan2.png';
import sudan3 from '../../assets/sudan3.png';
import sudan4 from '../../assets/sudan4.png';
import sudan5 from '../../assets/sudan5.png';
import sudan6 from '../../assets/sudan6.png';
import sudan7 from '../../assets/sudan7.png';
import sudan8 from '../../assets/sudan8.png';

import dang1 from '../../assets/dang1.png';
import dang2 from '../../assets/dang2.png';
import dang3 from '../../assets/dang3.png';
import dang4 from '../../assets/dang4.png';
import dang5 from '../../assets/dang5.png';
import dang6 from '../../assets/dang6.png';

import afghanistan1 from '../../assets/afghanistan1.png';
import afghanistan2 from '../../assets/afghanistan2.png';
import afghanistan3 from '../../assets/afghanistan3.png';
import afghanistan4 from '../../assets/afghanistan4.png';
import afghanistan5 from '../../assets/afghanistan5.png';
import afghanistan6 from '../../assets/afghanistan6.png';

import tinkune1 from '../../assets/tinkune1.png';
import tinkune2 from '../../assets/tinkune2.png';
import tinkune3 from '../../assets/tinkune3.png';
import tinkune4 from '../../assets/tinkune4.png';
import tinkune5 from '../../assets/tinkune5.png';
import tinkune6 from '../../assets/tinkune6.png';

import ko1 from '../../assets/ko2.png';
import ko2 from '../../assets/ko3.png';
import ko3 from '../../assets/ko4.png';
import ko4 from '../../assets/ko5.png';
import ko5 from '../../assets/ko6.png';
import ko6 from '../../assets/ko7.png';

import bk1 from '../../assets/bk1.png';
import bk2 from '../../assets/bk2.png';
import bk3 from '../../assets/bk3.png';
import bk4 from '../../assets/bk4.png';
import bk5 from '../../assets/bk5.png';
import bk6 from '../../assets/bk6.png';
import bk7 from '../../assets/bk7.png';

import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import p9 from '../../assets/p9.png';

import k1 from '../../assets/k1.png';
import k2 from '../../assets/k2 .png';
import k3 from '../../assets/k3.png';
import k4 from '../../assets/k4.png';
import k5 from '../../assets/k5.png';
import k6 from '../../assets/k6.png';
import k7 from '../../assets/k7.png';
import k8 from '../../assets/k8.png';
import k9 from '../../assets/k9.png';
import k10 from '../../assets/k10.png';

import v1 from '../../assets/ve1.png';
import v2 from '../../assets/ve2.png';
import v3 from '../../assets/ve3.png';
import v4 from '../../assets/ve4.png';
import v5 from '../../assets/ve5.png';
import v6 from '../../assets/ve6.png';
import v7 from '../../assets/ve7.png';
import v8 from '../../assets/ve8.png';

import mu1 from '../../assets/mu1.png';
import mu2 from '../../assets/mu2.png';
import mu3 from '../../assets/mu3.png';
import mu4 from '../../assets/mu4.png';
import mu5 from '../../assets/mu5.png';
import mu6 from '../../assets/mu6.png';
import mu7 from '../../assets/mu7.png';


import Navbar from '../../Navigation/Navbar';
import Footer from '../../component/Footer';

const Happening = () => {
  const cardData = [
    {
      id: 1,
      title: "The Teacher's Protest in Kathmandu",
      images: [
        { id: 'k1', src: kathmandu },
        { id: 'k2', src: kathmandu2 },
        { id: 'k3', src: kathmandu3 },
        { id: 'k4', src: kathmandu4 },
        { id: 'k5', src: kathmandu5 },
        { id: 'k6', src: kathmandu6 }
      ],
      category: "Kathmandu",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Unrest in Kathmandu (Tinkune)",
      images: [
        { id: 't1', src: tinkune1 },
        { id: 't2', src: tinkune2 },
        { id: 't3', src: tinkune3 },
        { id: 't4', src: tinkune4 },
        { id: 't5', src: tinkune5 },
        { id: 't6', src: tinkune6 }
      ],
      category: "Tinkune",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "What is Happening in Sudan?",
      images: [
        { id: 's1', src: sudan1 },
        { id: 's2', src: sudan2 },
        { id: 's3', src: sudan3 },
        { id: 's4', src: sudan4 },
        { id: 's5', src: sudan5 },
        { id: 's6', src: sudan6 },
        { id: 's7', src: sudan7 },
        { id: 's8', src: sudan8 }
      ],
      category: "Sudan",
      date: "April 28, 2023"
    },
    {
      id: 4,
      title: "Land Rights Protest - Dang",
      images: [
        { id: 'd1', src: dang1 },
        { id: 'd2', src: dang2 },
        { id: 'd3', src: dang3 },
        { id: 'd4', src: dang4 },
        { id: 'd5', src: dang5 },
        { id: 'd6', src: dang6 }
      ],
      category: "Dang",
      date: "May 5, 2023"
    },
    {
      id: 5,
      title: "Crisis in Afghanistan",
      images: [
        { id: 'a1', src: afghanistan1 },
        { id: 'a2', src: afghanistan2 },
        { id: 'a3', src: afghanistan3 },
        { id: 'a4', src: afghanistan4 },
        { id: 'a5', src: afghanistan5 },
        { id: 'a6', src: afghanistan6 }
      ],
      category: "Afghanistan",
      date: "March 20, 2023"
    },
    {
      id: 6,
      title: "The Kolkata Incident",
      images: [
        { id: 'k1', src: ko1 },
        { id: 'k2', src: ko2 },
        { id: 'k3', src: ko3 },
        { id: 'k4', src: ko4 },
        { id: 'k5', src: ko5 },
        { id: 'k6', src: ko6 }
      ],
      category: "Kolkata",
      date: "February 10, 2023"
    },
    {
      id: 7,
      title: "Land Rights Protest - Bhaktapur",
      images: [
        { id: 'b1', src: bk1 },
        { id: 'b2', src: bk2 },
        { id: 'b3', src: bk3 },
        { id: 'b4', src: bk4 },
        { id: 'b5', src: bk5 },
        { id: 'b6', src: bk6 },
        { id: 'b7', src: bk7 }
      ],
      category: "Bhaktapur",
      date: "May 1, 2023"
    },
    {
      id: 8,
      title: "What is Happening in Prajatantra",
      images: [
        { id: 'p1', src: p1 },
        { id: 'p2', src: p2 },
        { id: 'p3', src: p3 },
        { id: 'p4', src: p4 },
        { id: 'p5', src: p5 },
        { id: 'p6', src: p6 },
        { id: 'p7', src: p7 },
        { id: 'p8', src: p8 },
        { id: 'p9', src: p9 },
      ],
      category: "Prajatantra",
      date: "May 1, 2007"
    },
    {
      id: 9,
      title: "What is Happening in Kenya?",
      images: [
        { id: 'k1', src: k1 },
        { id: 'k2', src: k2 },
        { id: 'k3', src: k3 },
        { id: 'k4', src: k4 },
        { id: 'k5', src: k5 },
        { id: 'k6', src: k6 },
        { id: 'k7', src: k7 },
        { id: 'k8', src: k8 },
        { id: 'k9', src: k9 },
        { id: 'k10', src: k10 },
      ],
      category: "Kenya",
      date: "May 1, 2023"
    },
    {
      id: 10,
      title: "What is Happening in Venezuela?",
      images: [
        { id: 'v1', src: v1 },
        { id: 'v2', src: v2 },
        { id: 'v3', src: v3 },
        { id: 'v4', src: v4 },
        { id: 'v5', src: v5 },
        { id: 'v6', src: v6 },
        { id: 'v7', src: v7 },
        { id: 'v8', src: v8 },
      ],
      category: "Venezuela",
      date: "May 1, 2023"
    },
    {
      id: 11,
      title: "What is Happening in Mukkumlung?",
      images: [
        { id: 'm1', src: mu1 },
        { id: 'm2', src: mu2 },
        { id: 'm3', src: mu3 },
        { id: 'm4', src: mu4 },
        { id: 'm5', src: mu5 },
        { id: 'm6', src: mu6 },
        { id: 'm7', src: mu7 },
      ],
      category: "Mukkumlung",
      date: "May 1, 2023"
    },
  ];

  // Initialize state for each card's current image index and play status
  const [cardStates, setCardStates] = useState(() => {
    const initialState = {};
    cardData.forEach(card => {
      initialState[card.id] = {
        currentIndex: 0,
        isPlaying: true
      };
    });
    return initialState;
  });

  const [isGlobalPlaying, setIsGlobalPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Effect to handle auto-rotation of all carousels
  useEffect(() => {
    if (!isGlobalPlaying) return;

    const interval = setInterval(() => {
      setCardStates(prevStates => {
        const newStates = { ...prevStates };
        
        cardData.forEach(card => {
          if (newStates[card.id]?.isPlaying) {
            newStates[card.id] = {
              ...newStates[card.id],
              currentIndex: (newStates[card.id].currentIndex + 1) % card.images.length
            };
          }
        });

        return newStates;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isGlobalPlaying]);

  const toggleCardPlayPause = (cardId) => {
    setCardStates(prev => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        isPlaying: !prev[cardId].isPlaying
      }
    }));
  };

  const goToImage = (cardId, index) => {
    setCardStates(prev => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        currentIndex: index,
        isPlaying: false
      }
    }));
  };

  const toggleGlobalPlayPause = () => {
    setIsGlobalPlaying(!isGlobalPlaying);
  };

  return (
    <div className="min-h-screen bg-[#4a4a4a] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            What's Happening
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the latest events and protests from around the world
          </p>
        </motion.div>

        {/* Global Controls */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleGlobalPlayPause}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#9a1d20] hover:bg-[#8a1a1d] text-white rounded-full flex items-center gap-2 transition-colors duration-300"
          >
            {isGlobalPlaying ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Pause All Slideshows</span>
                <span className="sm:hidden">Pause All</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Play All Slideshows</span>
                <span className="sm:hidden">Play All</span>
              </>
            )}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-56 sm:h-64 md:h-96 overflow-hidden">
                {/* Card Image Carousel */}
                <div className="relative h-full w-full">
                  {item.images.map((image, imgIndex) => (
                    <motion.img
                      key={image.id}
                      src={image.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: cardStates[item.id]?.currentIndex === imgIndex ? 1 : 0,
                        scale: cardStates[item.id]?.currentIndex === imgIndex ? 1 : 1.05
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                
                {/* Play/Pause Button */}
                <button
                  onClick={() => toggleCardPlayPause(item.id)}
                  className={`absolute top-2 right-2 bg-black/70 text-white p-1.5 sm:p-2 rounded-full hover:bg-black transition-all duration-300 ${
                    hoveredCard === item.id ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {cardStates[item.id]?.isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {/* Category and Date */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-semibold text-white bg-[#9a1d20] px-2 sm:px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-300">{item.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Thumbnail Navigation */}
                <div className="mt-3 sm:mt-4 flex overflow-x-auto pb-1 sm:pb-2 gap-1 sm:gap-2 scrollbar-hide">
                  {item.images.map((image, imgIndex) => (
                    <button
                      key={image.id}
                      onClick={() => goToImage(item.id, imgIndex)}
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                        cardStates[item.id]?.currentIndex === imgIndex
                          ? 'border-[#9a1d20] scale-105'
                          : 'border-transparent hover:border-gray-500'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={`Thumbnail ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Happening;