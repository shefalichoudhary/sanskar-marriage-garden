import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function BookingForm({ onClose, onSave }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "",
    note: "",
  });
  const [showQR, setShowQR] = useState(false);
  const [showReceiptPopup, setShowReceiptPopup] = useState(false);
const OWNER_WHATSAPP_NUMBER = "919329751342"; 
  const GARDEN_OWNER_UPI = "shefalichoudhary01@ybl";
  const GARDEN_OWNER_NAME = "Sanskar Marriage Garden";
  const PRICE = 45000;

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleConfirm(e: any) {
    e.preventDefault();
    const requiredFields: (keyof typeof form)[] = ["name", "phone", "date", "guests", "eventType"];
    for (let field of requiredFields) {
      if (!form[field]) return alert(`Please fill the ${field} field.`);
    }
    setShowQR(true);
  }

  function handlePaymentConfirmed() {
    setShowQR(false);
    setShowReceiptPopup(true); // Show WhatsApp receipt popup
  }

  function handleReceiptSent() {
    const booking = { id: Date.now(), ...form, price: PRICE, createdAt: new Date().toISOString() };
    onSave(booking);
    onClose();
  }

  const upiURL = `upi://pay?pa=${GARDEN_OWNER_UPI}&pn=${encodeURIComponent(
    GARDEN_OWNER_NAME
  )}&tn=Booking+Payment&am=${PRICE}&cu=INR`;

  // WhatsApp link with pre-filled message
const whatsappLink = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `Hello, I have paid ₹${PRICE} for booking at ${GARDEN_OWNER_NAME}.\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nGuests: ${form.guests}\nEvent Type: ${form.eventType}`
)}`;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 p-1 pt-24 top-30 ">
      {/* Booking Form */}
      {!showQR && !showReceiptPopup && (
        <form className="  pt-2 bg-white/20 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 " onSubmit={handleConfirm}>
          <h2 className="text-2xl font-bold text-black mb-5 text-center">Book Your Event</h2>

          <input className="border rounded-lg p-3 w-full mb-3" placeholder="Full Name" name="name" value={form.name} onChange={handleChange} />
          <input className="border rounded-lg p-3 w-full mb-3" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
          <input className="border rounded-lg p-3 w-full mb-3" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <input className="border rounded-lg p-3 w-full mb-3" placeholder="dd/mm/yyyy" type="date" name="date" value={form.date} onChange={handleChange} />
          <input className="border rounded-lg p-3 w-full mb-3" placeholder="Guests" type="number" name="guests" value={form.guests} onChange={handleChange} />
          <select name="eventType" value={form.eventType} onChange={handleChange} className="border rounded-lg p-3 w-full mb-3" > <option value="">Select Event Type</option> <option value="Wedding">Wedding</option> <option value="Engagement">Engagement</option> <option value="Birthday">Birthday</option> <option value="Anniversary">Anniversary</option> <option value="Reception">Reception</option> <option value="Corporate Event">Corporate Event</option> <option value="Other">Other</option> </select>
          <textarea className="border rounded-lg p-3 w-full mb-3" placeholder="Note (optional)" name="note" value={form.note} onChange={handleChange}></textarea>

          <div className="flex justify-between mt-5">
            <button type="button" onClick={onClose} className="px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition">Cancel</button>
            <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">Confirm & Pay</button>
          </div>
        </form>
      )}

      {/* QR Payment */}
      {showQR && (
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-600 mb-5 text-center">Scan & Pay ₹{PRICE}</h2>
          <QRCode value={upiURL} size={200} bgColor="#ffffff" fgColor="#EF4444" />
          <p className="mt-4 text-gray-700 text-center">Scan this QR with any UPI app (PhonePe, Google Pay, Paytm)</p>
          <button onClick={handlePaymentConfirmed} className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">I Have Paid</button>
        </div>
      )}

      {/* WhatsApp Receipt */}
      {showReceiptPopup && (
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 flex flex-col items-center">
          <h2 className="text-xl font-bold text-black mb-4 text-center">Send Payment Receipt</h2>
          <p className="text-gray-700 text-center mb-4">
            Click the button below to send your payment confirmation via WhatsApp.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition mb-3">Send via WhatsApp</a>
          <button onClick={handleReceiptSent} className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">Done</button>
        </div>
      )}
    </div>
  );
}
