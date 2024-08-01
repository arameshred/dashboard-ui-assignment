import React from 'react';

const CustomerFeedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', rating: 5, message: 'The food was excellent and so was the service.' },
    { name: 'Dianne Russell', rating: 5, message: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.' },
    { name: 'Devon Lane', rating: 4, message: 'Normally we are wings, but theirs are lean meaty and tender, and the sauces are delicious.' }
  ];

  return (
    <div className="bg-gray-800 p-4 rounded mt-4">
      <h2 className="text-white mb-4 text-3xl">Customer's Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="border-t border-gray-700 pt-2">
            <h3 className="text-blue-400">{feedback.name}</h3>
            <div className="text-yellow-500">
              {'★'.repeat(feedback.rating)}
              {'☆'.repeat(5 - feedback.rating)}
            </div>
            <p className="text-white">{feedback.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
