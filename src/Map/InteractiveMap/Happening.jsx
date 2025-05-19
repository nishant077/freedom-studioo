import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import team2 from '../../assets/team2.jpg'; 
import team3 from '../../assets/team3.jpg';
import team5 from '../../assets/team5.jpg';
import team6 from '../../assets/team6.jpg';
import team16 from '../../assets/team1.jpg';
import team17 from '../../assets/team.JPG';
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
import Navbar from '../../Navigation/Navbar';
import Footer from '../../component/Footer';

const Happening = () => {
  const cardData = [
    {
      id: 1,
      title: "The Teacher's Protest in Kathmandu",
      images: [kathmandu, kathmandu2, kathmandu3, kathmandu4, kathmandu5, kathmandu6],
      category: "Kathmandu",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Unrest in Kathmandu (Tinkune)",
      images: [tinkune1, tinkune2, tinkune3, tinkune4, tinkune5, tinkune6],
      category: "Tinkune",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "What is Happening in Sudan?",
      images: [sudan1, sudan2, sudan3, sudan4, sudan5, sudan6, sudan7, sudan8],
      category: "Sudan",
      date: "April 28, 2023"
    },
    {
      id: 4,
      title: "Land Rights Protest - Dang",
      images: [dang1, dang2, dang3, dang4, dang5, dang6],
      category: "Dang",
      date: "May 5, 2023"
    },
    {
      id: 5,
      title: "Crisis in Afghanistan",
      images: [afghanistan1, afghanistan2, afghanistan3, afghanistan4, afghanistan5, afghanistan6],
      category: "Afghanistan",
      date: "March 20, 2023"
    },
    {
      id: 6,
      title: "The Kolkata Incident",
      images: [team16, team17, team2, team3],
      category: "Kolkata",
      date: "February 10, 2023"
    },
    {
      id: 7,
      title: "Land Rights Protest - Bhaktapur",
      images: [team2, team3, team5, team6],
      category: "Bhaktapur",
      date: "May 1, 2023"
    },
  ];

  const [cardStates, setCardStates] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const initialStates = {};
    cardData.forEach(item => {
      const randomIndex = Math.floor(Math.random() * item.images.length);
      initialStates[item.id] = {
        currentIndex: randomIndex,
        isPlaying: true
      };
    });
    setCardStates(initialStates);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const cardInterval = setInterval(() => {
      setCardStates(prevStates => {
        const newStates = {...prevStates};
        Object.keys(newStates).forEach(id => {
          if (newStates[id].isPlaying) {
            const item = cardData.find(item => item.id === parseInt(id));
            if (item) {
              newStates[id].currentIndex = 
                (newStates[id].currentIndex + 1) % item.images.length;
            }
          }
        });
        return newStates;
      });
    }, 3000);

    return () => clearInterval(cardInterval);
  }, [isPlaying]);

  const togglePlayPause = (cardId) => {
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
    setIsPlaying(!isPlaying);
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
            {isPlaying ? (
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
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                {/* Card Image Carousel */}
                <div className="relative h-full w-full">
                  {item.images.map((image, imgIndex) => (
                    <motion.img
                      key={imgIndex}
                      src={image}
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
                  onClick={() => togglePlayPause(item.id)}
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
                      key={imgIndex}
                      onClick={() => goToImage(item.id, imgIndex)}
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                        cardStates[item.id]?.currentIndex === imgIndex
                          ? 'border-[#9a1d20] scale-105'
                          : 'border-transparent hover:border-gray-500'
                      }`}
                    >
                      <img 
                        src={image} 
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