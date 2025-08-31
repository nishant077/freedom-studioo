import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok, IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import logo from '../assets/logo.PNG'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-0 rounded-t-3xl">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              className="w-48 h-24 object-cover hover:scale-105 transition-transform duration-300"
              alt="Studio Freedom Logo"
            />
            <address className="not-italic text-center md:text-left mt-2">
              <p className="mb-2 text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="bg-[#9A1D20] p-1 rounded-full mr-2">
                  <IoLocationSharp className="text-white text-sm" />
                </span>
                New Baneshwor - 31, Kathmandu, Nepal
              </p>
              <p className="mb-2 text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="bg-[#9A1D20] p-1 rounded-full mr-2">
                  <IoMail className="text-white text-sm" />
                </span>
                Email: contact@studiofreedom.org
              </p>
              <p className="text-gray-300 hover:text-white transition-colors flex items-center">
                <span className="bg-[#9A1D20] p-1 rounded-full mr-2">
                  <IoCall className="text-white text-sm" />
                </span>
                Contact No: 9866567628
              </p>
            </address>
          </div>
          
        
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-droid mb-6 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#9A1D20] after:mt-2 after:mx-auto">
              Follow Us
            </h3>
            <p className="text-gray-300 mb-6 text-center md:text-right">
              Stay connected with us on social media.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/freedom.studioo" target="_blank" className="text-2xl text-gray-300 hover:text-[#4267B2] transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.tiktok.com/@freedomstudioo?_t=8UWIhaQaQFu&_r=1" target="_blank" className="text-2xl text-gray-300 hover:text-[#000000] transition-colors" aria-label="TikTok">
                <IoLogoTiktok />
              </a>
              <a href="https://www.instagram.com/freedom.studioo/?igshid=YmMyMTA2M2Y%3D" target="_blank" className="text-2xl text-gray-300 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/freedomstudioo/" target="_blank" className="text-2xl text-gray-300 hover:text-[#0077B5] transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/freedomstudioo?t=02Nm9_me28rjVkfIqR6oug&s=09" target="_blank" className="text-2xl text-gray-300 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
      
        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Freedom Studio . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer