import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg'; 
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';

const Team = () => {
    const team = [
        {
            name: 'Nishchhal Kharel',
            role: 'Executive Director',
            image: team1
        },
        {
            name: 'Shila Bhatta',
            role: 'Creative Director',
            image: team2
        },
        {
            name: 'Pratik Karmacharya',
            role: 'Director of Advocacy',
            image: team3
        },
        {
            name: 'Aayush Pantha',
            role: 'Multimedia Manager',
            image: team4
        },
        {
            name: 'Binaya Rimal',
            role: 'Member',
            image: team5
        },
        {
            name: 'Sadikshya Singh',
            role: 'Member',
            image: team6
        },
    ];

    // Duplicate the team array to create seamless looping
    const duplicatedTeam = [...team, ...team, ...team];
    const containerRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(containerRef, { once: false });

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: ['0%', `-${100 / 3}%`], // Move by one-third of the total width
                transition: {
                    x: {
                        repeat: Infinity,
                        duration: 20,
                        ease: 'linear',
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [isInView, controls]);

    return (
        <div className='w-full h-auto bg-white md:py-20 py-10 md:px-10 px-4 overflow-hidden'>
            <div className='md:mt-5 mt-2'>
                <h2 className='md:text-4xl text-3xl font-droid text-center text-black'>Our Team</h2>
            </div>
            
            <div 
                ref={containerRef}
                className='relative w-full overflow-x-hidden py-10'
            >
                <motion.div
                    className='flex md:justify-between justify-center items-center md:mt-10 mt-5 gap-5'
                    animate={controls}
                    style={{ width: '300%' }} // Triple width to accommodate duplicates
                >
                    {duplicatedTeam.map((member, index) => (
                        <div 
                            key={`${member.name}-${index}`} 
                            className='flex-shrink-0 md:mt-10 mt-5'
                        >
                            <div className='w-full'>
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className='md:w-60 md:h-52 w-44 h-36 rounded-lg object-cover'
                                />
                            </div>
                            <div className='text-black mt-4 text-center'>
                                <h4 className='md:text-base text-sm font-normal'>{member.name}</h4>
                                <p className='md:text-sm text-xs font-thin opacity-80'>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Team;