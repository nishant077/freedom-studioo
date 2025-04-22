// import React, { useState } from 'react';
// import { api } from '../../../../Api/ApiType';

// const Feedback = ({ feedbackFromBackend, movementCardId }) => {
//   const [open, setOpen] = useState(false);
//   const [feedbacks, setFeedbacks] = useState(feedbackFromBackend || []);
//   const [feedback, setNewFeedback] = useState('');

//   const toggleModal = () => setOpen(!open);

//   const handleSubmit = async () => {
//     if (!feedback.trim()) return;

//     try {
//       const url = `${api}/api/interactions/feedback?movementCardId=${movementCardId}`;

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         redirect: 'follow',
//         body: JSON.stringify({ feedback }),
//       });

//       console.log("Raw response:", response);

//       if (response.redirected) {
//         window.location.href = response.url;
//         return;
//       }

//       const result = await response.json();
//       console.log("Parsed response data:", result);

//       // Manually add the new feedback to the list with dummy name/image
//       setFeedbacks(prev => [
//         ...prev,
//         {
//           fullName: result.fullName,
//           profileImage: result.profileImage,
//           feedbackText: result.feedbackText.trim(),
//         }
//       ]);
//       setNewFeedback('');
//     } catch (error) {
//       console.error("Fetch failed:", error);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={toggleModal}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition relative"
//       >
//         Feedback
//         {feedbacks.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//             {feedbacks.length}
//           </span>
//         )}
//       </button>

//       {open && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
//             <h2 className="text-xl font-bold mb-4 text-center">Feedback</h2>

//             {/* View Feedback */}
//             <div className="max-h-40 overflow-y-auto space-y-2 mb-4">
//               {feedbacks.length === 0 ? (
//                 <p className="text-gray-500 text-sm">No feedback yet.</p>
//               ) : (
//                 feedbacks.map((fb, index) => (
//                   <div key={index} className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800 flex items-start gap-3">
//                     <img
//                       src={fb.profileImage || `https://ui-avatars.com/api/?name=${fb.fullName}`}
//                       alt={fb.fullName}
//                       className="w-8 h-8 rounded-full object-cover mt-1"
//                     />
//                     <div>
//                       <div className="font-semibold">{fb.fullName || 'Anonymous'}</div>
//                       <div>{fb.feedbackText}</div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* New Feedback Input */}
//             <textarea
//               rows={3}
//               className="w-full p-2 border rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Write your feedback..."
//               value={feedback}
//               onChange={e => setNewFeedback(e.target.value)}
//             />

//             {/* Buttons */}
//             <div className="flex justify-between">
//               <button
//                 onClick={handleSubmit}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//               >
//                 Submit
//               </button>
//               <button
//                 onClick={toggleModal}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Feedback;


import React, { useState } from 'react';
import { api, oauth } from '../../../../Api/ApiType';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Feedback = ({ feedbackFromBackend, movementCardId }) => {
  const [feedbacks, setFeedbacks] = useState(feedbackFromBackend || []);
  const [feedback, setNewFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const url = `${oauth}/api/interactions/feedback?movementCardId=${movementCardId}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        redirect: 'follow',
        body: JSON.stringify({ feedback }),
      });

      if (response.redirected) {
        window.location.href = response.url;
        return;
      }

      const result = await response.json();
      setFeedbacks(prev => [
        ...prev,
        {
          fullName: result.fullName,
          profileImage: result.profileImage,
          feedbackText: result.feedbackText.trim(),
        }
      ]);
      setNewFeedback('');
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-sm">
      {/* Feedback Input Section */}
      <div className="relative mb-6">
        <textarea
          rows={3}
          className="w-full p-4 pr-14 border border-gray-200 rounded-lg resize-none 
                    focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                    transition-all duration-200"
          placeholder="Share your thoughts..."
          value={feedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={!feedback.trim() || isSubmitting}
          className={`absolute right-3 bottom-3 p-2 rounded-full 
                    ${feedback.trim() ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300'} 
                    text-white transition-colors duration-200`}
        >
          <FiSend className="text-lg" />
        </motion.button>
      </div>

      {/* Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">
            {feedbacks.length > 0 ? `${feedbacks.length} feedbacks` : 'No feedback yet'}
          </span>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedbacks.length > 0 ? (
          feedbacks.map((fb, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
            >
             {fb.profileImage ? (
  <img
    src={fb.profileImage}
    alt={fb.fullName}
    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
  />
) : (
  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
    <span className="text-gray-600 font-medium uppercase">
      {fb.fullName ? fb.fullName.charAt(0) : 'A'}
    </span>
  </div>
)}
              <div className="flex-1">
                <div className="font-medium text-gray-800">{fb.fullName || 'Anonymous'}</div>
                <div className="text-gray-600 mt-1 text-sm">{fb.feedbackText}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-400">
            Be the first to share your feedback
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
