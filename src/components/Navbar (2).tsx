'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex gap-6 p-4 text-sm">
        {['/', '/status'].map((path) => (
          <Link
            key={path}
            href={path}
            className={pathname === path ? 'font-bold underline' : ''}
          >
            {path === '/' ? 'Home' : 'Status'}
          </Link>
        ))}
      </nav>
    </header>
  );
}
