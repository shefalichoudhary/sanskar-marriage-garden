import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

export default function Footer() {

  const OWNER_PHONE = "+91 9329751342";
  const OWNER_EMAIL = "shefalichoudhary01@ybl";
  const OWNER_WHATSAPP = "919329751342";
  

  const whatsappLink = `https://wa.me/${OWNER_WHATSAPP}`;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 p-4 flex flex-col items-center space-y-4">
      {/* Icons */}
      <p className="mb-2 text-sm"> © {new Date().getFullYear()} Sanskar Marriage Garden — All rights reserved. </p>
      <div className="flex gap-6">
        <a href={`tel:${OWNER_PHONE}`} className="text-indigo-600 hover:text-indigo-800">
          <PhoneIcon className="w-6 h-6" />
        </a>
        <a href={`mailto:${OWNER_EMAIL}`} className="text-indigo-600 hover:text-indigo-800">
          <EnvelopeIcon className="w-6 h-6" />
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
          <ChatBubbleBottomCenterIcon className="w-6 h-6" />
        </a>
       
<button
  onClick={() =>
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=25.673001,76.711438",
      "_blank"
    )
  }
  className="text-red-600 hover:text-red-800"
>
  <MapPinIcon className="w-6 h-6" />
</button>
      </div>

     
    </footer>
  );
}
