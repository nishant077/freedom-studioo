import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import axios from 'axios';
// import mapicon from '../../component/images/Location icon.png';
import mapicon from '../component/images/Location icon.png';
import { api } from '../Api/ApiType';
// import Modal from './Model';

const HomePageMap = ({ district, momentIssue, actors, latitude, longitude }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const isMobile = window.innerWidth <= 768;
  const initialZoom = isMobile ? 14 : 10; // Increased zoom levels (previously 12/8)

  useEffect(() => {
    if (!mapInstance.current) {
      // Initialize map with restricted interactions
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

      // Remove Leaflet watermark
      mapInstance.current.attributionControl.setPrefix('');

      // Base tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(mapInstance.current);

      // Black background mask
      const worldBounds = L.latLngBounds([-90, -180], [90, 180]);
      L.rectangle(worldBounds, {
        color: '#000000',
        fillColor: '#000000',
        fillOpacity: 1,
        weight: 0,
        interactive: false,
      }).addTo(mapInstance.current);

      // Nepal GeoJSON with thicker borders
      fetch('/nepal_provinces.geojson')
        .then(response => response.json())
        .then(data => {
          L.geoJSON(data, {
            style: {
              color: '#800000',
              weight: 2, // Thicker border
              fillOpacity: 0,
            },
            onEachFeature: (feature, layer) => {
              layer.bindPopup(`Province: ${feature.properties.name}`);
            },
          }).addTo(mapInstance.current);
          mapInstance.current.fitBounds(L.geoJSON(data).getBounds(), { 
            padding: [50, 50],
            maxZoom: initialZoom // Prevent auto-zoom too far out
          });
        });
    }

    // Fetch locations
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
      // Clear existing markers
      mapInstance.current.eachLayer(layer => {
        if (layer instanceof L.Marker) mapInstance.current.removeLayer(layer);
      });

      // Custom icon
      const customIcon = L.icon({
        iconUrl: mapicon,
        iconSize: [65, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      // Add markers with hover effects
      locations.forEach(location => {
        const marker = L.marker(
          [parseFloat(location.longitude), parseFloat(location.latitude)],
          { icon: customIcon }
        ).addTo(mapInstance.current);

        // // Hover popup content
        // const popupContent = `
        //   <div style="padding: 8px;">
        //     <strong>${location.district || 'Unknown'}</strong><br/>
        //     ${location.momentIssue || 'No issue specified'}
        //   </div>
        // `;

        // // Bind popup (shown on hover)
        // marker.bindPopup(popupContent, {
        //   closeButton: false,
        //   className: 'custom-popup' // For custom styling if needed
        // });

        // Hover events
        marker.on('mouseover', function() {
          this.openPopup();
        });

        marker.on('mouseout', function() {
          this.closePopup();
        });
      });
    }
  }, [locations]);

  return (
    <>
      <div 
        ref={mapRef} 
        id="map" 
        className="relative z-10" 
        style={{ height: '70vh' }} // Removed pointerEvents: none to allow marker hovers
      />
    </>
  );
};

export default HomePageMap;