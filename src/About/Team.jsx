import React from 'react'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg' 
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'


const Team = () => {

    const team=[
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
  return (
    <>
     <div className='w-full h-auto bg-black md:py-20 py-10 md:px-10 px-4 '>
  <div className='md:mt-5 mt-2'>
  <h3 className='md:text-5xl text-2xl text-center text-white'>Our Team</h3>
 </div>
 <div className='flex md:justify-between flex-wrap justify-center items-center md:mt-10 mt-5 gap-5'>
    {team.map((member, index) => (
        <div key={index} className='md:mt-10 mt-5'>
            <div className='w-full'>
                <img src={member.image} alt={member.name} className='md:w-60 md:h-52 w-44 h-36 rounded-lg object-cover' />
            </div>
            <div className='text-white mt-4 text-center'>
                <h4 className='md:text-base text-sm font-normal'>{member.name}</h4>
                <p className='md:text-sm text-xs font-thin opacity-80'>{member.role}</p>
            </div>
        </div>
    ))}
 </div>
 </div>
    </>
  )
}

export default Team