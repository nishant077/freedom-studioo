import React from 'react'
import knowledgedesign from '../assets/Knowledge Development.jpeg'
import Navbar from '../Navigation/Navbar'
import working2 from '../assets/kd.jpeg'
import working1 from '../assets/Gallery5.jpeg';
import working3 from '../assets/Gallery20.jpeg';
import working4 from '../assets/gallery2.jpeg';
import working5 from '../assets/Gallery12.jpeg';
import working6 from '../assets/Strategy Building.jpeg';
import working7 from '../assets/gallery1.jpeg';
import working8 from '../assets/Gallery3.jpg';
import working9 from '../assets/Gallery18.jpg';
import working10 from '../assets/Gallery21.jpeg';
import working11 from '../assets/Gallery22.jpg';
import working12 from '../assets/Gallery23.jpg';
import working13 from '../assets/Healing.jpeg';

import Footer from '../component/Footer';

const KnowledgeDesign = () => {

     const offer = [
        {
          title: 'Design Thinking',
          image: working1,
        },
        {
          title: 'Data Analysis and Visualization',
          image: working2,
        },
        {
          title: 'Quantitative and Qualitative Research',
          image: working3,
        },
        {
          title: 'Campaign Co-creation & Facilitation',
          image: working4,
        },
        {
          title: 'Policy & Governance Design',
          image: working5,
        },
        {
          title: 'Program and Advocacy Planning',
          image: working6,
        },
        {
          title: 'Systems Mapping',
          image: working7,
        },
        {
          title: 'Facilitating Strategic Retreats',
          image: working8,
        },
        {
          title: 'Visualizing Systems',
          image: working9,
        },
        {
          title: 'Co-developing Theories of Change',
          image: working10,
        },
        {
          title: 'Stakeholders Mapping',
          image: working11,
        },
        {
          title: 'Curriculum and Workbook Design',
          image: working12,
        },
        {
          title: 'Institution Building Support',
          image: working13,
        },

      ];
  return (
    <>
      <div className='relative h-screen w-full overflow-hidden bg-black'>
   
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
              WE THINK WITH PURPOSE
            </h3>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white opacity-90 leading-relaxed'>
            From internal clarity to external impact, we co-create cultures, strategies & policies so you don’t just grow, you lead with purpose.
            </p>
            
            {/* CTA Button */}
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
                <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold'>STRATEGIC DESIGN</h2>
                <p className='opacity-80 text-justify  leading-relaxed'>
                We support movements, organizations, ethical business in creating internal clarity and external impact by co-creating cultures, strategies, and policies that are grounded in purpose. Our work spans from design thinking and participatory research
                to systems mapping and advocacy planning. Whether facilitating strategic retreats, building institutional frameworks, or co-developing theories of change, we enable movements, organizations and ethical business to navigate complexity, lead with intention, and design sustainable pathways for transformation.
                </p>
            </div>
        </div>
    </div>
  
    <div className='bg-[#4a4a4a] w-full mb-2 h-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-28'>
  <div className='max-w-7xl mx-auto'>
 
    <div className='text-center mb-16'>
      <h2 className='mt-5 mb-6 font-droid text-3xl text-white md:text-4xl font-bold'>
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

export default KnowledgeDesign