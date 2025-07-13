'use client';
import { useState } from 'react';

const mockApplications = [
  {
    confirmationId: 'ABC123',
    email: 'test@example.com',
    status: 'Under Review',
    lastUpdated: '2025-07-11',
    propertyType: 'Single-Family',
  },
  {
    confirmationId: 'XYZ789',
    email: 'jane.doe@example.com',
    status: 'Approved',
    lastUpdated: '2025-07-08',
    propertyType: 'Mobile Home',
  },
];

export default function StatusPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any | null>(null);
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
      setError('No application found. Please check your confirmation ID or email.');
    }
  };

  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Check Application Status</h1>
      <p className="mb-2 text-gray-700">Enter your confirmation ID or email address:</p>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="e.g. ABC123 or email@example.com"
          className="flex-1 p-2 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {result && (
        <div className="border rounded p-4 bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">Application Found</h2>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Last Updated:</strong> {result.lastUpdated}</p>
          <p><strong>Property Type:</strong> {result.propertyType}</p>
          <p className="mt-2 text-sm text-gray-500">
            If you need further assistance, please contact support.
          </p>
        </div>
      )}
    </main>
  );
}
