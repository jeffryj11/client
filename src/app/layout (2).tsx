import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="bg-blue-900 text-white text-center py-2 text-sm font-semibold tracking-wide">
          Texas Home Energy Rebates Client Portal
        </div>
        <Navbar />
        <main className="min-h-screen px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
