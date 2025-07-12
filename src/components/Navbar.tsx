import Link from 'next/link';
import { usePathname } from 'next/navigation';

const paths = ['/', '/status', '/apply', '/about', '/contact'];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white text-black border-b shadow-sm px-6 py-2 flex gap-6">
      {paths.map((path) => (
        <Link
          key={path}
          href={path}
          className={pathname === path ? 'font-bold underline' : ''}
        >
          {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        </Link>
      ))}
    </nav>
  );
}
