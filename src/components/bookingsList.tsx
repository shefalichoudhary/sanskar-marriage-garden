import React from "react";
import {
  PhoneIcon,
  UsersIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function BookingsList({ bookings }: any) {
  if (!bookings.length)
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center flex-grow mt-12 gap-6">
          <CalendarIcon className="w-16 h-16 text-gray-300" />

          <p className="text-gray-500 text-center text-base sm:text-lg max-w-sm">
            No bookings yet. Once someone books your venue, the details will appear here.
          </p>

          <Link
            to="/"
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition"
          >
            Create Booking
          </Link>

          <p className="text-gray-400 text-sm max-w-xs text-center">
            Pro tip: Share your venue link with clients to get bookings faster!
          </p>
        </div>
      </div>
    );

  return (
    <div className="  flex flex-col sm:pb-28 md:pb-28">
      <div className="max-w-6xl px-2 sm:px-4 lg:px-8   flex-grow">
        {/* Page Title */}
        <h1 className="text-xl text-center sm:text-2xl font-bold text-red-800 mb-4">
          Bookings
        </h1>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {bookings.map((b: any) => (
            <div
              key={b.id}
              className="p-3 sm:p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* Header */}
              <div className=" font-semibold text-sm sm:text-base md:text-lg mb-1">
                {b.date} — {b.name}
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1 sm:gap-1.5 text-gray-600 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />{" "}
                  {b.phone}
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium w-max text-xs sm:text-sm">
                  <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" /> {b.guests} Guests
                </div>
                {b.note && (
                  <div className="mt-1 p-1 bg-gray-50 text-gray-700 rounded-md text-xs sm:text-sm italic">
                    {b.note}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mt-2 flex justify-end items-center gap-1 text-red-500 font-semibold text-sm sm:text-base md:text-lg">
                <CurrencyDollarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                ₹{b.price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
