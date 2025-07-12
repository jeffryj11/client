import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow px-6 py-4 text-xl font-bold">
          Client Portal
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}