// src/App.jsx
import React from "react";

const summaryData = {
  allOrders: 423,
  pending: 18,
  completed: 405,
  canceled: 32,
  returned: 12,
  damaged: 15,
};

const supplierDetails = [
  {
    name: "Rambhajan Traders",
    contact: "9664432188",
    address: "66-D, Carter Road, Bandra West, Mumbai",
  },
  // You can add more suppliers here
];

const orderDetails = [
  {
    number: "88211",
    date: "28-07-2024",
    orderStatus: "Pending",
    paymentStatus: "Paid",
    deliveryStatus: "In Transit",
  },
  {
    number: "88212",
    date: "29-07-2024",
    orderStatus: "Completed",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
  },
  {
    number: "88212",
    date: "29-07-2024",
    orderStatus: "Completed",
    paymentStatus: "Unpaid",
    deliveryStatus: "Delivered",
  },
  // You can add more orders here
];

function Summary() {
  return (
    <div className="p-8 bg-blue-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Order Summary</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-semibold">All Orders</h2>
          <div className="text-3xl font-bold">{summaryData.allOrders}</div>
          <div className="flex justify-between w-full mt-2 text-sm">
            <span>Pending</span>
            <span>Completed</span>
          </div>
          <div className="flex justify-between w-full">
            <span>{summaryData.pending}</span>
            <span>{summaryData.completed}</span>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-4 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-semibold">Status</h2>
          <div className="flex justify-between w-full mt-2 text-sm">
            <span>Canceled</span>
            <span>Returned</span>
            <span>Damaged</span>
          </div>
          <div className="flex justify-between w-full">
            <span>{summaryData.canceled}</span>
            <span>{summaryData.returned}</span>
            <span>{summaryData.damaged}</span>
          </div>
        </div>
      </div>

      {/* Supplier Details */}
      <div className="bg-blue-200 rounded-lg p-4 shadow-md mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Supplier Details</h2>
        <table className="w-full text-blue-800">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Contact</th>
              <th className="p-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {supplierDetails.map((supplier, index) => (
              <tr key={index}>
                <td className="p-2">{supplier.name}</td>
                <td className="p-2">{supplier.contact}</td>
                <td className="p-2">{supplier.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details */}
      <div className="bg-blue-200 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Order Details</h2>
        <table className="w-full text-blue-800">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Number</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Order Status</th>
              <th className="p-2 text-left">Payment Status</th>
              <th className="p-2 text-left">Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order, index) => (
              <tr key={index}>
                <td className="p-2">{order.number}</td>
                <td className="p-2">{order.date}</td>
                <td className={`p-2 font-semibold ${order.orderStatus === 'Pending' ? 'text-red-600' : 'text-green-600'}`}>
                  {order.orderStatus}
                </td>
                <td className={`p-2 font-semibold ${order.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                  {order.paymentStatus}
                </td>
                <td className={`p-2 font-semibold ${order.deliveryStatus === 'In Transit' ? 'text-yellow-600' : 'text-blue-600'}`}>
                  {order.deliveryStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
