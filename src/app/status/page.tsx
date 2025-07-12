'use client';

import { useState } from 'react';

const mockApplications = [
  {
    confirmationId: 'ABC123',
    email: 'test@example.com',
    status: 'Under Review',
    lastUpdated: '2025-07-11',
    propertyType: 'Single-Family',
  }
];

export default function StatusPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const found = mockApplications.find(
      (app) =>
        app.confirmationId.toLowerCase() === query.toLowerCase() ||
        app.email.toLowerCase() === query.toLowerCase()
    );
    if (found) {
      setResult(found);
      setError('');
    } else {
      setResult(null);
      setError('No application found.');
    }
  };

  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Check Status</h1>
      <input
        type="text"
        placeholder="Enter confirmation ID or email"
        className="border p-2 w-full mb-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-green-600 text-white px-4 py-2 rounded">
        Search
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {result && (
        <div className="mt-4 border p-4 bg-white shadow">
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Last Updated:</strong> {result.lastUpdated}</p>
          <p><strong>Property Type:</strong> {result.propertyType}</p>
        </div>
      )}
    </main>
  );
}