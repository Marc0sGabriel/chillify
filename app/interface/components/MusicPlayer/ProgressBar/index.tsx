import { RefObject } from 'react';

interface ProgressBarProps {
  formatTime: (time: number | undefined) => string;
  handleProgressChange: () => void;
  duration: number | undefined;
  timeProgress: number | undefined;
  progressBarRef: RefObject<HTMLInputElement>;
}

export function ProgressBar({
  duration,
  formatTime,
  handleProgressChange,
  progressBarRef,
  timeProgress,
}: ProgressBarProps) {
  return (
    <div className="flex justify-between items-center text-zinc-300">
      <small aria-label="current-time">{formatTime(timeProgress)}</small>
      <input
        ref={progressBarRef}
        onChange={handleProgressChange}
        defaultValue={0}
        type="range"
        aria-label="audio progress bar"
      />
      <small aria-label="duration">{formatTime(duration)}</small>
    </div>
  );
}
