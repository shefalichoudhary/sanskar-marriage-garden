import React from "react";
import { StarIcon, ClockIcon, BuildingOfficeIcon, SparklesIcon, MusicalNoteIcon, TicketIcon } from "@heroicons/react/24/solid";

interface GardenProps {
  onBook: () => void;
}

export default function GardenDetails({ onBook }: GardenProps) {
  const garden = {
    name: "Sanskar Marriage Garden",
    location: "Sanskar Marriage Garden, Sheopur",
    pricePerDay: 45000,
    image: "/garden.jpg",
    gallery: ["/garden1.jpg", "/garden2.jpg"],
    features: [
      { name: "Open Lawn", icon: <SparklesIcon className="w-4 h-4" /> },
      { name: "Parking", icon: <BuildingOfficeIcon className="w-4 h-4" /> },
      { name: "Catering Allowed", icon: <TicketIcon className="w-4 h-4" /> },
    ],
    amenities: [
      { name: "AC Hall", icon: <BuildingOfficeIcon className="w-4 h-4" /> },
      { name: "Stage & Lighting", icon: <MusicalNoteIcon className="w-4 h-4" /> },
      { name: "Sound System", icon: <MusicalNoteIcon className="w-4 h-4" /> },
      { name: "Decoration Services", icon: <SparklesIcon className="w-4 h-4" /> },
    ],
    openingHours: "9:00 AM - 11:00 PM",
    rating: 5.8,
    reviews: 2,
    description:
      "A premium wedding venue with a beautiful open lawn, modern hall facilities, and excellent catering services. Perfect for hosting your dream wedding with a blend of elegance and comfort.",
  };

  return (
<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden
                animate-fade-in transform transition-all duration-700 ease-out
                flex flex-col"> {/* Keep flex-col always */}

  {/* Image Section */}
 <div className="relative w-full flex-shrink-0 group">
  <img
    src={garden.image}
    alt={garden.name}
    className="w-full h-55 sm:h-70 md:h-80 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-2xl"></div>
  {/* Title */}
  <h2 className="absolute bottom-4 left-4 text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
    {garden.name}
  </h2>
</div>
  {/* Details Section */}
  <div className="p-4 sm:p-6 w-full space-y-3 sm:space-y-4">
    <p className="text-gray-700 text-sm sm:text-base flex items-center gap-1">
      📍 {garden.location}
    </p>

    <p className="text-red-500 font-bold text-lg sm:text-xl">
      ₹{garden.pricePerDay.toLocaleString()} / day
    </p>

    <p className="text-gray-600 text-sm sm:text-base">{garden.description}</p>

    {/* Feature Badges */}
    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
      {garden.features.map((f) => (
        <span
          key={f.name}
          className="flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
        >
          {f.icon} {f.name}
        </span>
      ))}
    </div>

    {/* Amenities Badges */}
    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
      {garden.amenities.map((a) => (
        <span
          key={a.name}
          className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
        >
          {a.icon} {a.name}
        </span>
      ))}
    </div>

    {/* Opening Hours & Rating */}
    <div className="flex items-center justify-between text-sm sm:text-base text-gray-600 mt-1">
      <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {garden.openingHours}</span>
      <span className="flex items-center gap-1"><StarIcon className="w-4 h-4 text-yellow-400" /> {garden.rating} ({garden.reviews}k reviews)</span>
    </div>

    {/* Gallery */}
    <div className="flex gap-2 overflow-x-auto mt-2">
      {garden.gallery.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Gallery ${i}`}
          className="h-20 w-28 object-cover rounded-lg shadow-sm flex-shrink-0 hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>

    {/* Book Button */}
    <button
      onClick={onBook}
      className="w-full mt-3 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors shadow-sm hover:shadow-md"
    >
      Book Now
    </button>
  </div>
</div>


  );
}
