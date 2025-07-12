'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-800 text-white">
      <nav className="container mx-auto flex gap-6 py-4 px-4">
        {['/', '/status', '/apply', '/about', '/contact'].map((path) => (
          <Link
            key={path}
            href={path}
            className={`\${pathname === path ? 'font-bold underline' : ''}`}
          >
            {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
