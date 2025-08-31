import React from 'react'
import knowledgedesign from '../assets/Digital Communication.jpeg'
import Navbar from '../Navigation/Navbar'
import working2 from '../assets/Gallery7.jpeg'
import working1 from '../assets/Gallery24.jpeg';
import working3 from '../assets/Gallery14.jpeg';
import working4 from '../assets/Creative.jpeg';
import working5 from '../assets/Gallery17.jpeg';
import working6 from '../assets/Event.jpeg';
import working7 from '../assets/Gallery4.jpeg';
import working8 from '../assets/Gallery6.jpeg';
import working9 from '../assets/Gallery8.jpeg';
import working10 from '../assets/Gallery11.jpeg';
import working11 from '../assets/Gallery12.jpeg';

import Footer from '../component/Footer';

const DigitalDevelopment = () => {

     const offer = [
        {
          title: 'Website & Platform Development',
          image: working1,
        },
        {
          title: 'Digital Ecosystem Strategy',
          image: working2,
        },
        {
          title: 'User Experience (UX/UI) Design',
          image: working3,
        },
        {
          title: 'Civic Tech Tools',
          image: working4,
        },
        {
          title: 'Data-Driven Campaign Infrastructure',
          image: working5,
        },
        {
          title: 'Digital Security & Accessibility Integration',
          image: working6,
        },
        {
          title: 'Mapping & Visualization Tools',
          image: working7,
        },
        {
          title: 'Online Learning Spaces',
          image: working8,
        },
        {
          title: 'Community Portals',
          image: working9,
        },
        {
          title: 'Digital Presence Strategy',
          image: working10,
        },
        {
          title: 'Digital Transformation Strategy',
          image: working11,
        },
      ];
  return (
    <>
      <div className='relative h-screen w-full overflow-hidden bg-black opacity-95'>
      
        <div className='absolute inset-0 z-0'>
          <img 
            src={knowledgedesign} 
            alt='Knowledge Design' 
            className='w-full h-full object-cover opacity-70'
          />
        </div>
        
      
        <div className='relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center md:text-left md:ml-20 lg:ml-32'>
            <h3 className='font-droid text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            WE MOVE WITH MEANING
            </h3>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white opacity-90 leading-relaxed'>
            We build meaningful digital systems, so movements and organizations don’t just adapt; they thrive in a rapidly changing world.
            </p>
            
         
          </div>
        </div>
      </div>
      
      <Navbar/>

     <div className='py-12 px-4 md:px-8 lg:px-32'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
            <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
                <img src={working2} className='h-auto  w-full object-cover' alt="DIGITAL TRANSFORMATION
"/>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
                <h2 className='mt-5 mb-6 font-droid text-2xl md:text-4xl font-bold'>
                DIGITAL TRANSFORMATION</h2>
                <p className='opacity-80 text-justify  leading-relaxed'>
                We create digital ecosystems that enable movements, organizations and small businesses to flourish in an ever evolving world. Our approach combines platform development with UX/UI design, civic tech innovation, and data-driven tools to support learning, collaboration, and campaigning. From interactive engagement to secure online spaces, we ensure accessibility, safety, and strategic alignment so that partners digital presence is transformed.
                </p>
            </div>
        </div>
    </div>
  
    <div className='bg-[#4a4a4a] w-full h-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-28'>
  <div className='max-w-7xl mx-auto'>
  
    <div className='text-center mb-16'>
      <h2 className='mt-5 mb-6 font-droid text-2xl text-white md:text-4xl font-bold'>
        WHAT WE OFFER
      </h2>
      <div className='w-20 h-1 bg-[#9a1d20] mx-auto mb-8'></div>
    
    </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {offer.map((item, key) => (
        <div 
          key={key}
          className='group relative bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full'
        >
         
          <div className='overflow-hidden'>
            <img 
              src={item.image} 
              className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
              alt={item.title}
            />
          </div>
          
     
          <div className='p-6 flex flex-col flex-1'>
            <h3 className='font-droid text-xl font-bold text-black mb-3 group-hover:text-[#9a1d20] transition-colors duration-300'>
              {item.title}
            </h3>
            
          </div>
          
       
          <div className='absolute inset-0 border-2 border-transparent group-hover:border-[#9a1d20] rounded-xl pointer-events-none transition-all duration-500'></div>
        </div>
      ))}
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default DigitalDevelopment