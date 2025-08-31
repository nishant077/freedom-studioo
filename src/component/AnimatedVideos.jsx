import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedVideos = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "This is a story of Khusbu, who got sexually abused by aid worker.",
      youtubeId: "7EBmWQAa96Q",
      channel: "Freedom Studio",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Peaceful Moments",
      youtubeId: "SnuD34RZ4FI",
      channel: "Peace Direct",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Global Impact",
      youtubeId: "8BSXL6x_o4U",
      channel: "Global Fund",
      duration: "2:05"
    },
    {
      id: 4,
      title: "We're thrilled to announce the release of powerful rap, a raw and poignant anthem that confronts the pressing issue of sexual abuse and violence against women.",
      youtubeId: "-YPHGkED3SM",
      channel: "Freedom Studio",
      duration: "4:01"
    },
    {
      id: 5,
      title: "A poetry in motion of an LGBTQI+ individual simply seeking to be themselves in a world that often doesn't understand.", 
      youtubeId: "8Vm_ITh5tEU",
      channel: "Freedom Studio",
      duration: "2:45"
    },
    {
      id: 6,
      title: "A short story telling you about what is meter byaj",
      youtubeId: "gjCWSCE4_sY",
      channel: "Freedom Studio",
      duration: "7:19"
    }
  ];

  const getThumbnailUrl = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl md:text-4xl font-bold mb-12"
        >
          Some Reference of our work
          <motion.div 
            className="h-1 bg-[#9a1d20] w-24 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h1>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Thumbnails (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 w-1/6">
            {videos.slice(0, 3).map((video, index) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveVideo(index)}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === index ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
              >
                <img
                  src={getThumbnailUrl(video.youtubeId)}
                  alt={video.title}
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-medium truncate">{video.title}</p>
                </div>
                {activeVideo === index && (
                  <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                    Selected
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Center Video Player */}
          <div className="w-full lg:w-4/6">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].youtubeId}`}
                title={videos[activeVideo].title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-1">{videos[activeVideo].title}</h2>
              <p className="text-gray-600 text-sm">{videos[activeVideo].channel} • {videos[activeVideo].duration}</p>
            </div>
          </div>

          {/* Right Thumbnails (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 w-1/6">
            {videos.slice(3, 6).map((video, index) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveVideo(index + 3)}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === index + 3 ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
              >
                <img
                  src={getThumbnailUrl(video.youtubeId)}
                  alt={video.title}
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs font-medium truncate">{video.title}</p>
                </div>
                {activeVideo === index + 3 && (
                  <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                    Selected
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Thumbnails */}
        <div className="lg:hidden mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveVideo(index)}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${activeVideo === index ? 'ring-4 ring-[#9a1d20]' : 'opacity-80 hover:opacity-100'}`}
            >
              <img
                src={getThumbnailUrl(video.youtubeId)}
                alt={video.title}
                className="w-full h-full object-cover aspect-video"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{video.title}</p>
              </div>
              {activeVideo === index && (
                <div className="absolute top-2 right-2 bg-[#9a1d20] text-white text-xs px-2 py-1 rounded-full">
                  Selected
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedVideos;