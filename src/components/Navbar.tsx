export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-700 font-medium">
        Texas Home Energy Rebates – Client Portal
      </div>
      <nav className="bg-white shadow py-4">
        <ul className="flex justify-center gap-8 text-gray-700 font-semibold text-sm">
          <li><a href="/">Home</a></li>
          <li><a href="/apply">Apply</a></li>
          <li><a href="/status">Check Status</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
