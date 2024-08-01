import React from 'react';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import SideSection from './SideSection'; // Import the new component
import NetProfitPieChart from './NetProfitPieChart'; // Import the NetProfitPieChart component
import { TbBasketPlus, TbShoppingBagCheck, TbShoppingBagX } from "react-icons/tb";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const Dashboard = () => {
  const netProfitPercentage = 75; // Example percentage

  return (
    <>
      <div className="pt-16 p-4">
      <h1 className="text-white text-4xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-gray-800 p-4 rounded-xl">
            <div className="flex flex-col items-left">
              <TbBasketPlus className="text-6xl text-white bg-blue-500 rounded-xl" />
              <h2 className="text-white mt-2 text-2xl">Total Orders</h2>
            </div>
            <div className="flex items-center text-green-400 mt-7">
              <p className="text-3xl mr-2 text-white">75</p>
              <TiArrowSortedUp className="text-3xl ml-14" />
              <span className="ml-1">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <div className="flex flex-col items-left">
              <TbShoppingBagCheck className="text-6xl text-white bg-green-500 rounded-xl" />
              <h2 className="text-white mt-2 text-2xl">Total Delivered</h2>
            </div>
            <div className="flex items-center text-red-400 mt-7">
              <p className="text-3xl text-white">70</p>
              <TiArrowSortedDown className="text-3xl ml-14" />
              <span className="ml-1">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <div className="flex flex-col items-left">
              <TbShoppingBagX className="text-6xl text-white bg-red-500 rounded-xl" />
              <h2 className="text-white mt-2 text-2xl">Total Cancelled</h2>
            </div>
            <div className="flex items-center text-green-400 mt-7">
              <p className="text-3xl text-white">05</p>
              <TiArrowSortedUp className="text-3xl ml-14" />
              <span className="ml-1">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <div className="flex flex-col items-left">
              <PiCurrencyDollarFill className="text-6xl text-white bg-pink-500 rounded-xl" />
              <h2 className="text-white mt-2 text-2xl">Total Revenue</h2>
            </div>
            <div className="flex items-center text-red-400 mt-7">
              <p className="text-3xl text-white">$12k</p>
              <TiArrowSortedDown className="text-3xl ml-14" />
              <span className="ml-1">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 col-span-2 rounded-xl">
            <h2 className="text-white text-4xl">Net Profit</h2>
            <div className="flex items-center mt-2">
              <div className="flex flex-col items-center text-green-400 mr-4">
                <p className="text-3xl text-white">$6759.25</p>
                <div className="flex items-center mt-1">
                  <TiArrowSortedUp className="text-3xl" />
                  <span className="ml-1 mr-14">3%</span>
                </div>
              </div>
              <NetProfitPieChart percentage={netProfitPercentage} />
            </div>
            <p className="text-center text-[9px] text-white mt-2 ml-44">* Here the value has been rounded off</p>
          </div>
          <div className="bg-gray-800 p-4 col-span-4 rounded-xl">
            <ActivityChart />
          </div>
          <SideSection />
        </div>
      </div>
      <div className="p-4 grid grid-cols-6 gap-4">
        <div className="bg-gray-800 p-4 col-span-4 rounded-xl">
          <RecentOrders />
        </div>
        <div className="bg-gray-800 p-4 col-span-2 rounded-xl">
          <CustomerFeedback />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
