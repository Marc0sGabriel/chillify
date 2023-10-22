'use client';

import { MdOutlineWatchLater, MdOutlineStickyNote2 } from 'react-icons/md';
import { PomodoroWidget } from '../PomodoroWidget';
import { useState } from 'react';

export function ProductivityComponent() {
  const [showPomodoro, setShowPomodoro] = useState(false);

  function handlePomodoroDisplay() {
    setShowPomodoro(!showPomodoro);
  }

  return (
    <>
      <div className="flex items-center gap-2 justify-center relative top-[-4rem]">
        <MdOutlineStickyNote2
          className="w-5 h-5 hover:cursor-pointer"
          aria-label="button to create a task"
        />

        <button
          onClick={() => handlePomodoroDisplay()}
          className="tooltip tooltip-bottom hover:cursor-pointer"
          data-tip="pomodoro"
          aria-label="button to create a pomodoro"
        >
          <MdOutlineWatchLater className="w-5 h-5" />
        </button>
      </div>

      {showPomodoro && <PomodoroWidget />}
    </>
  );
}
