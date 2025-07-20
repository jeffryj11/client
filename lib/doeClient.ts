const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export async function submitToDOE(payload: any) {
  const endpoint = isDemo
    ? '/api/mock-doe'
    : 'https://api.rts.energy.gov/rebates'; // replace with real endpoint when ready

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DOE_API_KEY || 'mock'}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`DOE API Error: ${response.status}`);
    }

    return await response.json();
  } catch (err: any) {
    console.error("DOE Submission Failed:", err);
    throw err;
  }
}