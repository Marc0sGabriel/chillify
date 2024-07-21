'use client';

import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import { LuPlay, LuSkipForward, LuSkipBack, LuPause } from 'react-icons/lu';
import { PiPlusBold, PiMinusBold } from 'react-icons/pi';

interface ControlsProps {
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setVolume: Dispatch<SetStateAction<number>>;
  setCurrentSongIndex: Dispatch<SetStateAction<number>>;
  volume: number;
  isPlaying: boolean;
  currentSongIndex: number;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  songsLink: (string | null)[];
}

export function Controls({
  audioRef,
  setIsPlaying,
  isPlaying,
  setVolume,
  volume,
  currentSongIndex,
  setCurrentSongIndex,
  songsLink,
}: ControlsProps) {
  function playSong() {
    audioRef.current?.play();
    setIsPlaying(true);
  }

  function pauseSong() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function nextSong() {
    if (currentSongIndex < songsLink.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);

      setIsPlaying(true);
    }
  }

  function previousSong() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  }

  function decreaseVolumeSong() {
    if (volume > 0) {
      setVolume((prevState) => prevState - 10);
    }
  }

  function increaseVolume() {
    if (volume <= 90) {
      setVolume((prevState) => prevState + 10);
    }
  }

  return (
    <>
      <button className="absolute bottom-[7.7rem] left-[7.4rem]">
        {isPlaying ? (
          <LuPause
            onClick={() => pauseSong()}
            className="w-6 h-6 pr-1 hover:text-purple-400 active:text-purple-400"
          />
        ) : (
          <LuPlay
            onClick={() => playSong()}
            className="w-6 h-6 hover:text-purple-400 active:text-purple-400"
          />
        )}
      </button>

      <button className="absolute right-14 bottom-[7.7rem]">
        <LuSkipForward
          onClick={() => nextSong()}
          className="w-6 h-6 hover:text-purple-400 active:text-purple-400"
        />
      </button>

      <button className="absolute left-14 bottom-[7.7rem]">
        <LuSkipBack
          onClick={() => previousSong()}
          className="w-6 h-6 hover:text-purple-400 active:text-purple-400"
        />
      </button>

      <button className="absolute left-[7.3rem] bottom-[11.2rem]">
        <PiPlusBold
          onClick={() => increaseVolume()}
          className="w-6 h-6 hover:text-purple-400 active:text-purple-400"
        />
      </button>

      <button className="absolute left-[7.3rem] bottom-[4rem]">
        <PiMinusBold
          onClick={() => decreaseVolumeSong()}
          className="w-6 h-6 hover:text-purple-400 active:text-purple-400"
        />
      </button>
    </>
  );
}
