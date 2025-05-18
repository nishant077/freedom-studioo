import React from 'react';
import { useNavigate } from 'react-router-dom';
// or if you prefer Link:
// import { Link } from 'react-router-dom';
import women1 from '../../assets/Gallery4.jpeg';
import women2 from '../../assets/Gallery5.jpeg';

const Dictory = () => {
  const navigate = useNavigate();

  const data = [
    {
      image: women1,
      title: 'WHAT IS HAPPENING?',
      description: 'What’s Happening? is a storytelling series that unpacks the who, what, why, when, and how of major movements. It explores the context, key actors, motivations, and demands behind each struggle, revealing the ecosystem of collective action so our audience can better understand the complexity of movements.',
      path: '/happening' 
    },
    {
      image: women2,
      title: 'VOICES OF FRONTLINERS',
      description: 'This is where we bring movements to life through video, capturing powerful moments, voices from the frontlines, and stories that challenge, inspire, and mobilize. Each video offers a window into the ongoing struggles and victories of communities pushing for justice.',
      path: '/videos'
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='mt-5 mb-12 font-droid text-4xl md:text-5xl text-white text-center font-bold tracking-tight'>
          <span className='bg-clip-text text-transparent text-white'>
          DIRECTORY
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