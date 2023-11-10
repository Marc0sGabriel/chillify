import fetchLofiSongs from '@/app/api/lofi/lofi';

import { MusicPlayerComponent } from '..';

export const revalidate = 0;

export async function Player() {
  const data = await fetchLofiSongs();

  const getSongsLinkOnly = data!.map((song) => song.song_link);

  return <MusicPlayerComponent data={data} songsLink={getSongsLinkOnly} />;
}
