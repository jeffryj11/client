import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar' // ✅ Make sure this path is correct
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Should be here */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
