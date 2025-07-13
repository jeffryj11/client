import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase.from('applications').insert([
    {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      rebate_id: body.rebate_id,
      utility_provider: body.utility_provider,
      status: 'submitted',
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
  });
}
