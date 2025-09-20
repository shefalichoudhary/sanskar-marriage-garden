import React, { useState } from "react";

export default function BookingForm({ onClose, onSave }:any) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "" });

  function handleChange(e:any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e:any) {
    e.preventDefault();
    if (!form.name || !form.email || !form.date) return alert("Please fill required fields.");
    const booking = { id: Date.now(), ...form, createdAt: new Date().toISOString(), price: 45000 };
    onSave(booking);
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <form onSubmit={submit} className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Book the Garden</h2>
        <input className="border p-2 rounded w-full mb-2" placeholder="Full Name" name="name" value={form.name} onChange={handleChange} />
        <input className="border p-2 rounded w-full mb-2" placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <input className="border p-2 rounded w-full mb-2" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <input className="border p-2 rounded w-full mb-2" type="date" name="date" value={form.date} onChange={handleChange} />
        <input className="border p-2 rounded w-full mb-2" placeholder="Guests" type="number" name="guests" value={form.guests} onChange={handleChange} />

        <div className="flex justify-end gap-2 mt-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Confirm</button>
        </div>
      </form>
    </div>
  );
}
