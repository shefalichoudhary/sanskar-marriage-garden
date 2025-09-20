import React from "react";
import BookingsList from "../components/bookingsList";

export default function Bookings({ bookings }:any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Your Bookings</h2>
      <BookingsList bookings={bookings} />
    </div>
  );
}
