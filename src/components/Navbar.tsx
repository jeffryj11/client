
export default function Navbar() {
  return (
    <nav className="bg-white shadow text-center py-4">
      <ul className="flex justify-center gap-8 text-gray-700 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/apply">Apply</a></li>
        <li><a href="/status">Check Status</a></li>
      </ul>
    </nav>
  );
}
