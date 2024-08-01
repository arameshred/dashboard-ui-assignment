import React from 'react';
import { FaBullseye, FaUtensils, FaList, FaArrowAltCircleRight } from 'react-icons/fa'; // Importing the necessary icons

const SideSection = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl col-span-2 h-full flex flex-col justify-between">
  {/* Goals Section */}
  <div className="flex items-center mb-4" style={{ marginTop: '100px' }}>
    <FaBullseye className="text-white text-2xl mr-2" />
    <span className="flex-1 text-white text-3xl">Goals</span>
    <button className="ml-auto text-blue-400" onClick={()=>alert("Goals")}>{<FaArrowAltCircleRight />}</button>
  </div>

  {/* Popular Dishes Section */}
  <div className="flex items-center mb-4">
    <FaUtensils className="text-white text-2xl mr-2" />
    <span className="flex-1 text-white text-3xl">Popular Dishes</span>
    <button className="ml-auto text-blue-400" onClick={()=>alert("Popular Dishes")}>{<FaArrowAltCircleRight />}</button>
  </div>

  {/* Menus Section */}
  <div className="flex items-center" style={{ marginBottom: '100px' }}>
    <FaList className="text-white text-2xl mr-2" />
    <span className="flex-1 text-white text-3xl">Menus</span>
    <button className="ml-auto text-blue-400" onClick={()=>alert("Menu")}>{<FaArrowAltCircleRight />}</button>
  </div>
</div>

  );
};

export default SideSection;
