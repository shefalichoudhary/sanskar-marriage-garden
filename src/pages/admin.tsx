import React from "react";
import AdminDashboard from "../components/adminDashboard";

export default function Admin({ bookings }:any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Admin Dashboard</h2>
      <AdminDashboard bookings={bookings} />
    </div>
  );
}
