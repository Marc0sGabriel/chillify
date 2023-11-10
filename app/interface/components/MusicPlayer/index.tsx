'use client';

import Image from 'next/image';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BsBroadcast, BsVolumeDown, BsVolumeUp } from 'react-icons/bs';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';

interface SongsProps {
  artist: string | null;
  created_at: string;
  id: string;
  song_cover: string | null;
  song_link: string | null;
  title: string | null;
}

interface DataProps {
  data: SongsProps[] | null;
  songsLink: (string | null)[];
}

export function MusicPlayerComponent({ data, songsLink }: DataProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState<number>(50);
  const [timeProgress, setTimeProgress] = useState<number | undefined>(0);
  const [duration, setDuration] = useState<number | undefined>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const playAnimationRef = useRef<number>();

  function onLoadMetaData() {
    const seconds = audioRef.current!.duration;

    setDuration(seconds);

    progressBarRef.current!.max = seconds!.toString();
  }

  const repeat = useCallback(() => {
    if (isPlaying) {
      const currentTime = Math.floor(audioRef.current!.currentTime).toString();

      setTimeProgress(Number(currentTime));

      progressBarRef.current!.value = currentTime;

      let progress = Number(progressBarRef.current!.value);

      progressBarRef.current?.style.setProperty(
        '--range-progress',
        `${(progress / duration!) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [duration, isPlaying]);

  useEffect(() => {
    let animationFrameId = playAnimationRef.current;

    if (isPlaying) {
      audioRef.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
      audioRef.current!.volume = volume / 100;
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(Number(animationFrameId));
    }
  }, [isPlaying, repeat, volume]);

  function handleProgressChange() {
    audioRef.current!.currentTime = Number(progressBarRef.current!.value);
  }

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

  function handleVolume(event: ChangeEvent<HTMLInputElement>) {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
  }

  const formatTime = (time: number | undefined) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      const formatMinutes = String(minutes).padStart(2, '0');
      const formatSeconds = String(seconds).padStart(2, '0');

      return `${formatMinutes}:${formatSeconds}`;
    }

    return '00:00';
  };

  return (
    <div className="w-full">
      {isPlaying && (
        <span className="text-gray-400 left-10 top-24 absolute flex items-center gap-2 w-fit">
          <BsBroadcast className="fill-purple-500" /> Playing now -{' '}
          {data![currentSongIndex].title}
        </span>
      )}

      <aside className="relative top-[27rem] backdrop-blur-sm my-0 mx-auto bg-zinc-900/70 flex rounded-xl p-3 max-w-sm">
        <div className="w-44 h-32">
          <Image
            className="object-cover w-full h-full rounded-xl"
            width={176}
            height={128}
            unoptimized
            src={data![currentSongIndex].song_cover!}
            alt={'song album image'}
          />
        </div>

        <section
          aria-label="music controls and music info"
          className="ml-3 w-full"
        >
          <header>
            <h4 aria-label="music title" className="text-xl font-semibold">
              {data![currentSongIndex].title}
            </h4>

            <audio
              src={songsLink[currentSongIndex]!}
              key={songsLink[currentSongIndex]}
              onLoadedMetadata={onLoadMetaData}
              onEnded={nextSong}
              preload="auto"
              ref={audioRef}
              typeof="audio/mp3"
            />

            <div
              className="my-1 font-mono text-gray-300"
              aria-label="artist name"
            >
              <small>{data![currentSongIndex].artist}</small>
            </div>

            <ProgressBar
              {...{
                duration,
                formatTime,
                handleProgressChange,
                progressBarRef,
                timeProgress,
              }}
            />
          </header>

          <Controls
            {...{
              isPlaying,
              setIsPlaying,
              currentSongIndex,
              audioRef,
              setCurrentSongIndex,
              songsLink,
            }}
          />
        </section>

        <div className="absolute -left-16 bg-inherit rounded-xl h-full top-0 w-12">
          <div className="flex flex-col items-center justify-center py-2 h-full gap">
            <input
              type="range"
              name="volumeControl"
              min={0}
              max={100}
              value={volume}
              onInput={handleVolume}
              className="range !-rotate-90 !w-24 !h-5 !rounded-full !bg-zinc-500 range-info"
              id="volumeControl"
            />

            {volume < 35 ? (
              <BsVolumeDown className="w-7 h-7 relative -bottom-12" />
            ) : (
              <BsVolumeUp className="w-7 h-7 relative -bottom-12" />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
