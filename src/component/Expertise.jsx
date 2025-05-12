import React from 'react';
import image1 from '../assets/workimg1.jpg';
import image2 from '../assets/workimg2.jpg';
import image3 from '../assets/workimg3.jpg';

const Expertise = () => {
 

    const data = [
        {
            image: image1,
            title: 'Multimedia and Storytelling',
            description: 'Multimedia & Storytelling From the streets to the screen, we tell stories that matter. With video, sound, visuals, and heart, we craft narratives that move people, build momentum, and create meaning.',
            tags: ['Video Production', 'Digital Storytelling', 'Content Strategy', 'Brand Narrative']
        },
        {
            image: image2,
            title: 'Institution Building and Well being',
            description: 'Institution Building & Wellbeing Strong missions need strong foundations. We support organizations to grow with clarity, care, and culture, building teams, systems, and strategies that last.',  
            tags: ['Organizational Development', 'Team Building', 'Workplace Wellness', 'Leadership Training']
        },
        {
            image: image3,
            title: 'Data Analysis and Research',
            description: 'Data, Research & Insights We turn questions into clarity. By blending research with creative analysis, we make sense of the complex, so you can make smarter decisions and deeper impact.', 
            tags: ['Data Visualization', 'Market Research', 'Analytics', 'Impact Measurement']
        }
    ];

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
            </div>
        </div>
    );
};

export default Expertise;