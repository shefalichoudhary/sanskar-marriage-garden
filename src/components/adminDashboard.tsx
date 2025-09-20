import React from "react";
import BookingsList from "./bookingsList";
import { UsersIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function AdminDashboard({ bookings }: any) {
  const totalRevenue = bookings.reduce((sum: any, b: any) => sum + (b.price || 0), 0);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5 space-y-6">
      
      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Total Bookings */}
        <div className="bg-gradient-to-tr from-indigo-50 to-white shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200">
          <div>
            <h3 className="text-gray-500 font-medium text-sm sm:text-base">Total Bookings</h3>
            <div className="text-2xl sm:text-3xl font-bold text-indigo-700 mt-1">{bookings.length}</div>
          </div>
          <UsersIcon className="w-10 h-10 text-indigo-300" />
        </div>

        {/* Revenue */}
        <div className="bg-gradient-to-tr from-red-50 to-white shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200">
          <div>
            <h3 className="text-gray-500 font-medium text-sm sm:text-base">Revenue (Est.)</h3>
            <div className="text-2xl sm:text-3xl font-bold text-red-500 mt-1">₹{totalRevenue.toLocaleString()}</div>
          </div>
          <CurrencyDollarIcon className="w-10 h-10 text-red-300" />
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        {/* Scrollable container for many bookings */}
        <div className="max-h-[400px] overflow-y-auto">
          <BookingsList bookings={bookings} />
        </div>
      </div>
    </div>
  );
}
