import React, { useState, useEffect } from 'react';
import image1 from '../assets/Knowledge Development.jpeg';
import image2 from '../assets/Strategy Building.jpeg';
import image3 from '../assets/Digital Communication.jpeg';
import bulb from '../assets/bulb.png';
import world from '../assets/Countries.png'
import drop from '../assets/4.png'
import hand from '../assets/5.png'
import './Flip.css'
import { useNavigate } from 'react-router-dom';



const Expertise = () => {
 
  const navigate = useNavigate();

    const data = [
        {
            image: image1,
            title: 'STRATEGIC DESIGN',
            path:'/services/knowledge-design',
            description: 'From internal clarity to external impact, we co-create cultures, strategies & policies so you don’t just grow, you lead with purpose.',
            tags: ['Quantitative and Qualitative Research', 'Data Analysis and Visualization', 'Campaign Co-creation & Facilitation', 'Policy & Governance Design', 'Stakeholders Mapping','Program and Advocacy Planning', 'System Mapping','Design Thinking', 'Facilitating Strategic Retreats','Visualizing Systems','Co-developing Theories of Change','Curriculum and Workbook Design','Institution Building Support']
        },
        {
            image: image2,
            title: 'CREATIVE COMMUNICATION',
            path:'/services/strategy-development',
            description: 'Our communications are grounded in purpose and shaped by relevance, so you don’t just observe, you actively participate.',  

            tags: ['Campaign Storytelling',
                   'Brand Identity & Visual Design',
                   'Multimedia Production',
                'Video & Animation Production',
                   'Graphic & Illustration Design',
                   'Art Services',
                    'Interactive Installations',
                    'Cultural Production',
                    'Festival Organization',
                    'Exhibition Design',
                    'Social Media Strategy',
                     'Message Development']
        },
        {
            image: image3,
            title: 'DIGITAL TRANSFORMATION',
            path:'/services/digital-communication',
            description: 'We build meaningful digital systems, so movements and organizations don’t just adapt; they thrive in a rapidly changing world.', 

            tags: ['Website & Platform Development',
  'Digital Ecosystem Strategy',
  'User Experience (UX/UI) Design',
  'Civic Tech Tools',
  'Data-Driven Campaign Infrastructure',
  'Mapping & Visualization Tools',
  'Digital Security & Accessibility Integration',
  'Online Learning Spaces',
  'Community Portals',
  'Digital Presence Strategy',
  'Digital Transformation Strategy']
        }
    ];

    const data2 = [
      {
        icon: bulb,
        front: 'Listen',
        back: 'We begin by listening, deeply and respectfully, to communities, clients, cultures, and contexts. This grounds everything we build in real needs and lived experiences.',
        bgColor: '#151e3f'
      },
      {
        icon: world,
        front: 'Feel',
        back: 'We design with care. By centering emotional wellbeing and collective healing, we ensure our work nourishes people, clients and communities as much as it delivers results.',
        bgColor: '#008080'
      },
      {
        icon: drop,
        front: 'Create',
        back: 'We turn insight into bold ideas, visual narratives, and digital tools that spark imagination, shift narratives, and strengthen systems.',
        bgColor: '#9a1d20'
      },
      {
        icon: hand,
        front: 'Impact',
        back: 'We ensure our actions create lasting change, foster growth for our partners, strengthen communities, and build momentum for movements.',
        bgColor: '#bb3e03'
      }
    ];
    

const sWordParts = ['TRATEGY ', 'TORY ', 'YSTEMS ', 'OULS ']; 
  const [sCurrentIndex, setSCurrentIndex] = useState(0);
  const [sCurrentText, setSCurrentText] = useState(sWordParts[0]);
  const [sIsDeleting, setSIsDeleting] = useState(false);
  const sTypingSpeed = 150;
  const sDeletingSpeed = 50;
  const sDelayBetweenWords = 1500;

  useEffect(() => {
    let timeout;
    
    if (sIsDeleting) {
      if (sCurrentText.length > 0) {
        timeout = setTimeout(() => {
          setSCurrentText(sCurrentText.substring(0, sCurrentText.length - 1));
        }, sDeletingSpeed);
      } else {
        setSIsDeleting(false);
        setSCurrentIndex((prev) => (prev + 1) % sWordParts.length);
      }
    } else {
      if (sCurrentText.length < sWordParts[sCurrentIndex].length) {
        timeout = setTimeout(() => {
          setSCurrentText(sWordParts[sCurrentIndex].substring(0, sCurrentText.length + 1));
        }, sTypingSpeed);
      } else {
        timeout = setTimeout(() => {
          setSIsDeleting(true);
        }, sDelayBetweenWords);
      }
    }

    return () => clearTimeout(timeout);
  }, [sCurrentText, sCurrentIndex, sIsDeleting, sWordParts]);

  const handleCardClick = (path) => {
    navigate(path);
  };



    return (
        <div className="relative bg-white w-full overflow-hidden">
            <div className='md:px-16 lg:px-28 px-4 md:py-10 py-5 pb-16'>
            <h2 
                    className='text-center md:text-4xl text-2xl font-droid'
                >
                   Who We Are 
                </h2>
            <div className="flex justify-center items-center mt-4">
  <div className="w-full md:w-3/4 h-auto border-0 rounded-lg p-4">
    <p className="text-base font-light text-center">
    To help ethical brands, grassroots movements, and social organizations  
    show up with <span className='text-[#9a1d20] font-bold'>clarity, creativity, and consciousness.</span> 
      <br></br>
      For more people. In more places. With more purpose.
    </p>
   
    <div className="mt-2 flex justify-center p-4 text-xl">
              <div className="flex items-baseline">
                <span className="font-droid md:text-4xl text-2xl  text-[#9a1d20]">S</span>
                <span className="font-droid md:text-4xl text-2xl text-black relative">
                  {sCurrentText}
                </span>
              </div>
            </div>
           
  </div>
</div>
     
     <h3 className='font-droid text-xl text-center md:mt-3 mt-1'>The Freedom Formula:</h3>
      <p className='text-center text-xl font-medium opacity-85'>Our signature approach weaves together four driving forces: </p>

{/* <div className='flip-card-container md:flex md:justify-around mt-5 flex-wrap flex justify-center items-center gap-4 cursor-pointer md:mb-4'>
      {data2.map((item, key) => (
        <div key={key} className="flip-card w-60 h-32">
          <div className="flip-card-inner">
          
            <div className='flip-card-front bg-black rounded-md flex overflow-hidden'>
              <div className='bg-[#9a1d20] flex items-center justify-center w-32'>
                <img src={item.icon} className='w-32 h-32 object-contain' alt={item.front}/>
              </div>
              <div className='px-4 text-2xl text-white font-droid flex items-center justify-center flex-1'>
                <h3>{item.front}</h3>
              </div>
            </div>

            <div className='flip-card-back bg-[#9a1d20] rounded-md flex items-center justify-center p-4'>
              <p className='text-white text-sm text-center'>{item.back}</p>
            </div>
          </div>
        
        </div>
      ))}
    </div> */}

<div className='card-container px-4 py-8 md:px-8 lg:px-12 w-full'>
  <div className='max-w-7xl mx-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
      {data2.map((item, key) => (
        <div 
          key={key} 
          className={`h-full min-h-[320px] bg-opacity-80 hover:bg-opacity-90 text-white rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm`}
          style={{ backgroundColor: `${item.bgColor}80` }} 
        >
          <div className='p-4 h-full flex flex-col'>
            <div className='flex justify-center items-center mb-6'>
              <img 
                src={item.icon} 
                className='w-28 h-28 object-contain' 
                alt={item.front} 
              />
            </div>
            <h3 className='text-center font-droid text-2xl font-bold mb-4'>{item.front}</h3> 
            <p className='text-center text-white text-opacity-90 flex-grow'>{item.back}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    </div>
            <div className='py-3 md:py-5 px-4'>
                <h2 
                    className='text-center md:text-4xl text-2xl font-droid'
                >
                    What We Do
                </h2>
            </div>
            
            <div 
              
                className='md:px-16 lg:px-28 px-4 md:py-10 pb-16'
            >
                {data.map((item, key) => (
                    <React.Fragment key={key}>
                        <div 
                           onClick={() => handleCardClick(item.path)}
                            className={`flex flex-col ${key % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center mt-5 w-full gap-8 md:gap-16 mb-16 cursor-pointer`}
                        >
                            <div className='md:w-1/3 w-full'>
                                <img 
                                   
                                    src={item.image} 
                                    className='w-full h-64 md:h-80 object-cover rounded-lg shadow-lg'
                                    alt={item.title}
                                />
                            </div>
                            <div className='md:w-2/3 w-full'>
                                <h3 className='text-2xl font-droid mb-4'>{item.title}</h3>
                                
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {item.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className='px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <p className='text-lg text-gray-600 leading-relaxed'>{item.description}</p>
                            </div>
                        </div>
                        
                        {key < data.length - 1 && (
                            <div 
                               
                                className="flex justify-center mb-16"
                            >
                                <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}    


         
            </div>
         
        </div>
    );
};

export default Expertise;