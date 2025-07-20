import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Application Dashboard</h1>
      <table className="table-auto w-full border mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">App ID</th>
            <th className="border px-4 py-2">Program</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">APP-0001</td>
            <td className="border px-4 py-2">HOMES</td>
            <td className="border px-4 py-2 text-yellow-600">Submitted</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">APP-0002</td>
            <td className="border px-4 py-2">HEEHRA</td>
            <td className="border px-4 py-2 text-green-600">Approved</td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className="text-blue-600">← Return Home</Link>
    </div>
  );
}
