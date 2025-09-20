import React, { useState } from "react";
import GardenDetails from "../components/gardenDetails";
import BookingForm from "../components/bookingForm";

export default function Home({ bookings, setBookings }:any) {
  const [showForm, setShowForm] = useState(false);

  function handleSave(booking:any) {
    setBookings((prev:any) => [booking, ...prev]);
  }

  return (
    <div>
      <GardenDetails onBook={() => setShowForm(true)} />
      {showForm && <BookingForm onClose={() => setShowForm(false)} onSave={handleSave} />}
    </div>
  );
}
