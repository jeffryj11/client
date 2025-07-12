'use client';

export default function ApplyPage() {
  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Apply for Rebate</h1>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Last Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Property Address" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option value="">Select Property Type</option>
          <option value="single">Single-Family</option>
          <option value="multi">Multi-Family</option>
          <option value="mobile">Mobile Home</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit Application
        </button>
      </form>
    </main>
  );
}