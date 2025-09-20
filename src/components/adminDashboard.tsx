import React from "react";
import BookingsList from "./bookingsList";

export default function AdminDashboard({ bookings }:any) {
  const totalRevenue = bookings.reduce((sum:any, b:any) => sum + (b.price || 0), 0);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total bookings</h3>
          <div className="text-3xl font-bold">{bookings.length}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Revenue (est.)</h3>
          <div className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</div>
        </div>
      </div>
      <BookingsList bookings={bookings} />
    </div>
  );
}
