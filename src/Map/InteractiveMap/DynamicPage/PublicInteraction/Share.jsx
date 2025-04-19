import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';

const ShareButton = ({ totalShare }) => {
  const [shareCount, setShareCount] = useState(totalShare || 0);

  const handleShare = async () => {
    const shareData = {
      title: 'Awesome Content',
      text: 'Check this out!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Content shared successfully');
        setShareCount(prev => prev + 1); // Increase share count locally
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      <FaShareAlt size={24} />
      <span className="text-sm">{shareCount}</span>
    </button>
  );
};

export default ShareButton;
