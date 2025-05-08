import React from 'react'
import tatics from '../../assets/tatics.webp'

const LearningSessions = () => {
  return (
   <>
      <div className='py-12 px-4 md:px-8 lg:px-32'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
              <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
                  <img src={tatics} className='h-auto  w-full object-cover' alt="Learning Corner"/>
              </div>
              <div className='lg:w-1/2 order-1 lg:order-2 bg-[#4a4a4a] py-10 px-10 text-white border-0 rounded-lg'>
                  <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold'>New Learning Sessions</h2>
                   <h3 className='text-lg mt-5 font-droid'>EFFECTIVE LEADERSHIP</h3>
                  <p className='opacity-80 text-justify  leading-relaxed'>
                  Learn how to become a better, more compassionate and
                  ultimately more effective leader in this hour-long session with
                  esteemed Life Coach, Daniel Gallego.</p>
                
                 <h3 className='text-lg mt-5 font-droid'>COMMUNICATING WITH CONFIDENCE</h3>
                 <p className='opacity-80 text-justify  leading-relaxed'>A panel of experts in communication and psychology gives their
                 tips and tricks for conveying your messages confidently and
                   effectively.</p>
      <h3 className='text-lg mt-5 font-droid'>RALLYING TEAMS</h3>
            <p className='opacity-80 text-justify  leading-relaxed'>   Collaboration is key to the success of projects. Learn how to
                leverage on a team's skills and rally them towards achieving
                    goals.
                  </p>
              </div>
          </div>
      </div>
   </>
  )
}

export default LearningSessions