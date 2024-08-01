import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Mail from './components/Mail';
import Notifications from './components/Notifications';
import Margin from './components/Margin';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-900">
        <Navbar />
        <div className="flex flex-1">
          <div className="w-20 bg-gray-900 p-4 flex flex-col items-center space-y-8">
            <Sidebar />
          </div>
          <main className="flex-1 p-4 overflow-y-auto bg-gray-900">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<RecentOrders />} />
              <Route path="/feedback" element={<CustomerFeedback />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/notifications" element= {<Notifications/>} />
              <Route path="/Margin" element= {<Margin/>} />
              <Route path="/Wallet" element= {<Wallet/>} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
