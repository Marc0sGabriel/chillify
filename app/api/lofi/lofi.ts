import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export default async function fetchLofiSongs() {
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data: songs } = await supabase
    .from('songs')
    .select('*')
    .order('title');

  return songs;
}
