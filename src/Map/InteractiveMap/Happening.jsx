import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import team1 from '../../assets/women1.jpg';
import team2 from '../../assets/team2.jpg'; 
import team3 from '../../assets/team3.jpg';
import team5 from '../../assets/team5.jpg';
import team6 from '../../assets/team6.jpg';
// import team7 from '../../assets/women2.jpg';
// import team8 from '../../assets/women3.jpg';
// import team9 from '../../assets/women4.jpg';
// import team10 from '../../assets/workimg1.jpg';
// import team11 from '../../assets/workimg2.jpg';
// import team12 from '../../assets/workimg3.jpg';
import team16 from '../../assets/team1.jpg';
import team17 from '../../assets/team.JPG';
// import team18 from '../../assets/workimg7.jpg';
import kathmandu from '../../assets/kathmandu.png'
import kathmandu2 from '../../assets/kathmandu2.png'
import kathmandu3 from '../../assets/kathmandu3.png'
import kathmandu4 from '../../assets/kathmandu4.png'
import kathmandu5 from '../../assets/kathmandu5.png'
import kathmandu6 from '../../assets/kathmandu6.png'
import sudan1 from '../../assets/sudan1.png'
import sudan2 from '../../assets/sudan2.png'
import sudan3 from '../../assets/sudan3.png'
import sudan4 from '../../assets/sudan4.png'
import sudan5 from '../../assets/sudan5.png'
import sudan6 from '../../assets/sudan6.png'
import sudan7 from '../../assets/sudan7.png'
import sudan8 from '../../assets/sudan8.png'
import dang1 from '../../assets/dang1.png'
import dang2 from '../../assets/dang2.png'
import dang3 from '../../assets/dang3.png'
import dang4 from '../../assets/dang4.png'
import dang5 from '../../assets/dang5.png'
import dang6 from '../../assets/dang6.png'
import afghanistan1 from '../../assets/afghanistan1.png'
import afghanistan2 from '../../assets/afghanistan2.png'
import afghanistan3 from '../../assets/afghanistan3.png'
import afghanistan4 from '../../assets/afghanistan4.png'
import afghanistan5 from '../../assets/afghanistan5.png'
import afghanistan6 from '../../assets/afghanistan6.png'
import tinkune1 from '../../assets/tinkune1.png'
import tinkune2 from '../../assets/tinkune2.png'
import tinkune3 from '../../assets/tinkune3.png'
import tinkune4 from '../../assets/tinkune4.png'
import tinkune5 from '../../assets/tinkune5.png'
import tinkune6 from '../../assets/tinkune6.png'
import Navbar from '../../Navigation/Navbar';

const Happening = () => {
  const cardData = [
    {
      id: 1,
      title: "The Teacher's Protest in Kathmandu",
      images: [
        kathmandu,kathmandu2,kathmandu3,kathmandu4,kathmandu5,kathmandu6
      ],
      category: "Kathmandu"
    },
    {
      id: 2,
      title: "Unrest in Kathmandu (Tinkune)",
      images: [tinkune1,tinkune2,tinkune3,tinkune4,tinkune5,tinkune6],
      category: "Tinkune"
    },
    {
      id: 3,
      title: "What is Happening in Sudan ?",
      images: [sudan1,sudan2,sudan3,sudan4,sudan5,sudan6,sudan7,sudan8],
      category: "Sudan"
    },
    {
      id: 4,
      title: "What is Happening ? Land Rights - Dang",
      images: [dang1, dang2,dang3 ,dang4 , dang5,dang6 ],
      category: "Dang"
    },
    {
      id: 5,
      title: "What is Happening in Afghanistan ?",
      images: [afghanistan1, afghanistan2,afghanistan3 ,afghanistan4 ,afghanistan5 ,afghanistan6],
      category: "Afghanistan"
    },
    {
      id: 6,
      title: "The Kolkata Incident",
      images: [team16, team17,team2, team3],
      category: "Kolkata"
    },
    {
      id: 7,
      title: "What is Happening in Bhaktapur ? Land-Rights",
      images: [ team2, team3, team5, team6],
      category: "Bhaktapur"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [cardStates, setCardStates] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize card states
  useEffect(() => {
    const initialStates = {};
    cardData.forEach(item => {
      initialStates[item.id] = {
        currentIndex: 0,
        isPlaying: true
      };
    });
    setCardStates(initialStates);
  }, []);

  // Auto-slide effect for individual card images
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
    }, 3000); // Change image every 3 seconds

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

  // Filter data by category
  const filteredData = activeCategory === "All" 
    ? cardData 
    : cardData.filter(item => item.category === activeCategory);

  // Categories for filtering
  const categories = ["All", ...new Set(cardData.map(item => item.category))];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
       
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12  w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-droid text-gray-800 mb-4"
          >
            What's Happening
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This series includes what's happening around the world
          </p>
        </div>
     

        {/* Global Controls */}
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleGlobalPlayPause}
            className="px-4 py-2 bg-[#9a1d20] text-white rounded-lg flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pause All
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play All
              </>
            )}
          </button>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                ? 'bg-[#9a1d20] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
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
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>
                
                {/* Play/Pause Button */}
                <button
                  onClick={() => togglePlayPause(item.id)}
                  className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  {cardStates[item.id]?.isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs font-semibold text-white bg-[#9a1d20] px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-droid text-gray-800 mb-2">{item.title}</h3>
                
                {/* Thumbnail Navigation */}
                <div className="mt-4 flex overflow-x-auto pb-2 gap-2">
                  {item.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => goToImage(item.id, imgIndex)}
                      className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${cardStates[item.id]?.currentIndex === imgIndex 
                        ? 'border-[#9a1d20] scale-105'
                        : 'border-transparent hover:border-gray-300'}`}
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
    </div>
  );
};

export default Happening;