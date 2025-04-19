import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { api } from '../../../../Api/ApiType';

const LikeButton = ({ movementCardId, totalLike }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(totalLike || 0);

  const toggleLike = async () => {
    try {
      const url = `${api}/api/interactions/like?movementCardId=${movementCardId}`;
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

    // Update state separately to avoid race conditions
    if (!liked) {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    } else {
      setLiked(false);
      setLikeCount(prev => Math.max(0, prev - 1)); // avoid negative likes
    }
  };

  return (
    <button 
      onClick={toggleLike} 
      className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      <FaHeart color={liked ? 'red' : 'gray'} size={24} />
      <span className="text-sm">{likeCount}</span>
    </button>
  );
};

export default LikeButton;
