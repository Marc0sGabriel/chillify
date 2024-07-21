'use client';

import Image from 'next/image';
import { Inter, Orbitron } from 'next/font/google';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BsBroadcast, BsVolumeDown, BsVolumeUp } from 'react-icons/bs';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
import { SongsProps } from '@/types/songs.types';

interface DataProps {
  data: SongsProps[] | null;
  songsLink: (string | null)[];
}

const inter = Inter({ subsets: ['latin'] });

export function MusicPlayerComponent({ data, songsLink }: DataProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState<number>(60);
  const [timeProgress, setTimeProgress] = useState<number | undefined>(0);
  const [duration, setDuration] = useState<number | undefined>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAnimationRef = useRef<number>();

  function onLoadMetaData() {
    const seconds = audioRef.current!.duration;

    setDuration(seconds);

    return seconds!.toString();
  }

  const repeat = useCallback(() => {
    if (isPlaying) {
      const currentTime = Math.floor(audioRef.current!.currentTime);

      setTimeProgress(Number(currentTime));

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [duration, isPlaying]);

  useEffect(() => {
    let animationFrameId = playAnimationRef.current;
    onLoadMetaData();

    if (isPlaying) {
      audioRef.current?.play();
      audioRef.current!.volume = volume / 100;
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(Number(animationFrameId));
    }
  }, [isPlaying, repeat, volume]);

  function nextSong() {
    const parseDuration = Math.floor(duration!);
    const isProgressEqualDuration = timeProgress === parseDuration;

    // if the last song finishes playing return to the first song
    if (currentSongIndex + 1 === data!.length && isProgressEqualDuration) {
      setCurrentSongIndex(0);
      setIsPlaying(true);
    }

    // if the index song is lower than array length go to next
    if (currentSongIndex < data!.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);

      setIsPlaying(true);
    }
  }

  return (
    <div className="w-full lg:w-[1100px] mx-auto my-0">
      <div className="relative w-fit mx-auto my-0 sm:mx-0">
        <img
          src="images/player.png"
          className="w-64"
          alt="mp3 player classic"
        />

        <img
          src={data![currentSongIndex].imageCover!}
          alt="current song image cover"
          className="absolute opacity-80 mix-blend-screen left-12 top-16 w-40 h-40 object-cover rounded-lg"
        />

        <audio
          src={songsLink[currentSongIndex]!}
          key={songsLink[currentSongIndex]}
          onLoadedMetadata={onLoadMetaData}
          onLoadedData={onLoadMetaData}
          preload="auto"
          onEnded={() => nextSong()}
          ref={audioRef}
          typeof="audio/mp3"
        />

        <ProgressBar {...{ duration, timeProgress }} />

        <footer className="absolute tracking-[0.2rem] text-[0.7rem] top-[40%] left-[3rem]">
          <p className="lg:text-sm text-zinc-200">
            {data![currentSongIndex].title}
          </p>

          <p className="tracking-normal text-zinc-400">
            {data![currentSongIndex].artist}
          </p>
        </footer>

        <Controls
          {...{
            audioRef,
            isPlaying,
            setIsPlaying,
            setVolume,
            volume,
            currentSongIndex,
            songsLink,
            setCurrentSongIndex,
          }}
        />
      </div>
    </div>
  );
}
