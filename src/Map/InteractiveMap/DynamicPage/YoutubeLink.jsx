import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const YouTubeLink = ({ location }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full mb-8"
    >
      <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
        <ReactPlayer
          url={location.url}
          controls
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
              }
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default YouTubeLink;