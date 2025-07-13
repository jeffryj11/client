export default function HomePage() {
  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Client Application Portal</h1>
      <p className="text-gray-600 mb-2">
        Welcome to the Texas Home Energy Rebate Program.
      </p>
      <ul className="list-disc pl-5 text-gray-700">
        <li>✅ Submit a new rebate application</li>
        <li>🔍 Check the status of an existing application</li>
        <li>📄 View program information and eligibility</li>
      </ul>
    </main>
  );
}
