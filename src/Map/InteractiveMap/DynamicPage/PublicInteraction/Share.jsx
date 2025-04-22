// import React, { useState } from 'react';
// import { FaShareAlt } from 'react-icons/fa';

// const ShareButton = ({ totalShare }) => {
//   const [shareCount, setShareCount] = useState(totalShare || 0);

//   const handleShare = async () => {
//     const shareData = {
//       title: 'Awesome Content',
//       text: 'Check this out!',
//       url: window.location.href,
//     };

//     if (navigator.share) {
//       try {
//         await navigator.share(shareData);
//         console.log('Content shared successfully');
//         setShareCount(prev => prev + 1); // Increase share count locally
//       } catch (error) {
//         console.error('Error sharing:', error);
//       }
//     } else {
//       alert('Web Share API is not supported in your browser.');
//     }
//   };

//   return (
//     <button
//       onClick={handleShare}
//       className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//       style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//     >
//       <FaShareAlt size={24} />
//       <span className="text-sm">{shareCount}</span>
//     </button>
//   );
// };

// export default ShareButton;



import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import {  api, frontendUrl } from '../../../../Api/ApiType';

const ShareButton = ({id,movementCardId, totalShare }) => {
  const [shareCount, setShareCount] = useState(totalShare || 0);
        
  const handleShare = async () => {
    const shareData = {
      title: 'Awesome Content',
      text: 'Check this out!',
      url: `${frontendUrl}/dynamic/${id}`,
    };

    console.log(shareData?.url);
    
        try {
          const url = `${api}/api/interactions/share?movementCardId=${movementCardId}`;
          const response = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            credentials: 'include',
          });
    
          if (response.redirected) {
            window.location.href = response.url;
            return;
          }
    
          // No need to parse response if you’re handling everything locally
        } catch (error) {
          console.error("Fetch failed:", error);
        }

    if (navigator.share) {
      try {
        console.log("....");
        
        await navigator.share(shareData);
        console.log('Content shared successfully');
        setShareCount(prev => prev + 1); // Local increment
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to Facebook share dialog
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
      window.open(facebookShareUrl, '_blank', 'width=600,height=400');
      setShareCount(prev => prev + 1); // Still increase count if shared manually
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
