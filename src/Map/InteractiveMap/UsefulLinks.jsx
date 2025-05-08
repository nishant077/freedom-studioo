import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; 
import working1 from '../../assets/workimg1.jpg';
import working2 from '../../assets/workimg2.jpg';
import working3 from '../../assets/workimg3.jpg';
import working4 from '../../assets/workimg4.jpg';
import working5 from '../../assets/workimg5.jpg';
import working6 from '../../assets/workimg6.jpg';

const UsefulLinks = () => {
  const linkdata = [
    {
      title: 'UPCOMING EVENTS FOR OCTOBER',
      image: working1,
    },
    {
      title: 'SHORT COURSES',
      image: working2,
    },
    {
      title: 'LESSON RECORDINGS',
      image: working3,
    },
    {
      title: 'FITNESS WORKSHOPS',
      image: working4,
    },
    {
      title: 'TEAM CELEBRATIONS',
      image: working5,
    },
    {
      title: 'OTHER OFFICE ACTIVITIES',
      image: working6,
    },
  ];

  return (
    <div className='bg-[#4a4a4a] w-full mb-2 h-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-28'>
      <h2 className='mt-5 mb-12 font-droid text-3xl text-white text-center md:text-4xl font-bold'>
        Useful Links
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {linkdata.map((item, key) => (
          <div 
            key={key}
            className='group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full'
          >
            <div className='flex flex-1 p-5'>
              <div className='w-32 h-32 flex-shrink-0 mr-4'>
                <img 
                  src={item.image} 
                  className='h-full w-full object-cover rounded-lg'
                  alt={item.title}
                />
              </div>
              <div className='flex flex-col flex-1'>
                <h3 className='font-droid text-lg font-semibold text-gray-800 line-clamp-3'>
                  {item.title}
                </h3>
              </div>
            </div>
            <div className='px-5 pb-4 mt-auto'>
              <a 
                href="#" 
                className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors'
              >
                <span className='mr-2'>READ MORE</span>
                <FiArrowRight className='transition-transform group-hover:translate-x-1' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;