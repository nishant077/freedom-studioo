import React from 'react'
import './StrategyTactics.css'
import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import icon4 from '../../assets/4.png'
import icon5 from '../../assets/5.png'
import icon6 from '../../assets/6.png'
import { BsChatRightQuoteFill } from "react-icons/bs"

const StrategyTactics = () => {
  
    const data =[
      {
        icon:icon1,
        title:'Holding ground: Sitins at Maitighar Mandala',
        description:'In Nepal activists occupy symbolic spaces like Maitighar by ‘sitting-in’so that they become visible.'
      },
      {
        icon:icon6,
        title:'Yatra for Political Rights: One step at a time',
        description:'In Nepal activists occupy symbolic spaces like Maitighar by ‘sitting-in’so that they become visible.'
      },
      {
        icon:icon4,
        title:'Sacrifice before Surrender',
        description:'During the teachers’ protest in Kathmandu, teachers and activists gave blood on the street to show sacrifice and urgency. It flipped the script, where protest is both symbolic and lifesaving.'
      },

      {
        icon:icon5,
        title:'Taking voices of street to courtroom',
        description:'Activists challenge verdicts, file cases, and demand justice for Dalit lives. This tactic uses the law not only as a tool of defense, but as a tool of transformation.'
      },

      {
        icon:icon3,
        title:'Marching with empty buckets',
        description:'Environmental activists and community leaders marched with empty buckets in Chure region, showing the cost of illegal mining, deforestation and dried-up springs in Chure.'
      },

      {
        icon:icon2,
        title:'Music, Torans & Slogans',
        description:'Activists used songs, traditional instruments, Torans, banners, and slogans to carry memory, culture, and rebellion in different protests of Nepal.'
      },
      
    ]
   
  return (
    <div className='bg-[#9a1d20] h-auto text-white'>
      <div className='main'>
        <div className='page1'></div>
        <div className='page2 py-[5vw]'>
          <div className='moving-text'>
            <div className='con'>
              <h1 className='font-droid text-5xl'>T H E Y D E M A N D</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D R U M</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D E C O R A T E</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D I S R U P T</h1>
              <div className='gola'></div>
            </div>
        
          
            <div className='con'>
              <h1 className='font-droid text-5xl'>T H E Y D E M A N D</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D R U M</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D E C O R A T E</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D I S R U P T</h1>
              <div className='gola'></div>
            </div>
          
          
            <div className='con'>
              <h1 className='font-droid text-5xl'>T H E Y D E M A N D</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D R U M</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D E C O R A T E</h1>
              <div className='gola'></div>
              <h1 className='font-droid text-5xl'>T H E Y D I S R U P T</h1>
              <div className='gola'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center opacity-85 text-white'>
        <p className='w-[50%] text-justify text-lg'>For movement leaders, learning diverse tactics allows them to adapt to shift context, build collective
        power, avoid burnout, navigate repression, tell better stories and make change visible. Tactics are the
        heartbeats of movement, but strategy is the entire heart.</p>
      </div>
      <div className='flex justify-center items-center py-5 px-4'>
  <div className='border-2 border-gray-200 rounded-xl shadow-lg w-full max-w-6xl p-6 '>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map((item, index) => (
        <div 
          key={index}
          className='p-6'
        >
          <div className='flex flex-col items-center text-center'>
            <div className='w-32 h-32 rounded-full flex items-center justify-center mb-4'>
              <img src={item.icon} alt={item.title} className=''/>
            </div>
            <h3 className='text-xl font-droid font-semibold h-20  bg-orange-500 px-4 py-2 border-0 rounded-lg text-white mb-3'>{item.title}</h3>
            <p className='text-white text-sm opacity-85'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div className='pb-5 flex justify-center items-center'>
<BsChatRightQuoteFill size={40}/>
<div className='mt-28'>
    <p className='text-sm opacity-85'>Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.</p>
    <h3 className='font-droid text-3xl px-20 mt-5'>- SUN TUZ ‘THE ART OF WAR’</h3>
  </div>
  </div>

    </div>
  )
}

export default StrategyTactics;