import React from 'react'
import solveproblem from '../assets/solveproblem.jpg'

const SolveProblem = () => {
  return (
    <>
      <div className=' md:py-20 px-4 md:px-8 lg:px-16 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto'>
          
          {/* Image Section */}
          <div className='relative order-1 md:order-1'>
            <div className='w-full h-full'>
              <img 
                src={solveproblem} 
                alt="Solving problems together" 
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className='space-y-8 md:space-y-10 order-2 md:order-2'>
            
            {/* Problem Section */}
            <div className='relative pl-6 border-l-4 border-[#9a1d20]'>
              <h1 className='text-2xl md:text-3xl font-droid mb-4'>
                What is the Problem that we solve?
              </h1>
              <p className=' text-sm md:text-base leading-relaxed text-justify'>
                Social movements, grassroots organizations, and small businesses often lack the capacity and infrastructure to design effective strategies, engage target groups through creative communication, and utilize digital tools that elevate their work.
              </p>
            </div>
            
            {/* Solution Section */}
            <div className='relative pl-6 border-l-4 border-[#008080]'>
              <h1 className='text-2xl md:text-3xl font-droid mb-4'>
                How do we solve it?
              </h1>
              <p className=' text-sm md:text-base leading-relaxed text-justify'>
                Freedom Studio bridges this gap by providing strategic, creative, and digital solutions tailored to the unique needs of organizations. We work together with our partners to design impactful strategies, craft compelling stories, and develop digital systems that scale their efforts and deepen their impact.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default SolveProblem