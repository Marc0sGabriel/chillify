import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SongModel {
  async allSongs() {
    const allSongs = await prisma.song.findMany();

    return allSongs;
  }
}
