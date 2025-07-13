'use client';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-xl text-gray-900">Client Portal</span>
        <div className="space-x-6 text-sm font-medium">
          <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="/apply" className="text-gray-700 hover:text-green-600">Apply</a>
          <a href="/status" className="text-gray-700 hover:text-green-600">Check Status</a>
        </div>
      </div>
    </nav>
  );
}
