'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  BsPlayFill,
  BsPauseFill,
  BsFillSkipEndFill,
  BsSkipStartFill,
  BsBroadcast,
} from 'react-icons/bs';

export function MusicPlayerComponent() {
  const [playMusic, setPlayMusic] = useState(true);

  return (
    <div className="w-full">
      <span className="text-gray-500 left-10 top-24 absolute flex items-center gap-2 w-fit">
        <BsBroadcast className="fill-purple-500" /> Playing now
      </span>

      <aside className="relative top-[27rem] my-0 mx-auto bg-zinc-600 flex rounded-xl p-3 max-w-sm">
        <div className="w-40 h-28">
          <Image
            className="object-cover w-full h-full rounded-xl"
            width={160}
            height={112}
            unoptimized
            src={
              'https://lofigirl.com/wp-content/uploads/elementor/thumbs/summer-boy-qc2031oy0tv0ndmc3vjny71vdjsvm8tdvfrah4drc0.png'
            }
            alt={'song album image'}
          />
        </div>

        <section
          aria-label="music controls and music info"
          className="ml-3 w-full"
        >
          <header>
            <h4 aria-label="music title" className="text-xl font-semibold">
              Always with me
            </h4>

            <div
              className="my-1 font-mono text-gray-300"
              aria-label="artist name"
            >
              <small>Youmi Kimura</small>
            </div>
          </header>

          <ul className="flex items-center gap-5 w-fit mt-4 mx-auto">
            <BsSkipStartFill className="h-7 w-7 cursor-pointer" />

            {/* play and pause the song */}
            {playMusic ? (
              <BsPlayFill
                aria-label="button to play the song"
                className="h-9 w-9 cursor-pointer"
                onClick={() => setPlayMusic(false)}
              />
            ) : (
              <BsPauseFill
                aria-label="button to pause the song"
                className="h-9 w-9 cursor-pointer"
                onClick={() => setPlayMusic(true)}
              />
            )}

            <BsFillSkipEndFill className="h-7 w-7 cursor-pointer" />
          </ul>
        </section>
      </aside>
    </div>
  );
}
