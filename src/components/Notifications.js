import React from 'react';
import { FaBell } from 'react-icons/fa';

const Notifications = () => {
  return (
    <div className="p-4 pt-20 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4"><FaBell className="inline mr-2" /> Notifications</h1>
      <p>Your notifications will appear here.</p>
    </div>
  );
};

export default Notifications;