import React from "react";

export default function BookingsList({ bookings }:any) {
  if (!bookings.length) return <p className="text-gray-600">No bookings yet.</p>;
  return (
    <div className="space-y-3">
      {bookings.map((b:any) => (
        <div key={b.id} className="p-4 rounded border bg-white">
          <div className="font-semibold">{b.date} — {b.name}</div>
          <div className="text-sm text-gray-600">{b.email} • {b.phone}</div>
          <div className="text-sm">Guests: {b.guests}</div>
          <div className="text-indigo-700 font-semibold mt-1">₹{b.price.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
