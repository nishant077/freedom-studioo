import React, { useState } from 'react';
import Map from './InteractiveMap/Map.jsx';
// import './App.css';
import MapArea from './InteractiveMap/MapArea.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DynamicPage from './components/DynamicPage';
import { div } from 'framer-motion/client';
// import InteractiveMapDescription from './components/InteractiveMapDescription';

const MapMain = () => {
    const [mapData, setMapData] = useState(null);

    const SendDistrictDetails = (data) => {
        setMapData(data);
    };

    return (
                        <div className='md:flex md:flex-wrap gap-2'>
                        <div className='md:w-[45vh] lg:w-[55vh] hidden lg:block  bg-[#9A1D20]'>
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
                        </div>
                        </div>
    );
};

export default MapMain;