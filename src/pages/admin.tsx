import React from "react";
import AdminDashboard from "../components/adminDashboard";

export default function Admin({ bookings }:any) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-3 pt-4">Admin Dashboard</h2>
      <AdminDashboard bookings={bookings} />
    </div>
  );
}
