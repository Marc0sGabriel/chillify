import { SongModel } from '../model/songModel';

const songsModel = new SongModel();

export async function getAll() {
  const songs = await songsModel.allSongs();

  return songs;
}
