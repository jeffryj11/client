import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { submitToDOE } from '../../lib/doeClient';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { applicationId } = req.body;

  const { data: application, error } = await supabase
    .from('applications')
    .select('*, users(*)')
    .eq('id', applicationId)
    .single();

  if (error || !application) {
    return res.status(404).json({ error: 'Application not found' });
  }

  const payload = {
    applicant: {
      name: application.users?.full_name || "Unknown",
      address: application.users?.address || "Unknown"
    },
    program_type: application.program_type,
    status: application.status,
    submitted_at: application.created_at
  };

  try {
    const doeResponse = await submitToDOE(payload);

    await supabase
      .from('applications')
      .update({
        doe_rts_id: doeResponse.id,
        doe_synced_at: new Date().toISOString(),
        doe_sync_status: 'success'
      })
      .eq('id', applicationId);

    return res.status(200).json({ success: true, rtsId: doeResponse.id });
  } catch (err: any) {
    await supabase
      .from('applications')
      .update({
        doe_sync_status: 'failed'
      })
      .eq('id', applicationId);

    return res.status(500).json({ error: 'DOE sync failed' });
  }
}