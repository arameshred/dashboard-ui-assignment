import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Mail = () => {
  return (
    <div className="bg-gray-900 p-4 pt-20 rounded">
      <div className="flex items-center text-white mb-4">
        <FaEnvelope className="text-4xl mr-3" />
        <h2 className="text-2xl">Mail</h2>
      </div>
      {/* Add your mail content here */}
      <p className="text-white">This is where the mail content will go.</p>
    </div>
  );
};

export default Mail;
