import React, { useState } from 'react';
import { api } from '../../../../Api/ApiType';

const Feedback = ({ feedbackFromBackend, movementCardId }) => {
  const [open, setOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState(feedbackFromBackend || []);
  const [feedback, setNewFeedback] = useState('');

  const toggleModal = () => setOpen(!open);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;

    try {
      const url = `${api}/api/interactions/feedback?movementCardId=${movementCardId}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        redirect: 'follow',
        body: JSON.stringify({ feedback }),
      });

      console.log("Raw response:", response);

      if (response.redirected) {
        window.location.href = response.url;
        return;
      }

      const result = await response.json();
      console.log("Parsed response data:", result);

      // Manually add the new feedback to the list with dummy name/image
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
      console.error("Fetch failed:", error);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition relative"
      >
        Feedback
        {feedbacks.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {feedbacks.length}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-center">Feedback</h2>

            {/* View Feedback */}
            <div className="max-h-40 overflow-y-auto space-y-2 mb-4">
              {feedbacks.length === 0 ? (
                <p className="text-gray-500 text-sm">No feedback yet.</p>
              ) : (
                feedbacks.map((fb, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800 flex items-start gap-3">
                    <img
                      src={fb.profileImage || `https://ui-avatars.com/api/?name=${fb.fullName}`}
                      alt={fb.fullName}
                      className="w-8 h-8 rounded-full object-cover mt-1"
                    />
                    <div>
                      <div className="font-semibold">{fb.fullName || 'Anonymous'}</div>
                      <div>{fb.feedbackText}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* New Feedback Input */}
            <textarea
              rows={3}
              className="w-full p-2 border rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={e => setNewFeedback(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Submit
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
