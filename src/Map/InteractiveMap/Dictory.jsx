import React from 'react';
import { useNavigate } from 'react-router-dom';
// or if you prefer Link:
// import { Link } from 'react-router-dom';
import women1 from '../../assets/women1.jpg';
import women2 from '../../assets/women2.jpg';

const Dictory = () => {
  const navigate = useNavigate();

  const data = [
    {
      image: women1,
      title: 'What is Happening?',
      description: 'Explore all our upcoming events from October to December. Join us for exciting gatherings and networking opportunities.',
      path: '/happening' // Add path for each card
    },
    {
      image: women2,
      title: 'Video Gallery',
      description: 'Watch our collection of videos showcasing past events, interviews, and highlights from our community.',
      path: '/videos' // Add path for each card
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='mt-5 mb-12 font-droid text-4xl md:text-5xl text-white text-center font-bold tracking-tight'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500'>
            Directory
          </span>
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {data.map((item, key) => (
            <div 
              key={key}
              onClick={() => handleCardClick(item.path)}
              className='group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
            >
              <div className='relative h-48 overflow-hidden'>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div> 
              </div>
              
              <div className='p-6 space-y-4'>
                <h2 className='font-droid text-2xl text-center font-bold text-gray-800'>{item.title}</h2>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dictory;