// pages/404.tsx
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <div style={{ backgroundColor: '#fcd34d', padding: '10px', textAlign: 'center' }}>
        <strong>DEMO MODE ENABLED – DOE API calls are simulated</strong>
      </div>
      <main style={{ padding: '2rem' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p><Link href="/">Return to Home</Link></p>
      </main>
    </>
  )
}
