export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Texas Home Energy Rebates</h1>
      <p className="mb-6 text-center max-w-xl">
        Check your rebate status, start an application, or manage your account.
      </p>
      <div className="flex gap-4">
        <a href="/apply" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply Now</a>
        <a href="/status" className="bg-white border px-4 py-2 rounded hover:bg-gray-100">Check Status</a>
      </div>
    </main>
  );
}
