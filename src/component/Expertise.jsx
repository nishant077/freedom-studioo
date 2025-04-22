import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import image1 from '../assets/workimg1.jpg';
import image2 from '../assets/workimg2.jpg';
import image3 from '../assets/workimg3.jpg';

const Expertise = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

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
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center md:text-4xl text-3xl font-bold text-gray-800'
                >
                    Our Expertise Includes:
                </motion.h2>
            </div>
            
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className='md:px-16 lg:px-28 px-4 md:py-10 pb-16'
            >
                {data.map((item, key) => (
                    <React.Fragment key={key}>
                        <motion.div 
                            variants={itemVariants}
                            className={`flex flex-col ${key % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center mt-5 w-full gap-8 md:gap-16 mb-16`}
                        >
                            <div className='md:w-1/3 w-full'>
                                <motion.img 
                                    whileHover={{ scale: 1.03 }}
                                    src={item.image} 
                                    className='w-full h-64 md:h-80 object-cover rounded-lg shadow-lg'
                                    alt={item.title}
                                />
                            </div>
                            <div className='md:w-2/3 w-full'>
                                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>{item.title}</h3>
                                
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
                        </motion.div>
                        
                        {key < data.length - 1 && (
                            <motion.div 
                                variants={itemVariants}
                                className="flex justify-center mb-16"
                            >
                                <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default Expertise;