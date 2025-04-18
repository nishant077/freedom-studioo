import React from 'react'
import { FaFacebook,FaWhatsapp,FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.PNG'


const Footer = () => {
  return (
    <>
     <div className='bg-[#9A1D20] w-full h-10'></div>
    <div className='bg-black w-full h-auto pb-5'>
        <div className='flex justify-around flex-wrap'>
            <div className='mt-5'>
          <img src={logo} className='w-60 h-24 object-cover'/>
           <ul className='text-white text-lg font-light'>
            <li>New Baneshwor - 31, Kathmandu,</li>
            <li>Nepal</li>
            <li>Email: contact@studiofreedom.org</li>
            <li>Contact No: 9866567628</li>
           </ul>
           </div>
           <div className='text-white mt-28 text-xl font-light'>
            <span>Follow Us on Social Media</span>
            <div className='mt-7 flex gap-4 cursor-pointer'>
            <FaFacebook />
            <IoLogoTiktok />
            <FaInstagram/>
            <FaWhatsapp />
            <FaTwitter />

            </div>
           </div>
           </div>
    </div>
    </>
  )
}

export default Footer