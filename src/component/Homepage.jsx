import React from 'react'
import homepageimg from '../assets/homepage.jpg'
import { GiHamburgerMenu } from "react-icons/gi";


const Homepage = () => {
  return (
  <>
  
     <div className='relative'>
        <img src={homepageimg} className='w-full h-[830px]'/>
     </div>
     
     <div className='absolute top-0 right-24 text-white font-semibold mt-10'>
      <ul>
        <li className='flex gap-3'>Home <span className='mt-1'><GiHamburgerMenu /></span></li>
        <li>About</li>
        <li>Initiatives</li>
        <li>Movements</li>
        <li>Connect</li>
        <li>Map</li>
     </ul>
      </div>
      <div className='absolute bottom-40 text-6xl text-white font-sans ml-14'>
         <h1>Where Art</h1>
         <hr className='mt-2'></hr>
         <h1 className='mt-2'>Meet Activism</h1>
      </div>
        <div className='bg-[#9A1D20] w-full h-10'>
        <div className=''></div>
        </div>
        <div className='section2 bg-black w-full h-[600px]'>
             <p className='text-justify text-2xl font-sans pt-28 text-white px-64'>Freedom Studio is a creative initiative that empowers social movements, and civic organizations through stategic nonviolent action and digital innovation. Through its non-profit and social entrepreneurial model. Freedom Studio fosters leadership, strengthens activism, and provides cutting-edge creative solutions to drive meaningful social change. </p>
             <hr className='ml-48 mt-8 w-[1100px]'></hr>
             <h2 className='font-semibold text-white text-center text-4xl mt-10'>Interactive Map</h2>
        </div>
  </>
  )
}

export default Homepage
