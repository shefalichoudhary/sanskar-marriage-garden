import React from "react";
import BookingsList from "../components/bookingsList";

export default function Bookings({ bookings }:any) {
  return (
    <div>
      <BookingsList bookings={bookings} />
    </div>
  );
}
