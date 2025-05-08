import React from 'react'
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import logo from '../assets/logo.PNG'


const Footer = () => {
  return (
    <footer className="w-full bg-[#9a1d20] text-white border-0 rounded-t-3xl">
      {/* Top accent bar */}
    
      
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and contact info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              className="w-48 h-auto object-contain  hover:scale-105 transition-transform duration-300"
              alt="Studio Freedom Logo"
            />
            <address className="not-italic text-center md:text-left">
              <p className="mb-2 text-gray-300 hover:text-white transition-colors">
                New Baneshwor - 31, Kathmandu, Nepal
              </p>
              <p className="mb-2 text-gray-300 hover:text-white transition-colors">
                Email: contact@studiofreedom.org
              </p>
              <p className="text-gray-300 hover:text-white transition-colors">
                Contact No: 9866567628
              </p>
            </address>
          </div>
          
          {/* Quick links - you can add actual links here */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-droid mb-6 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#9A1D20] after:mt-2 after:mx-auto">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Connect</a></li>
            </ul>
          </div>
          
          {/* Social media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-droid mb-6 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#9A1D20] after:mt-2 after:mx-auto">
              Follow Us
            </h3>
            <p className="text-gray-300 mb-6 text-center md:text-right">
              Stay connected with us on social media for updates and news.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-2xl text-gray-300 hover:text-[#4267B2] transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-[#000000] transition-colors" aria-label="TikTok">
                <IoLogoTiktok />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Freedom Studio . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer