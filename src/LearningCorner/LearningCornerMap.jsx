import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import axios from 'axios';
import mapicon from '../component/images/Location icon.png';
import { api } from '../Api/ApiType';

const LearningCornerMap = ({ district, momentIssue, actors, latitude, longitude }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const isMobile = window.innerWidth <= 768;
  const initialZoom = isMobile ? 14 : 7.5;

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [28.3949, 84.1240],
        zoom: initialZoom,
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false,
      });

      mapInstance.current.attributionControl.setPrefix('');

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(mapInstance.current);

      const worldBounds = L.latLngBounds([-90, -180], [90, 180]);
      L.rectangle(worldBounds, {
        color: '#000000',
        fillColor: '#000000',
        fillOpacity: 1,
        weight: 0,
        interactive: false,
      }).addTo(mapInstance.current);

      fetch('/nepal_provinces.geojson')
        .then(response => response.json())
        .then(data => {
          L.geoJSON(data, {
            style: {
              color: '#800000',
              weight: 2,
              fillOpacity: 0,
            },
            onEachFeature: (feature, layer) => {
              layer.bindPopup(`Province: ${feature.properties.name}`);
            },
          }).addTo(mapInstance.current);
          mapInstance.current.fitBounds(L.geoJSON(data).getBounds(), { 
            padding: [50, 50],
            maxZoom: initialZoom
          });
        });
    }

    const fetchLocations = async () => {
      try {
        const response = await axios.get(`${api}/map/getMovementCardDetails`);
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [initialZoom]);

  useEffect(() => {
    if (mapInstance.current && locations.length > 0) {
      mapInstance.current.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          mapInstance.current.removeLayer(layer);
        }
      });

      const customIcon = L.icon({
        iconUrl: mapicon,
        iconSize: [65, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      locations.forEach(location => {
        const marker = L.marker(
          [parseFloat(location.latitude), parseFloat(location.longitude)],
          { icon: customIcon }
        ).addTo(mapInstance.current);

        const popupContent = `
          <div style="padding: 8px;">
            <strong>${location.district || 'Unknown'}</strong><br/>
            ${location.momentIssue || 'No issue specified'}
          </div>
        `;

        marker.bindPopup(popupContent, {
          closeButton: false,
          className: 'custom-popup'
        });

        marker.on('mouseover', function() {
          this.openPopup();
        });

        marker.on('mouseout', function() {
          this.closePopup();
        });

        marker.on('click', function() {
          setSelectedLocation(location);
        });
      });
    }
  }, [locations]);

  return (
    <div className="flex flex-col items-center mx-auto w-full h-[100vh] p-4">
      {/* Map Container - Increased width */}
      <div 
        ref={mapRef} 
        id="map" 
        className="w-full max-w-6xl h-[90vh] mb-8"
      />
      
      {/* Description - Centered below map with increased width */}
      <div className="-mt-10 w-full max-w-6xl bg-transparent bg-opacity-90 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center font-droid">Interactive Map</h2>
        <p className="text-justify leading-relaxed">
          Interactive Map is a digital platform that allows activists, social movement leaders, 
          and concerned stakeholders to engage with geographical data of social movements updated weekly. 
          By clicking on several features of the maps, users can access detailed information on movements, 
          movements strategies and tactics, photos and videos etc. The map also consists of learning corner, 
          a hub for activists to connect with movements and explore, learn effective activism tools and 
          techniques for community mobilization. This digital solution is a unique platform for social 
          movements in Nepal that foster a vibrant civic space in Nepal by digitally bridging activists 
          with the necessary knowledge, capacity, and resources to organize and mobilize citizens in a 
          strategic, creative, and non-violent manner.
        </p>
      </div>

      {/* Selected Location Modal (if needed) */}
      {/* {selectedLocation && (
        <Modal onClose={() => setSelectedLocation(null)}>
          <div className="p-4">
            <h3 className="text-xl font-bold">{selectedLocation.district}</h3>
            <p>{selectedLocation.momentIssue}</p>
            <p>Actors: {selectedLocation.actors}</p>
          </div>
        </Modal>
      )} */}
    </div>
  );
};

export default LearningCornerMap;