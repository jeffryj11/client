'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function ApplyPage() {
  const [rebates, setRebates] = useState<any[]>([]);
  const [utilities, setUtilities] = useState<any[]>([]);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    rebate_id: '',
    utility_provider: '',
    other_utility: '',
  });
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const { data: rebateData } = await supabase.from('rebates').select('*').eq('active', true);
      setRebates(rebateData || []);
      const { data: utilityData } = await supabase.from('utilities').select('*').eq('is_active', true);
      setUtilities(utilityData || []);
    }
    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('applications').insert([{
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      rebate_id: form.rebate_id,
      utility_provider: form.utility_provider === 'other' ? form.other_utility : form.utility_provider,
      status: 'submitted',
    }]);
    if (!error) router.push('/apply/confirmation');
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Apply for a Rebate</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input name="first_name" value={form.first_name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input name="last_name" value={form.last_name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Rebate Program</label>
          <select name="rebate_id" value={form.rebate_id} onChange={handleChange} className="w-full border p-2 rounded" required>
            <option value="">Select a rebate</option>
            {rebates.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Utility Provider</label>
          <select name="utility_provider" value={form.utility_provider} onChange={handleChange} className="w-full border p-2 rounded" required>
            <option value="">Select a provider</option>
            {utilities.map((u) => (
              <option key={u.id} value={u.name}>{u.name}</option>
            ))}
            <option value="other">Other (Please Specify)</option>
          </select>
        </div>
        {form.utility_provider === 'other' && (
          <div>
            <label className="block text-sm font-medium">Other Utility Provider</label>
            <input name="other_utility" value={form.other_utility} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
        )}
        <div className="text-center">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Submit Application</button>
        </div>
      </form>
    </main>
  );
}
