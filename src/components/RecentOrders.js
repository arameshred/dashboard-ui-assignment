import React from 'react';

const RecentOrders = () => {
  const orders = [
    { 
      customer: 'Wade Warren', 
      orderNo: '15478256', 
      amount: '$124.00', 
      status: 'Delivered',
      image: 'https://via.placeholder.com/40?text=W'
    },
    { 
      customer: 'Jane Cooper', 
      orderNo: '48965786', 
      amount: '$305.02', 
      status: 'Delivered',
      image: 'https://via.placeholder.com/40?text=J'
    },
    { 
      customer: 'Guy Hawkins', 
      orderNo: '78958215', 
      amount: '$45.88', 
      status: 'Cancelled',
      image: 'https://via.placeholder.com/40?text=G'
    },
    { 
      customer: 'Kristin Watson', 
      orderNo: '20965732', 
      amount: '$60.00', 
      status: 'Pending',
      image: 'https://via.placeholder.com/40?text=K'
    },
    { 
      customer: 'Cody Fisher', 
      orderNo: '95715620', 
      amount: '$545.00', 
      status: 'Delivered',
      image: 'https://via.placeholder.com/40?text=C'
    },
    { 
      customer: 'Savannah Nguyen', 
      orderNo: '78514568', 
      amount: '$128.20', 
      status: 'Delivered',
      image: 'https://via.placeholder.com/40?text=S'
    }
  ];

  // Helper function to determine the status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 border-green-500 text-white';
      case 'Pending':
      case 'Cancelled':
        return 'bg-red-500 border-red-500 text-white';
      default:
        return 'bg-gray-500 border-gray-500 text-white';
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded mt-4">
      <h2 className="text-white mb-4 capitalize text-3xl">Recent Orders</h2>
      <table className="min-w-full bg-gray-900 text-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Order No.</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2 px-4 ml-12 flex items-center text-center">
                <img src={order.image} alt={order.customer} className="w-10 h-10 rounded-full mr-2" />
                {order.customer}
              </td>
              <td className="py-2 px-4 text-center">{order.orderNo}</td>
              <td className="py-2 px-4 text-center">{order.amount}</td>
              <td className={`py-1 px-3 mb-4 ml-20 inline-block rounded-full border ${getStatusColor(order.status)} bg-opacity-30 text-center`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
