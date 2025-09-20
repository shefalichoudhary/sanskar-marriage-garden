import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Bookings", path: "/bookings" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <header className="bg-[#161518] text-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sunrise Marriage Garden</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                pathname === link.path
                  ? "bg-red-700 shadow-lg"
                  : "hover:bg-red-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-left justify-left p-2 bg-red-800 rounded-lg shadow-md hover:bg-red-700 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
       <div
        className={`md:hidden fixed top-full left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-sm shadow-lg transition-transform duration-300 ease-out transform ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-10/12 text-center px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                pathname === link.path ? "bg-red-700 shadow-lg" : "hover:bg-red-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}