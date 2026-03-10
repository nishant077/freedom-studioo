import React from 'react'
import bulb from '../assets/bulb.png';
import world from '../assets/Countries.png'
import drop from '../assets/4.png'
import hand from '../assets/5.png'

const FreedomFormula = () => {

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
  return (
    <div>
             
     <h3 className='font-droid md:text-3xl text:2xl  text-center md:mt-3 mt-1'>The Freedom Formula:</h3>
      <p className='text-center text-xl font-medium opacity-85'>Our signature approach weaves together four driving forces: </p>

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
  )
}

export default FreedomFormula