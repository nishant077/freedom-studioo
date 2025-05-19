import React from 'react';
import image1 from '../assets/Knowledge Development.jpeg';
import image2 from '../assets/Strategy Building.jpeg';
import image3 from '../assets/Digital Communication.jpeg';
import bulb from '../assets/bulb.png';
import world from '../assets/Countries.png'
import drop from '../assets/4.png'
import './Flip.css'


const Expertise = () => {
 

    const data = [
        {
            image: image1,
            title: 'KNOWLEDGE DESIGN',
            description: 'From data to direction, we turn complexity into clarity, so you don’t just analyze, you act with insight.',
            tags: ['Quantitative and Qualitative Research', 'Data Analysis', 'Data Visualization', 'Stakeholder and Market Scrutiny', 'System Mapping','Design Thinking']
        },
        {
            image: image2,
            title: 'STRATEGY DEVELOPMENT',
            description: 'From internal clarity to external impact, we co-create cultures, strategies & policies so you don’t just grow, you lead with purpose.',  
            tags: ['Co-Creation & Facilitation', 'Policy & Governance Design', 'Healing Centered Planning & Sessions', 'Equity Driven Systems','Campaign & Advocacy Strategy','Institution Building Support']
        },
        {
            image: image3,
            title: 'DIGITAL COMMUNICATION',
            description: 'Our campaigns are grounded in purpose and shaped by relevance so you don’t just post, you participate.', 
            tags: ['Multimedia Video Production', 'Narrative Development & Storyboarding', 'Digital Transformation Strategy', 'Creative Branding & Campaign','Social Media Design & Marketing','Event Coverage']
        }
    ];

    const data2=[
        {
           icon : bulb,
           front: 'Insight',
           back:'We decode data, lived realities, and emerging needs to generate actionable intelligence.'
    },

    {
        icon : world,
        front: 'Culture',
        back:'We listen deeply to social shifts, behaviors, and values to help organizations align with the world people are building.'
 },
 
 {
    icon : drop,
    front: 'Empathy',
    back:'We center human experience to co- create solutions that heal, engage, and drive equity.'
},
]

    return (
        <div className="relative bg-white w-full overflow-hidden">
            <div className='py-10 md:py-16 px-4'>
                <h2 
                    className='text-center md:text-4xl text-3xl font-droid text-gray-800'
                >
                    Our Expertise Includes:
                </h2>
            </div>
            
            <div 
              
                className='md:px-16 lg:px-28 px-4 md:py-10 pb-16'
            >
                {data.map((item, key) => (
                    <React.Fragment key={key}>
                        <div 
                          
                            className={`flex flex-col ${key % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center mt-5 w-full gap-8 md:gap-16 mb-16`}
                        >
                            <div className='md:w-1/3 w-full'>
                                <img 
                                   
                                    src={item.image} 
                                    className='w-full h-64 md:h-80 object-cover rounded-lg shadow-lg'
                                    alt={item.title}
                                />
                            </div>
                            <div className='md:w-2/3 w-full'>
                                <h3 className='text-2xl font-droid text-gray-800 mb-4'>{item.title}</h3>
                                
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

<div className="flex justify-center items-center p-4">
  <div className="bg-[#9a1d20] w-full md:w-3/4 h-auto border-0 rounded-lg p-4">
    <p className="p-4 md:p-5 text-white text-lg font-semibold text-center">
      We help ethical brands and social organizations
      show up more clearly, more creatively and more consciously.
      For more people. In more places. With more purpose.
    </p>
    <div className="mt-2 flex flex-col sm:flex-row justify-between items-center p-4 text-white text-xl gap-2 sm:gap-0">
      <span className="font-droid border-0 rounded-lg bg-black p-3 w-full sm:w-auto text-center">STORY</span>
      
      {/* Desktop-only dotted divider */}
      <div className="hidden sm:block flex-1 mx-2 border-t-2 border-dotted border-white opacity-50"></div>
      
      <span className="font-droid border-0 rounded-lg bg-black p-3 w-full sm:w-auto text-center">STRATEGY</span>
      
      {/* Desktop-only dotted divider */}
      <div className="hidden sm:block flex-1 mx-2 border-t-2 border-dotted border-white opacity-50"></div>
      
      <span className="font-droid border-0 rounded-lg bg-black p-3 w-full sm:w-auto text-center">SYSTEMS</span>
    </div>
  </div>
</div>
     
     <h3 className='font-droid text-xl text-center md:mt-3 mt-1'>The Freedom Formula:</h3>
      <p className='text-center text-xl font-medium opacity-85'>Our signature approach blends three core forces</p>

       {/* <div className='md:flex md:justify-around mt-5 flex-wrap flex justify-center items-center space-y-4 cursor-pointer md:mb-4'>
           {
            data2.map((item,key)=>(
                <div className='border-0 bg-black rounded-md flex justify-between w-56'>
                    <div className='bg-[#9a1d20] '>
                    <img src={item.icon} className='w-20 h-20 object-cover'/>
                    </div>
                    <div className='px-10 text-lg text-white font-droid flex justify-center items-center'>
                    <h3>{item.front}</h3>
                    </div>
                </div>
            )
           )}
       </div> */}

<div className='flip-card-container md:flex md:justify-around mt-5 flex-wrap flex justify-center items-center gap-4 cursor-pointer md:mb-4'>
      {data2.map((item, key) => (
        <div key={key} className="flip-card w-56 h-20">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className='flip-card-front bg-black rounded-md flex overflow-hidden'>
              <div className='bg-[#9a1d20] flex items-center justify-center w-20'>
                <img src={item.icon} className='w-20 h-20 object-contain' alt={item.front}/>
              </div>
              <div className='px-4 text-lg text-white font-droid flex items-center justify-center flex-1'>
                <h3>{item.front}</h3>
              </div>
            </div>

            {/* Back Side */}
            <div className='flip-card-back bg-[#9a1d20] rounded-md flex items-center justify-center p-4'>
              <p className='text-white text-xs text-center'>{item.back}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
         
            </div>
         
        </div>
    );
};

export default Expertise;