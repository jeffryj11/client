// ./src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Texas Home Energy Rebates Portal
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Apply for rebates to make your home more energy efficient and reduce utility bills.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/apply"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700"
          >
            Start My Application
          </a>
          <a
            href="/account"
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Access My Account
          </a>
        </div>
      </div>
    </main>
  );
}
