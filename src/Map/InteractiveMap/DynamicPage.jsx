import React, { useEffect, useState } from 'react'

import HeroSection from './DynamicPage/HeroSection.jsx'
import Sectionn2 from './DynamicPage/Sectionn2.jsx'
import Section3 from './DynamicPage/Section3'
import YouTubeLink from './DynamicPage/YoutubeLink.jsx'

import Marquee from './DynamicPage/Marquee'
import Gallerytext from './DynamicPage/Gallerytext'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { api } from '../../Api/ApiType.jsx'
import Navbar from '../../Navigation/Navbar'
import LikeButton from './DynamicPage/PublicInteraction/Like.jsx'
import ShareButton from './DynamicPage/PublicInteraction/Share.jsx'
import Feedback from './DynamicPage/PublicInteraction/Feedback.jsx'
const DynamicPage = () => {
  const [location, setLocation] = useState(null);
  const { id } = useParams();  


    
    useEffect(() => {
      // Fetch data from the API
      axios.get(`${api}/map/getMovementDetailsById/${id}`)
        .then(response => {
          console.log('API response:', response.data); // Log the API response
          setLocation(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [id]); // Re-run the effect when the locationId changes

    console.log(location?.feedback);
    
    return (
      <>
        <Navbar />
        {location ? (
          <>
            <HeroSection location={location} />
            <div className='flex item-center'>

            <LikeButton movementCardId={location?.movementCardId} totalLike={location?.like}/> <>.</><ShareButton totalShare={location?.share}/> <>.</><Feedback feedbackFromBackend={location?.feedback} movementCardId={location?.movementCardId}/>
            </div>
              
            <Sectionn2 location={location} />

            <Gallerytext />
            <div className="mx-auto w-full md:h-screen h-[70vh] text-white flex justify-center items-center overflow-x-hidden bg-black">
              <Marquee location={location} />
            </div>
            <Section3 location={location} />
            <YouTubeLink location={location} />
          </>
        ) : (
          <div className="text-center text-white">Loading...</div>
        )}
        {/* <Footer /> */}
      </>
    );
  }   

export default DynamicPage