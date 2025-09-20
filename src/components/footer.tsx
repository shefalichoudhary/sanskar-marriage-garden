import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const OWNER_PHONE = "+91 9329751342";
  const OWNER_EMAIL = "shefalichoudhary01@ybl";
  const OWNER_WHATSAPP = "919329751342";
  const INSTAGRAM = "https://www.instagram.com/yourgardenpage";
  const FACEBOOK = "https://www.facebook.com/yourgardenpage";

  const whatsappLink = `https://wa.me/${OWNER_WHATSAPP}`;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 p-4 flex flex-col items-center space-y-4">
      {/* Icons */}
      <p className="mb-2"> © {new Date().getFullYear()} Sanskar Marriage Garden — All rights reserved. </p>
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
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.8.4 1.1.7.3.3.5.6.7 1.1.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1c-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4S1 3.8.6 4.6C.3 5.4.1 6.3 0 7.6.1 8.9 0 9.3 0 12s0 3.1.1 4.4c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.4.1s3.1 0 4.4-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.4s0-3.1-.1-4.4c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2S19.2.9 18.4.6c-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0z"/></svg>
        </a>
        <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10v-9H9v-3h3V8.2c0-3 1.8-4.7 4.6-4.7 1.3 0 2.5.1 2.8.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8v2.2h3.6l-.5 3H16v9h6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/></svg>
        </a>
        <button onClick={() => setShowMap(!showMap)} className="text-red-600 hover:text-red-800">
          <MapPinIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Google Map */}
      {showMap && (
        <div className="mt-4 w-full h-64">
          <iframe
            title="Garden Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.214115011617!2d72.8577!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63bfbf92b27%3A0xabcdef1234567890!2sSanskar%20Marriage%20Garden!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </footer>
  );
}
