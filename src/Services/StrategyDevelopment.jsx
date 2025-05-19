import React from 'react'
import knowledgedesign from '../assets/Strategy Building.jpeg'
import Navbar from '../Navigation/Navbar'
import working2 from '../assets/Policy.jpeg'
import working1 from '../assets/Gallery22.jpg';
import working3 from '../assets/Healing.jpeg';
import working4 from '../assets/Gallery21.jpeg';
import working5 from '../assets/Campaign.jpeg';
import working6 from '../assets/Institution.jpeg';
import Footer from '../component/Footer';

const StrategyDevelopment = () => {

     const offer = [
        {
          title: 'Co-Creation & Facilitation',
          image: working1,
        },
        {
          title: 'Policy & Governance Design',
          image: working2,
        },
        {
          title: 'Healing Centered Planning & Sessions',
          image: working3,
        },
        {
          title: 'Equity Driven Systems',
          image: working4,
        },
        {
          title: 'Campaign & Advocacy Strategy',
          image: working5,
        },
        {
          title: 'Institution Building Support',
          image: working6,
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
            From internal clarity to external impact, we co-create cultures, strategies &
            policies so you don’t just grow, you lead with purpose.
            </p>
            
         
          </div>
        </div>
      </div>
      
      <Navbar/>

     <div className='py-12 px-4 md:px-8 lg:px-32'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
            <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
                <img src={working2} className='h-auto  w-full object-cover' alt="KNOWLEDGE
DESIGN"/>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
                <h2 className='mt-5 mb-6 font-droid text-3xl md:text-6xl font-bold'>
                STRATEGY DEVELOPMENT</h2>
                <p className='opacity-80 text-justify  leading-relaxed'>
                Our Strategy Development services support
               businesses and social organizations in shaping
              internal culture and driving external impact. We
              facilitate collaborative planning processes, cocreate organizational frameworks, and help
              teams design wellbeing and equity driven
              policies. We develop healing centered strategies,
              policies and practices that guide teams in
              building effective internal culture and effective
               interventions.
                </p>
            </div>
        </div>
    </div>
 
    <div className='bg-[#4a4a4a] w-full mb-2 h-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-28'>
  <div className='max-w-7xl mx-auto'>
  
    <div className='text-center mb-16'>
      <h2 className='mt-5 mb-6 font-droid text-4xl text-white md:text-5xl font-bold'>
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