import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) {
        router.push('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') {
        router.push('/dashboard');
        return;
      }

      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setApplications(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [router]);

  const updateStatus = async (id: string, newStatus: string) => {
    const res = await fetch('/api/update-application-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setApplications((apps) =>
        apps.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app
        )
      );
    } else {
      alert('Failed to update status');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Submitted Applications</h1>
      {loading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Applicant ID</th>
              <th>Program</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app: any) => (
              <tr key={app.id}>
                <td>{app.user_id}</td>
                <td>{app.program_type}</td>
                <td>{app.status}</td>
                <td>{new Date(app.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => updateStatus(app.id, 'approved')}>Approve</button>
                  <button onClick={() => updateStatus(app.id, 'rejected')}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}