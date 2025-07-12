'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Contact Us</h1>
      {submitted ? (
        <p className="text-green-600">Message sent. We'll be in touch shortly.</p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full border p-2 rounded" rows={4} required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
