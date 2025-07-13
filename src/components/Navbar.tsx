'use client';
export default function Navbar() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 text-center py-2 text-sm font-semibold border-b">
        Texas Home Energy Rebates – Client Portal
      </div>
      <nav className="bg-white shadow px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 text-sm font-medium">
          <div className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="/apply" className="text-gray-700 hover:text-green-600">Apply</a>
            <a href="/status" className="text-gray-700 hover:text-green-600">Check Status</a>
            <a href="/about" className="text-gray-700 hover:text-green-600">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600">Contact Us</a>
          </div>
        </div>
      </nav>
    </>
  );
}
