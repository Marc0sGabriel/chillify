import { fetchLofiSongs } from '@/app/api/lofi/lofi';
import { MusicPlayerComponent } from '..';

export async function Player() {
  const data = await fetchLofiSongs();

  function onlyFirst10Elements() {
    return data.values.slice(0, 10);
  }

  const getSongs = onlyFirst10Elements().map((songs) => songs[3]);

  return <MusicPlayerComponent songs={getSongs} />;
}
