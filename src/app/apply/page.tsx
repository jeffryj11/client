'use client';
import { useState } from 'react';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Apply for Assistance</h1>
      {submitted ? (
        <p className="text-green-600">Application submitted successfully!</p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Household Size</label>
            <input type="number" className="w-full border p-2 rounded" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
