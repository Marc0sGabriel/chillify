import { SongsProps } from '@/types/songs.types';
import { MusicPlayerComponent } from '..';
import { getAll } from '@/app/api/controllers/songControllers';

export const revalidate = 0;

export async function Player() {
  const data: SongsProps[] = await getAll();

  const getSongsLinkOnly = data!.map((song) => song.songURL);

  return <MusicPlayerComponent data={data} songsLink={getSongsLinkOnly} />;
}
