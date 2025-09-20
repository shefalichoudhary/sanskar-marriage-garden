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
    <header className="bg-[#161518] text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-medium">Sanskar Marriage Garden</h1>

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
          className="md:hidden w-10 h-10 flex items-center justify-center p-2 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

     {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden  inset-0  bg-black/9  text-white border-t border-gray-700  z-10 flex flex-col space-y-2 px-1 py-10">
    {links.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        className={`block px-3 py-2 rounded-md text-base font-medium ${
          pathname === link.path
            ? "bg-red-700 text-white"
            : "hover:bg-red-800"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    ))}
  </div>
)}

    </header>
  );
}
