import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Simulate DOE RTS response
  const mockRTSId = 'RTS-' + Math.floor(100000 + Math.random() * 900000).toString();

  res.status(200).json({
    id: mockRTSId,
    message: 'Simulated DOE submission successful (mock mode)'
  });
}