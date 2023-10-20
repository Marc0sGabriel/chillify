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
  const [playMusic, setPlayMusic] = useState(false);

  function togglePlayPauseMusic() {
    setPlayMusic(!playMusic);
  }

  return (
    <>
      <span className="text-gray-500 left-10 top-24 absolute flex items-center gap-2 w-fit ">
        <BsBroadcast /> Playing now
      </span>
      <aside className="relative my-0 mx-auto bg-gray-500 flex rounded-xl p-3 max-w-md bg-opacity-30 backdrop-blur-sm">
        <div className="w-40 h-40">
          <Image
            className="object-cover w-full h-full rounded-lg"
            width={96}
            height={144}
            objectFit="cover"
            unoptimized
            src={
              'https://lofigirl.com/wp-content/uploads/elementor/thumbs/summer-boy-qc2031oy0tv0ndmc3vjny71vdjsvm8tdvfrah4drc0.png'
            }
            alt={''}
          />
        </div>

        <section
          aria-label="music controls and music info"
          className="ml-3 w-full"
        >
          <header>
            <h3 aria-label="music title" className="text-2xl font-semibold">
              Always with me
            </h3>

            <div
              className="my-2 font-mono text-gray-300"
              aria-label="artist name"
            >
              <small>Youmi Kimura</small>
            </div>
          </header>

          <div
            aria-label="music time left"
            className="flex justify-between items-center mb-1 font-mono text-gray-300"
          >
            <small>00:25</small>
            <small>3:45</small>
          </div>

          <div className="h-0.5 w-full bg-gray-400 rounded mb-5">
            <div
              aria-label="music progress bar"
              className="h-0.5 w-1/4  bg-orange-400 rounded"
            />
          </div>

          <ul className="flex items-center gap-5 w-fit mx-auto my-0">
            <BsSkipStartFill className="h-7 w-7 cursor-pointer" />
            <BsPlayFill
              aria-label="button to play the song"
              className="h-9 w-9 cursor-pointer"
              onClick={() => togglePlayPauseMusic()}
            />

            <BsFillSkipEndFill className="h-7 w-7 cursor-pointer" />
          </ul>
        </section>
      </aside>
    </>
  );
}
