

import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; 
import working1 from '../../assets/gallery2.jpeg';
import working2 from '../../assets/Gallery12.jpeg';
import working3 from '../../assets/Gallery11.jpeg';


const UsefulLinks = () => {
  const linkdata = [
    {
      title: 'Caste Conversation ',
      description:'Who gets to tell their story? This episode explores how caste shapes whose voices are heard, and how creatives are pushing back.',
      image: working1,
      link:'https://youtu.be/FYm-W6jeIl4?si=8COky2gePGOWgOHZ',
    },
    {
      title: 'Beautiful Trouble ',
      description:'Who says protest can’t be creative? This toolkit blends bold ideas, tactics, and stories to help movements fight for justice.',
      image: working2,
      link:'https://beautifultrouble.org/',
    },
    {
      title: 'ICNC E-Library',
      description:'Want to change the world without violence? This library offers real stories, tools, and research to power peaceful resistance.',
      image: working3,
      link:'https://www.nonviolent-conflict.org/for-scholars-educators-students/e-library-on-civil-resistance/'
    },
  ];

  return (
    <div className='bg-white w-full mb-2 h-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-28'>
      <h2 className='mt-5 mb-12 font-droid text-3xl  text-center md:text-4xl font-bold'>
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
                <p className='text-xs py-2'>{item.description}</p>
              </div>
            </div>
            <div className='px-5 pb-4 mt-auto'>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors'
              >
                <span className='mr-2'>READ MORE</span>
                <FiArrowRight className='transition-transform group-hover:translate-x-1' />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center py-10'>
      <p className='font-droid  text-2xl  w-[60%]'>
      Thanks for taking the time to engage with this.
     We appreciate your interest and hope it
     sparked some new thoughts.
      </p>
      </div>
    </div>
  );
};

export default UsefulLinks;