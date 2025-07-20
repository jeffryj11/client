import { useRouter } from 'next/router';
import { useState } from 'react';

export default function StartApplication() {
  const router = useRouter();
  const [program, setProgram] = useState('');

  const handleNext = () => {
    if (program) {
      localStorage.setItem('program_type', program);
      router.push('/application/info');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Start Your Application</h1>
      <label>
        <input
          type="radio"
          value="HOMES"
          checked={program === 'HOMES'}
          onChange={() => setProgram('HOMES')}
        />
        HOMES Program
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="HEAR"
          checked={program === 'HEAR'}
          onChange={() => setProgram('HEAR')}
        />
        HEAR Program
      </label>
      <br />
      <button onClick={handleNext} disabled={!program}>
        Next
      </button>
    </main>
  );
}