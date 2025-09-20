import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Bookings from "./pages/bookings";
import Admin from "./pages/admin";

export default function App() {
  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mg_bookings") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("mg_bookings", JSON.stringify(bookings));
  }, [bookings]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 ">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-1 pt-20 w-full pb-6">
          <Routes>
            <Route path="/" element={<Home bookings={bookings} setBookings={setBookings} />} />
            <Route path="/bookings" element={<Bookings bookings={bookings} />} />
            <Route path="/admin" element={<Admin bookings={bookings} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
