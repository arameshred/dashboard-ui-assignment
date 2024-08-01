import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaChartBar, FaCog, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-20 p-4 bg-gray-900 flex flex-col justify-between items-center">
      <div className="flex flex-col space-y-8">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 text-2xl p-2 bg-gray-700 rounded' : 'text-white text-2xl'
          }
          aria-label="Dashboard"
        >
          <FaHome />
        </NavLink>
        <NavLink
          to="/Wallet"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 text-2xl p-2 bg-gray-700 rounded' : 'text-white text-2xl'
          }
          aria-label="Wallet"
        >
          <FaBox />
        </NavLink>
        <NavLink
          to="/Margin"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 text-2xl p-2 bg-gray-700 rounded mt-4'  : 'text-white text-2xl mt-4'
          }
          aria-label="Margin"
        >
          <FaChartBar />
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 text-2xl p-2 bg-gray-700 rounded' : 'text-white text-2xl'
          }
          aria-label="Settings"
        >
          <FaCog />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 text-2xl p-2 bg-gray-700 rounded' : 'text-white text-2xl'
          }
          aria-label="Profile"
        >
          <FaUserCircle />
        </NavLink>
      </div>
      {/* Sign Out Icon at the Bottom */}
      <button
        className="text-white text-2xl"
        aria-label="Sign Out"
        onClick={() => alert("Logout")}
      >
        <FaSignOutAlt />
      </button>
    </div>
  );
};

export default Sidebar;
