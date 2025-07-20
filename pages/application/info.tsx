import { useRouter } from 'next/router';
import { useState } from 'react';

export default function InfoStep() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', address: '', city: '', zip: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem('applicant_info', JSON.stringify(form));
    router.push('/application/documents');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Applicant Information</h1>
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="address" placeholder="Street Address" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="zip" placeholder="ZIP Code" onChange={handleChange} />
      <br />
      <button onClick={handleNext}>Next</button>
    </main>
  );
}