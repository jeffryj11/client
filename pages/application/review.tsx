import { useEffect, useState } from 'react';

export default function ReviewPage() {
  const [program, setProgram] = useState('');
  const [info, setInfo] = useState({ name: '', address: '', city: '', zip: '' });

  useEffect(() => {
    const savedProgram = localStorage.getItem('program_type');
    const savedInfo = JSON.parse(localStorage.getItem('applicant_info') || '{}');
    if (savedProgram) setProgram(savedProgram);
    if (savedInfo) setInfo(savedInfo);
  }, []);

  const handleSubmit = () => {
    alert('Submitting application (backend logic TBD)');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Review & Submit</h1>
      <p><strong>Program:</strong> {program}</p>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Address:</strong> {info.address}, {info.city}, {info.zip}</p>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}