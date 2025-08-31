import React from 'react'
import knowledgedesign from '../assets/Strategy Building.jpeg'
import Navbar from '../Navigation/Navbar'
import working2 from '../assets/Policy.jpeg'
import working1 from '../assets/Gallery22.jpg';
import working3 from '../assets/Healing.jpeg';
import working4 from '../assets/Gallery21.jpeg';
import working5 from '../assets/Campaign.jpeg';
import working6 from '../assets/Institution.jpeg';
import working7 from '../assets/gallery1.jpeg';
import working8 from '../assets/gallery2.jpeg';
import working9 from '../assets/Gallery3.jpg';
import working10 from '../assets/Gallery5.jpeg';
import working11 from '../assets/Gallery7.jpeg';
import working12 from '../assets/Gallery14.jpeg';
import Footer from '../component/Footer';

const StrategyDevelopment = () => {

     const offer = [
        {
          title: 'Campaign Storytelling',
          image: working1,
        },
        {
          title: 'Brand Identity & Visual Design',
          image: working2,
        },
        {
          title: 'Multimedia Production',
          image: working3,
        },
        {
          title: 'Video and Animation Production',
          image: working4,
        },
        {
          title: 'Graphic and Illustration Design',
          image: working5,
        },
        {
          title: 'Art Services',
          image: working6,
        },
        {
          title: 'Interactive Installations',
          image: working7,
        },
        {
          title: 'Cultural Production',
          image: working8,
        },
        {
          title: 'Organize Festivals',
          image: working9,
        },
        {
          title: 'Design Exhibitions',
          image: working10,
        },
        {
          title: 'Social Media Strategy',
          image: working11,
        },
        {
          title: 'Message Development',
          image: working12,
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
        
        {/* Content */}
        <div className='relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center md:text-left md:ml-20 lg:ml-32'>
            <h3 className='font-droid text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            WE BUILD WITH INTENTION
            </h3>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white opacity-90 leading-relaxed'>
            Our communications are grounded in purpose and shaped by relevance, so you don’t just observe, you actively participate.
            </p>
            
         
          </div>
        </div>
      </div>
      
      <Navbar/>

     <div className='py-12 px-4 md:px-8 lg:px-32'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
            <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
                <img src={working2} className='h-auto  w-full object-cover' alt="CREATIVE COMMUNICATION
"/>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
                <h2 className='mt-5 mb-6 font-droid text-2xl md:text-4xl font-bold'>
               CREATIVE COMMUNICATION</h2>
                <p className='opacity-80 text-justify  leading-relaxed'>
                We craft communication that moves people, not just to watch or read, but to engage, act, and transform. From powerful campaign storytelling to immersive cultural productions, we bring ideas to life through multimedia, illustrations, video, animation, art curation, and public installations. Whether developing brand identities, designing exhibitions, or amplifying messages on social media, we blend art and advocacy to create stories that resonate and inspire action.
                </p>
            </div>
        </div>
    </div>
 
    <div className='bg-[#4a4a4a] w-full  h-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-28'>
  <div className='max-w-7xl mx-auto'>
  
    <div className='text-center mb-16'>
      <h2 className='mt-5 mb-6 font-droid text-2xl text-white md:text-4xl font-bold'>
        WHAT WE OFFER
      </h2>
      <div className='w-20 h-1 bg-[#9a1d20] mx-auto mb-8'></div>
    </div>

    {/* Cards Grid */}
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

export default StrategyDevelopment