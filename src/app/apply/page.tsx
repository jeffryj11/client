'use client';

export default function ApplyPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rebate Application</h1>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Last Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Street Address" className="w-full border p-2 rounded" />
        <input type="text" placeholder="City" className="w-full border p-2 rounded" />
        <input type="text" placeholder="ZIP Code" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option value="">Select Property Type</option>
          <option value="single">Single-Family</option>
          <option value="multi">Multi-Family</option>
          <option value="mobile">Mobile Home</option>
        </select>
        <input type="text" placeholder="Utility Provider" className="w-full border p-2 rounded" />
        <textarea placeholder="Briefly describe your planned upgrade" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}
