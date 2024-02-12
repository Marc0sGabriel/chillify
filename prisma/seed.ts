import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const songsData: Prisma.SongCreateInput[] = [
  {
    title: 'Noir Master',
    artist: 'Kupla',
    imageCover:
      'https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kupla-16.9-scaled-qg0z5up4gahc7gkrl2pt873forafz1cmjkp04zxd40.jpg',
    songURL:
      'https://lofigirl.com/wp-content/uploads/2023/11/03-Kupla-Noir-Master-7.mp3',
  },
  {
    title: 'French Press',
    artist: 'Luv Pug',
    imageCover:
      'https://lofigirl.com/wp-content/uploads/elementor/thumbs/Luvpug_Final-qg0zxuc3yospxfx4569vh4tkhtbx6kgvq41ilmfbts.jpg',
    songURL: 'https://lofigirl.com/wp-content/uploads/2023/11/French-Press.wav',
  },
  {
    title: 'Dream Chaser',
    artist: 'Satyr, marsquake',
    imageCover:
      'https://lofigirl.com/wp-content/uploads/2024/01/Satyr-Lofi-Girl-1.1-scaled.jpg',
    songURL:
      'https://lofigirl.com/wp-content/uploads/2024/01/5-Satyr-_-marsquake-Dream-Chaser.mp3',
  },
];

async function main() {
  console.log('Seeding...');

  for (const data of songsData) {
    await prisma.song.create({
      data,
    });
  }
  console.log('database seed finished!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);

    await prisma.$disconnect();

    process.exit(1);
  });
