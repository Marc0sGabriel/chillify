import { RefObject } from 'react';
import { formatTime } from '@/app/utils/formatTime';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

interface ProgressBarProps {
  duration: number | undefined;
  timeProgress: number | undefined;
}

export function ProgressBar({ duration, timeProgress }: ProgressBarProps) {
  return (
    <div
      className={`absolute text-sm left-[3rem] top-[6.8%] ${orbitron.className} text-purple-300`}
    >
      <span>{formatTime(timeProgress)}</span>
      <span> / </span>
      <span>{formatTime(duration)}</span>
    </div>
  );
}
