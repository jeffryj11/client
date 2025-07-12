import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t">
          &copy; 2025 Client Portal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
