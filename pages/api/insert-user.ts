import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, email, full_name, role } = req.body;

  const { error } = await supabase.from('users').insert([{ id, email, full_name, role }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ message: 'User inserted successfully' });
}