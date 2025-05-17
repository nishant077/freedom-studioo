import React from 'react';
import logo1 from '../assets/NED_logo2.png';
import logo2 from '../assets/worldMovement.jpg';
import logo3 from '../assets/chevening.png';
import logo4 from '../assets/ICVA.png';
import logo5 from '../assets/globalfund.jpeg';
import logo6 from '../assets/civicus.jpeg';
import logo7 from '../assets/IRI.png';
import logo8 from '../assets/Moleskine.avif';
import logo9 from '../assets/google.webp';
import logo10 from '../assets/asiaFoundation.jpg';

const Partners = () => {
  const partnersLogo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  return (
    <div className='bg-white w-full h-auto py-12 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Header with vertical line */}
        <div className='flex flex-col md:flex-row items-center mb-12 gap-8 md:gap-16'>
          <div className='relative'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-droid font-bold text-gray-900 text-center md:text-left'>
              Trusted by our <span className='text-yellow-600'>partners</span>
            </h2>
            <div className='hidden md:block absolute -right-8 top-0 w-px h-full bg-gray-300'></div>
          </div>
          
          <p className='text-gray-600 text-center md:text-left text-lg max-w-2xl'>
            We collaborate with leading organizations worldwide to drive innovation and create meaningful impact.
          </p>
        </div>

        {/* Logo grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8'>
          {partnersLogo.map((item, key) => (
            <div 
              key={key} 
              className='flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100'
            >
              <img 
                src={item} 
                alt={`Partner logo ${key+1}`} 
                className='w-full h-auto max-h-20 object-contain object-center grayscale hover:grayscale-0 transition-all duration-500'
                style={{ filter: 'grayscale(100%) contrast(1)' }}
              />
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Partners;