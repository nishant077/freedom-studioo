import React from 'react'
import Navbar from '../Navigation/Navbar'
import group from '../assets/Gallery13.jpeg'
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../component/Footer';

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });


  const location = useLocation();

  const targetRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'target') {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay ensures DOM is ready
    }
  }, [location]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
   const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.contactNumber && !/^[0-9+\- ]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };
  
  return (
    <>
      <div className='bg-[#040707] w-full min-h-screen'>
        <Navbar/>
        <div className='pt-20 px-4 sm:px-6 md:px-7 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start'>
          
          {/* Image Section - Hidden on mobile, visible on larger screens */}
          <div className='hidden lg:block sticky top-24'>
            <img src={group} alt="Team collaboration" className='rounded-md w-full h-auto object-cover'/>
          </div>
          
          {/* Form Section */}
          <div ref={targetRef} className="w-full max-w-2xl mx-auto lg:mx-0">
            <div className=''>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-droid">Work With Us</h2>
              </div>
              
              {submitSuccess ? (
                <div className="p-4 md:p-6 text-center">
                  <div className="px-4 py-3 rounded-lg bg-green-900/30 text-green-300">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="ml-2 block sm:inline mt-2 sm:mt-0">Your feedback has been submitted successfully.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-2 sm:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name *"
                        className={`w-full bg-transparent border-0 border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-500 focus:border-[#9a1d20]'} text-white placeholder-gray-400 focus:outline-none px-0 py-2 text-sm sm:text-base transition-colors`}
                      />
                      {errors.firstName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name *"
                        className={`w-full bg-transparent border-0 border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-500 focus:border-[#9a1d20]'} text-white placeholder-gray-400 focus:outline-none px-0 py-2 text-sm sm:text-base transition-colors`}
                      />
                      {errors.lastName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="relative mt-6 sm:mt-8">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-500 focus:border-[#9a1d20]'} text-white placeholder-gray-400 focus:outline-none px-0 py-2 text-sm sm:text-base transition-colors`}
                    />
                    {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="relative mt-6 sm:mt-8">
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Organization Name *"
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.contactNumber ? 'border-red-500' : 'border-gray-500 focus:border-[#9a1d20]'} text-white placeholder-gray-400 focus:outline-none px-0 py-2 text-sm sm:text-base transition-colors`}
                    />
                    {errors.contactNumber && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.contactNumber}</p>}
                  </div>
                  
                  <div className="relative mt-6 sm:mt-8">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message *"
                      className={`w-full bg-transparent border-0 border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-500 focus:border-[#9a1d20]'} text-white placeholder-gray-400 focus:outline-none px-0 py-2 text-sm sm:text-base resize-none transition-colors`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <div className="mt-8 sm:mt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-md font-medium text-white text-sm sm:text-base ${
                        isSubmitting ? 'bg-[#9a1d20]/70 cursor-not-allowed' : 'bg-[#9a1d20] hover:bg-[#8a1a1d]'
                      } transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="sm:inline">Submitting...</span>
                        </>
                      ) : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-6 sm:mt-8 md:mt-10 text-center text-gray-300 text-xs sm:text-sm">
                <p>Let's Work Together</p>
              </div>
            </div>
          </div>
          
          {/* Mobile Image - Visible only on small screens */}
          <div className='lg:hidden mt-8'>
            <img src={group} alt="Team collaboration" className='rounded-md w-full h-auto object-cover max-h-64 sm:max-h-80 mx-auto'/>
          </div>
          
        </div>

        {/* Divider Line */}
        <div className='px-4 sm:px-6 md:px-7 lg:px-10 mt-16 md:mt-20'>
          <div className='border-t-[0.5px] border-gray-300'></div>
        </div>
        
        {/* Office Locations Section */}
        <div className='pt-10 md:pt-16 px-4 sm:px-6 md:px-7 lg:px-10 h-auto bg-[#040707]'>
          <div className='bg-[#008080]/40 p-4 sm:p-6 md:p-8 lg:p-10 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
            
            {/* Main Office */}
            <div className=''>
              <div className="p-4 sm:p-6 h-full">
                <h3 className="text-lg sm:text-xl font-droid text-white mb-3 sm:mb-4">Main Office</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.3608873371442!2d85.33719106993117!3d27.68694690078486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1996a8d615f9%3A0xca3d4207589f4c3b!2sMinbhawan%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1744389136209!5m2!1sen!2snp"  
                    className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Main Office Map"
                  ></iframe>
                </div>
                <div className="mt-3 sm:mt-4 text-white text-sm sm:text-base">
                  <p className="font-medium">Minbhawan Marg, Kathmandu 44600</p>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className=''>
              <div className="p-4 sm:p-6 h-full">
                <h3 className="text-lg sm:text-xl font-droid text-white mb-3 sm:mb-4">Branch</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51696.04053151535!2d-79.08049061791272!3d35.922438020524176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc31c216e7ea7%3A0x7f03bae00443e4cb!2sChapel%20Hill%2C%20NC%2C%20USA!5e0!3m2!1sen!2snp!4v1751393749390!5m2!1sen!2snp" 
                    className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Branch Office Map"
                  ></iframe>
                </div>
                <div className="mt-3 sm:mt-4 text-white text-sm sm:text-base">
                  <p className="font-medium">Chapel Hill, North Carolina, USA</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <Footer/>
      </div>
    </>
  )
}

export default Connect