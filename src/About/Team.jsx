import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaQuoteLeft, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { teamData } from './TeamData';
import './Team.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="team-section w-full bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">Our Team</h3>
            <div className="h-1 w-20 bg-[#9a1d20] mx-auto mb-2"></div>
          </div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: '.team-pagination',
            type: 'bullets',
            bulletClass: 'team-bullet',
            bulletActiveClass: 'team-bullet-active',
          }}
          navigation={{
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="team-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 0,
                depth: 50,
                modifier: 1,
                stretch: 10,
              }
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 5,
                depth: 100,
                modifier: 2,
                stretch: 0,
              }
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              coverflowEffect: {
                rotate: 5,
                depth: 100,
                modifier: 2.5,
                stretch: 0,
              }
            }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className={`team-card ${index === activeIndex ? 'active' : ''} bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative`}>
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* <div className="team-socials absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" className="bg-white p-2 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                      <FaTwitter className="text-lg" />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                      <FaInstagram className="text-lg" />
                    </a>
                  </div> */}
                  
                  {/* <div className="team-overlay absolute bottom-0 left-0 right-0 p-6 text-white">
                    <FaQuoteLeft className="text-2xl mb-3 text-[#9a1d20]" />
                    <p className="text-sm font-light italic leading-relaxed">{member.quote}</p>
                  </div> */}
                </div>
                
                <div className="p-6 text-center relative">
                  <h3 className="text-xl font-droid text-black mb-1 mt-2">{member.name}</h3>
                  <p className="text-[#9a1d20] text-sm font-medium mb-3">{member.role}</p>
                  {/* <div className="flex justify-center space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-[#9a1d20] rounded-full"></div>
                    ))}
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-12 space-x-4">
          <div className="team-swiper-button-prev bg-[#9a1d20] hover:bg-[#9a1d20] text-white p-3 rounded-full cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          
          <div className="team-pagination flex space-x-2"></div>
          
          <div className="team-swiper-button-next bg-[#9a1d20] hover:bg-[#9a1d20] text-white p-3 rounded-full cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;