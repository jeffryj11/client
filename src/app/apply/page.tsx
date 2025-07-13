'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rebateType: '',
    utilityProvider: '',
    incomeLevel: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('applications').insert([formData]);

    if (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ fullName: '', email: '', rebateType: '', utilityProvider: '', incomeLevel: '' });
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Rebate Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="rebateType"
          value={formData.rebateType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Rebate Type</option>
          <option value="appliance">Appliance</option>
          <option value="weatherization">Weatherization</option>
        </select>
        <input
          type="text"
          name="utilityProvider"
          placeholder="Utility Provider"
          value={formData.utilityProvider}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="incomeLevel"
          placeholder="Household Income"
          value={formData.incomeLevel}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </button>

        {status === 'success' && <p className="text-green-600 mt-2">Application submitted successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
      </form>
    </main>
  );
}
