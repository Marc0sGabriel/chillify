import { Database } from '@/types/database.types';
import { createClient } from '@supabase/supabase-js';

export const revalidate = 0;

export default async function fetchLofiSongs() {
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data: songs, error } = await supabase
    .from('songs')
    .select('*')
    .order('song_link');

  if (error) {
    // Lida com erros da consulta ao backend
    console.error('Error fetching data:', error);
    return null;
  }

  // Validação dos dados
  if (songs && Array.isArray(songs)) {
    const validatedSongs = songs.map((song) => {
      const validatedSong = {
        id: song.id,
        title: song.title,
        artist: song.artist,
        song_cover: song.song_cover,
        song_link: song.song_link,
        created_at: song.created_at,
      };

      // Validação para o campo title
      if (!validatedSong.title) {
        console.error(`Field 'title' empty for song of ID ${validatedSong.id}`);
      }

      return validatedSong;
    });

    return validatedSongs;
  } else {
    console.error('Invalid data:', songs);
    return null;
  }
}
