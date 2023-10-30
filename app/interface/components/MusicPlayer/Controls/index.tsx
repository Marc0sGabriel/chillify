'use client';

import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import {
  BsFillSkipEndFill,
  BsFillVolumeUpFill,
  BsPauseFill,
  BsPlayFill,
  BsSkipStartFill,
} from 'react-icons/bs';

interface ControlsProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setCurrentSongIndex: Dispatch<SetStateAction<number>>;
  currentSongIndex: number;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  songs: string[];
}

export function Controls({
  currentSongIndex,
  isPlaying,
  setIsPlaying,
  audioRef,
  setCurrentSongIndex,
  songs,
}: ControlsProps) {
  function playSong() {
    audioRef.current?.play();
    setIsPlaying(true);
  }

  function pauseSong() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function muteSong() {
    audioRef.current!.volume = 0;
  }

  function nextSong() {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setIsPlaying(true);
    }
  }

  function previousSong() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  }

  return (
    <ul className="flex items-center gap-5 w-fit mt-4 mx-auto">
      <button onClick={previousSong}>
        <BsSkipStartFill className="h-7 w-7 cursor-pointer" />
      </button>

      {/* controls to play and pause the song */}
      {isPlaying ? (
        <button onClick={pauseSong} aria-label="button to pause the song">
          <BsPauseFill className="h-9 w-9 cursor-pointer" />
        </button>
      ) : (
        <button onClick={playSong} aria-label="button to play the song">
          <BsPlayFill className="h-9 w-9 cursor-pointer" />
        </button>
      )}

      <button onClick={nextSong}>
        <BsFillSkipEndFill className="h-7 w-7 cursor-pointer" />
      </button>

      <button onClick={muteSong}>
        <BsFillVolumeUpFill className="h-7 w-7 cursor-pointer" />
      </button>
    </ul>
  );
}
