// import React from "react";
// import { FaPen } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import image1 from '../assets/women1.jpg'
// import image2 from '../assets/women2.jpg'
// import image3 from '../assets/women3.jpg'
// import image4 from '../assets/women4.jpg'


// const Tags = () => {
//   const tags = [
//     { 
//       text: "arts", 
//       size: "text-xl",
//       image: image1
//     },
//     { 
//       text: "activism", 
//       size: "text-lg",
//       image: image2
//     },
//     { 
//       text: "innovation", 
//       size: "text-2xl",
//       image: image3
//     },
//     { 
//       text: "passion", 
//       size: "text-xl",
//       image: image4 
//     },
//     { 
//       text: "leadership", 
//       size: "text-2xl",
//       image: image1
//     },
//     { 
//       text: "movement", 
//       size: "text-lg",
//       image: image3
//     },
//     { 
//       text: "freedom", 
//       size: "text-xl",
//       image: image4
//     },
//     { 
//       text: "creativity", 
//       size: "text-2xl",
//       image: image2
//     },
//     { 
//       text: "recruiting", 
//       size: "text-xl",
//       image: image2
//     },
//     { 
//       text: "events", 
//       size: "text-xl",
//       image: image4 
//     },
//   ];

//   return (
//     <div className="bg-black flex flex-col items-center justify-center py-10 px-40 mt-10">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center justify-center">
//           <span>OUR M</span>
//           <span className="relative mx-1">
//             <FaPen 
//               size={20} 
//               className="border-0 p-5 bg-[#9a1d20] rounded-full text-white" 
//             />
//           </span>
//           <span>VEMENT & VISION</span>
//         </h1>
        
//         <div className="flex flex-wrap justify-center gap-4 relative">
//           {tags.map((tag, index) => (
//             <motion.div
//               key={index}
//               className={`${tag.size} text-white font-medium px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm cursor-pointer relative z-10`}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 borderColor: "rgba(255, 255, 255, 0.4)"
//               }}
//             >
//               {tag.text}
              
//               {/* Image that appears on hover */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-lg overflow-hidden pointer-events-none"
//                 style={{ display: "none" }}
//                 whileHover={{ display: "block" }}
//               >
//                 <img 
//                   src={tag.image} 
//                   alt={tag.text} 
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tags;

import {React,useState} from "react";
import { FaPen } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import image1 from '../assets/women1.jpg'
import image2 from '../assets/women2.jpg'
import image3 from '../assets/women3.jpg'
import image4 from '../assets/women4.jpg'

const Tags = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tags = [
        { 
          text: "arts", 
          size: "text-xl",
          image: image1
        },
        { 
          text: "activism", 
          size: "text-lg",
          image: image2
        },
        { 
          text: "innovation", 
          size: "text-2xl",
          image: image3
        },
        { 
          text: "passion", 
          size: "text-xl",
          image: image4 
        },
        { 
          text: "leadership", 
          size: "text-2xl",
          image: image1
        },
        { 
          text: "movement", 
          size: "text-lg",
          image: image3
        },
        { 
          text: "freedom", 
          size: "text-xl",
          image: image4
        },
        { 
          text: "creativity", 
          size: "text-2xl",
          image: image2
        },
        { 
          text: "recruiting", 
          size: "text-xl",
          image: image2
        },
        { 
          text: "events", 
          size: "text-xl",
          image: image4 
        },
      ];

  return (
    <div className="bg-black flex flex-col items-center justify-center py-10 px-40 mt-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center justify-center">
          <span>OUR M</span>
          <span className="relative mx-1">
            <FaPen 
              size={20} 
              className="border-0 p-5 bg-[#9a1d20] rounded-full text-white" 
            />
          </span>
          <span>VEMENT & VISION</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              className={`relative ${tag.size} text-white font-medium px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm cursor-pointer`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {tag.text}
              
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-white/30">
                    <img 
                      src={tag.image} 
                      alt={tag.text}
                      className="w-full h-full object-cover"
                    />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;