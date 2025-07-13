import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from('applications')
    .insert([body]);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 });
  }

  return new Response(JSON.stringify({ success: true, data }), { status: 200 });
}
