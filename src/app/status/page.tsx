'use client';
import { useState } from 'react';

export default function StatusPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    setNotFound(false);
    setResult(null);

    if (query.toLowerCase() === 'abc123' || query.toLowerCase() === 'john@example.com') {
      setResult({
        name: 'John Smith',
        email: 'john@example.com',
        status: 'Approved',
        lastUpdated: '2025-07-10',
      });
    } else {
      setNotFound(true);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Check Application Status</h1>
      <label htmlFor="query">Enter your confirmation ID or email address:</label>
      <div>
        <input
          id="query"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: '70%' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {result && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Email:</strong> {result.email}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Last Updated:</strong> {result.lastUpdated}</p>
        </div>
      )}
      {notFound && <p style={{ color: 'red', marginTop: '1rem' }}>No application found. Please check your confirmation ID or email.</p>}
    </div>
  );
}
