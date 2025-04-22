import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import { fetchImage } from '../../Api/ImageConfig';

const Modal = ({ isOpen, onClose, location }) => {
  const navigate = useNavigate();
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setShowFullText(false);
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !location) return null;

  const imageUrl = fetchImage(location.heroSectionImage);
  const wordCount = location.description.split(' ').length;
  const shouldTruncate = wordCount > 20;
  const displayText = showFullText 
    ? location.description 
    : location.description.split(' ').slice(0, 20).join(' ') + (shouldTruncate ? '...' : '');

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto py-4">
      <div className="relative flex justify-center items-start p-2 w-full mx-4">
        <div className="relative flex flex-col md:flex-row popup shadow-xl rounded-xl w-full max-w-md border border-[#944546]/30 bg-white max-h-[80vh] overflow-y-auto">
          {/* Close Button */}
          <button 
            className="absolute top-2 right-2 z-50 bg-[#944546] text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm hover:bg-[#8b3d3d] transition-colors"
            onClick={onClose}      
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>

          {/* Side Image */}
          <div className="md:w-5/12 w-full h-40 md:h-auto">
            <img
              src={imageUrl}
              alt="Save Chure"
              className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Card Details */}
          <div className="flex-1 p-3 space-y-2">
            <h1 className="font-bold text-base text-[#944546] leading-tight">{location.momentIssue}</h1>

            <div className="flex items-center text-gray-600 text-xs">
              <FaMapMarkerAlt className="text-[#9A1D20] mr-1" size={10}/>
              <span>{location.province}, {location.district}</span>
            </div>

            <div className="relative">
              <p className="text-xs text-gray-700 mb-1 leading-relaxed">
                {displayText}
              </p>
              {shouldTruncate && (
                <button 
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-[#944546] text-[11px] font-semibold flex items-center hover:underline mt-1"
                >
                  {showFullText ? (
                    <>
                      <FaChevronUp className="mr-1" size={9} /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-1" size={9} /> Read More
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex items-center text-gray-600 gap-1 text-xs">
              <FaClock className="text-[#9a1d20]" size={11}/>
              <span>{location.duration}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200 mt-2">
              <div className="text-xs font-medium text-gray-500">
                <span className="text-gray-600">By: </span>
                <span className="text-[#944546]">{location.actors}</span>
              </div>
              <button
  onClick={() => navigate(`/dynamic/${location?.momentDetailsId}`)}
  className="bg-gradient-to-r from-[#944546] to-[#8b3d3d] text-white px-3 py-1 rounded text-[10px] shadow-xs 
  hover:opacity-90 active:scale-95 
  transition-all duration-150 ease-in-out font-medium"
>
  View
</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;