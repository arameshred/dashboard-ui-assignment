import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaEnvelope, FaCog, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const hasNotifications = true; // Example state for notifications

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center z-50">
      {/* Logo Button */}
      <Link to="/dashboard" className="flex items-center space-x-2 text-white" aria-label="Go to Dashboard">
        <FaReact className="text-3xl" />
        <span className="text-lg font-bold">MyApp</span>
      </Link>
      
      {/* Search Input */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 rounded bg-gray-700 text-white w-full"
          aria-label="Search"
        />
        <FaSearch className="absolute top-2 left-3 text-white text-lg" />
      </div>
      
      {/* Navigation Icons */}
      <div className="flex items-center space-x-4">
        <Link to="/mail" className="text-white text-2xl" aria-label="Mail">
          <FaEnvelope />
        </Link>
        <Link to="/settings" className="text-white text-2xl" aria-label="Settings">
          <FaCog />
        </Link>
        <Link to="/notifications" className="relative text-white text-2xl" aria-label="Notifications">
          <FaBell />
          {hasNotifications && (
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-2.5 h-2.5"></span>
          )}
        </Link>
        <Link to="/profile" className="text-white text-2xl" aria-label="Profile">
          <FaUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
