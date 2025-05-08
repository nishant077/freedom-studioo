import React, { useState } from 'react';
import Map from './InteractiveMap/Map.jsx';
// import './App.css';
import MapArea from './InteractiveMap/MapArea.jsx';
import uparrow from '../assets/uparrow.jpg'
import tatics from '../assets/tatics.webp'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DynamicPage from './components/DynamicPage';
import { div } from 'framer-motion/client';
import Dictory from './InteractiveMap/Dictory.jsx';
import Footer from '../component/Footer.jsx';
import LearningSessions from './InteractiveMap/LearningSessions.jsx';
import UsefulLinks from './InteractiveMap/UsefulLinks.jsx';
// import InteractiveMapDescription from './InteractiveMapDescription.jsx';
// import InteractiveMapDescription from './components/InteractiveMapDescription';

const MapMain = () => {
    const [mapData, setMapData] = useState(null);

    const SendDistrictDetails = (data) => {
        setMapData(data);
    };

    return (
                        <div className=''>
                        <div className=''>
                        {/* <InteractiveMapDescription></InteractiveMapDescription> */}
                        </div>
                        <div className='flex-grow'>
                        <div className="relative">
                            {/* MapArea positioned at the top-right corner (near the search icon) */}
                            <div className="absolute right-5 z-20">
                                <MapArea SendDistrictDetails={SendDistrictDetails} />
                            </div>

                            {/* Map */}
                            {mapData === null ? (
                                <Map />
                            ) : mapData.province ? (
                                <Map
                                     latitude={mapData.coordinates.latitude}
                                     longitude={mapData.coordinates.longitude}
                                />
                            ) : (
                                <Map
                                    latitude={mapData.latitude}
                                    longitude={mapData.longitude}
                                    district={mapData.name}
                                    momentIssue={mapData.momentIssue}
                                    actors={mapData.actors}
                                />
                            )}
                        </div>
                        <div className='py-12 px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
    <div className='lg:w-1/2'>
        <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold text-gray-800'>Interactive Map</h2>
        <p className='opacity-80 text-justify  leading-relaxed'>
            Interactive Map is a digital platform that allows activists, social movement leaders, and concerned stakeholders to engage with geographical data of social movements updated weekly. By clicking on several features of the maps, users can access detailed information on movements, movements strategies and tactics, photos and videos etc. The map also consists of learning corner, a hub for activists to connect with movements and explore, learn effective activism tools and techniques for community mobilization. This digital solution is a unique platform for social movements in Nepal that foster a vibrant civic space in Nepal by digitally bridging activists with the necessary knowledge, capacity, and resources to organize and mobilize citizens in a strategic, creative, and non-violent manner.
        </p>
    </div>
    <div className='lg:w-1/2 flex justify-center'>
        <img src={uparrow} className='h-auto max-h-96 w-full object-cover' alt="Interactive Map"/>
    </div>
</div>

<div className="px-4 md:px-8 lg:px-32">
    <div className="border-t border-gray-200 dark:border-gray-700 my-8 mx-auto w-full max-w-4xl"></div>
</div>
<div className='py-12 px-4 md:px-8 lg:px-32'>
    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
        <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
            <img src={uparrow} className='h-auto max-h-96 w-full object-cover' alt="Learning Corner"/>
        </div>
        <div className='lg:w-1/2 order-1 lg:order-2'>
            <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold'>Learning Corner</h2>
            <p className='opacity-80 text-justify  leading-relaxed'>
                Interactive Map is a digital platform that allows activists, social movement leaders, and concerned stakeholders to engage with geographical data of social movements updated weekly. By clicking on several features of the maps, users can access detailed information on movements, movements strategies and tactics, photos and videos etc. The map also consists of learning corner, a hub for activists to connect with movements and explore, learn effective activism tools and techniques for community mobilization. This digital solution is a unique platform for social movements in Nepal that foster a vibrant civic space in Nepal by digitally bridging activists with the necessary knowledge, capacity, and resources to organize and mobilize citizens in a strategic, creative, and non-violent manner.
            </p>
        </div>
    </div>
</div>
 
 <Dictory/>

 <div className='py-12 px-4 md:px-8 lg:px-32'>
    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
        <div className='lg:w-1/2 order-2 lg:order-1 flex justify-center'>
            <img src={tatics} className='h-auto  w-full object-cover' alt="Learning Corner"/>
        </div>
        <div className='lg:w-1/2 order-1 lg:order-2'>
            <h2 className='mt-5 mb-6 font-droid text-3xl md:text-4xl font-bold'>The new Upskill Central</h2>
            <p className='opacity-80 text-justify  leading-relaxed'>
            Use this space to communicate important messages with people
           within businesses and offices. It can contain short messages and
           announcements formatted according to a certain style that the
           company has determined.
           <br></br>
            If you’re writing your article, it’s best to remember the purpose. It can
         be used to deliver information, make a request, respond to questions,
         propose solutions to problems, or present brief reports.
<br></br>
         A good guide is a simple three-part format: introduction, body, and
         conclusion. You can start by telling your audience what the article is
         about, then continue filling the next few paragraphs with your main
        thoughts. Summarize them, if needed, by the end of your message.
        Make sure the text is clear and easy to read. However, you can include
       a few relevant photos and captions. Another idea is to use your brand
       colors to align with your mission. Lastly, finalize your template so that
       it’s ready to use anytime.
            </p>
        </div>
    </div>
</div>

<div className='py-12 bg-[#9a1d20] px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
    <div className='lg:w-1/2'>
        <h2 className='mt-5 mb-6 font-droid text-white text-3xl md:text-4xl font-bold '>Dai heading </h2>
        <p className='opacity-80 text-justify text-white  leading-relaxed'>
        Use this space to communicate important messages with people
           within businesses and offices. It can contain short messages and
           announcements formatted according to a certain style that the
           company has determined.
           <br></br>
            If you’re writing your article, it’s best to remember the purpose. It can
         be used to deliver information, make a request, respond to questions,
         propose solutions to problems, or present brief reports.
<br></br>
         A good guide is a simple three-part format: introduction, body, and
         conclusion. You can start by telling your audience what the article is
         about, then continue filling the next few paragraphs with your main
        thoughts. Summarize them, if needed, by the end of your message.
        Make sure the text is clear and easy to read. However, you can include
       a few relevant photos and captions. Another idea is to use your brand
       colors to align with your mission. Lastly, finalize your template so that
       it’s ready to use anytime.
        </p>
    </div>
    <div className='lg:w-1/2 flex justify-center'>
        <img src={tatics} className='h-auto  w-full object-cover' alt="Interactive Map"/>
    </div>
</div>

<LearningSessions/>
<UsefulLinks/>
                        </div>
                        <Footer/>
                        </div>
        
    );
};

export default MapMain;