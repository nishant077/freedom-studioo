import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import team1 from '../assets/Nishchhal.png';
import team2 from '../assets/team2.jpg'; 
import team3 from '../assets/team3.jpg';
import team4 from '../assets/Aayush.jpeg';
import team5 from '../assets/Sijendra.png';
import team6 from '../assets/Renu.jpg';
import team7 from '../assets/Ajit Kumar Bashyal.jpeg';
import team8 from '../assets/Binaya Rimal.jpeg';
import team9 from '../assets/Rishita Khatri.jpeg';
import team10 from '../assets/Sahaj.jpeg'
import team11 from '../assets/Aditya.png';
import team12 from '../assets/Bikki.png';

const Team = () => {
    const team = [
        {
            name: 'Nishchhal Kharal',
            role: 'Chief Executive Officer',
            image: team1
        },
        {
            name: 'Shila Bhatta',
            role: 'Creative Director',
            image: team2
        },
        {
            name: 'Pratik Karmacharya',
            role: 'Advocacy Director',
            image: team3
        },
        {
            name: 'Aayush Pantha',
            role: 'Multimedia Director',
            image: team4
        },
        {
            name: 'Sijendra Thapa',
            role: 'Multimedia Manager',
            image: team5
        },
        {
            name: 'Renu Ghimire',
            role: 'Program Officer',
            image: team6
        },
        {
            name: 'Ajit Kumar Bashyal',
            role: 'Operations Associate',
            image: team7
        },
        {
            name: 'Binaya Rimal',
            role: 'Art Curator',
            image: team8
        },
        {
            name: 'Rishita Khatri',
            role: 'Artist Curator',
            image: team9
        },
        {
            name: 'Sahaj Tamrakar',
            role: 'Animator',
            image: team10
        },
        {
            name: 'Aaditya Acharya',
            role: ' Multimedia Associate',
            image: team11
        },
        {
            name: 'Bikki Tamang',
            role: 'Illustrator',
            image: team12
        },
       
    ];

    const [currentGroup, setCurrentGroup] = useState(0);
    const cardsPerGroup = 4;
    const totalGroups = Math.ceil(team.length / cardsPerGroup);

    const nextGroup = () => {
        setCurrentGroup((prev) => (prev + 1) % totalGroups);
    };

    const prevGroup = () => {
        setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
    };

    const getCurrentCards = () => {
        const startIndex = currentGroup * cardsPerGroup;
        const endIndex = startIndex + cardsPerGroup;
        return team.slice(startIndex, endIndex);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-droid text-gray-800  mb-2">Our Team</h2>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentGroup}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center gap-6"
                        >
                            {getCurrentCards().map((member, index) => (
                                <motion.div
                                    key={`${member.name}-${index}`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden w-64 flex-shrink-0"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-droid text-gray-800">{member.name}</h3>
                                        <p className="text-[#9a1d20] text-sm font-medium">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <button 
                        onClick={prevGroup}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9a1d20]"
                        aria-label="Previous group"
                    >
                        <FaChevronLeft className="text-[#9a1d20] text-xl" />
                    </button>
                    
                    <button 
                        onClick={nextGroup}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9a1d20]"
                        aria-label="Next group"
                    >
                        <FaChevronRight className="text-[#9a1d20] text-xl" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalGroups }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentGroup(index)}
                            className={`w-3 h-3 rounded-full ${currentGroup === index ? 'bg-[#9a1d20]' : 'bg-gray-300'}`}
                            aria-label={`Go to group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;