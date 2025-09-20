import React from "react";

interface GardenProps {
  onBook: () => void;
}

export default function GardenDetails({ onBook }: GardenProps) {
  const garden = {
    name: "Sanskar Marriage Garden",
    location: "Sector 12, City",
    capacity: 400,
    pricePerDay: 45000,
    image: "/garden.jpg",// local public folder image
    features: ["Open Lawn", "Parking", "Catering Allowed"],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden
                    transform transition-all duration-700 ease-out opacity-0 translate-y-8
                    animate-fade-in sm:flex sm:flex-row sm:items-center">
      {/* Image Section */}
      <div className="relative sm:w-1/2 group">
        <img
          src={garden.image}
          alt={garden.name}
          className="h-64 w-full object-cover sm:h-full sm:rounded-l-2xl transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:rounded-l-2xl"></div>
        <h2 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          {garden.name}
        </h2>
      </div>

      {/* Details Section */}
      <div className="p-6 sm:w-1/2 space-y-4">
        <p className="text-gray-600 flex items-center gap-2 text-sm md:text-base">
          📍 {garden.location} • Capacity: {garden.capacity}
        </p>

        <p className="text-indigo-600 font-bold text-lg md:text-xl">
          ₹{garden.pricePerDay.toLocaleString()} / day
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2">
          {garden.features.map((f) => (
            <span
              key={f}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm
                         transform transition-transform duration-300 hover:scale-105"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Book Button */}
        <button
          onClick={onBook}
          className="w-full md:w-auto mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg
                     hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          Book Now
        </button>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(2rem); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
