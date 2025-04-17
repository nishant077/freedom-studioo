import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='absolute top-0 md:right-28 right-5 text-white font-semibold mt-6 md:mt-10'>
    <ul className='cursor-pointer flex flex-col md:flex-col md:gap-2 gap-1 md:text-lg text-xs'>
    <Link to="/"> <li className='flex md:gap-3 gap-2'> Home <span className='mt-1'><GiHamburgerMenu /></span></li></Link>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/connect">Connect</Link></li>
    
    </ul>
  </div>
  )
}

export default Navbar