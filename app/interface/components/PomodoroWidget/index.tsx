'use client';

import { Montserrat } from 'next/font/google';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import { BsGripVertical } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Draggable from '@/app/utils/dragElement';

const montSerrat = Montserrat({ subsets: ['latin'] });

export function PomodoroWidget() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [effectResetButton, setEffectResetButton] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      let timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time, isActive]);

  function getTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const parsed2DigitsMinutes = String(minutes).padStart(2, '0');
    const parsed2DigitsSeconds = String(seconds).padStart(2, '0');

    return `${parsed2DigitsMinutes}:${parsed2DigitsSeconds}`;
  }

  function resetTimer() {
    setIsActive(false);
    setTime(25 * 60);
    setEffectResetButton(!effectResetButton);
  }

  const toggleTimer = () => {
    setIsActive(!isActive);
    setEffectResetButton(false);
  };

  // Tailwind classes styles
  const pomodoroButtonsActive =
    'focus-within:text-purple-800 focus-within:bg-purple-300/80';

  return (
    <Draggable>
      <div className="relative translate-x-1/2 left-[240%]">
        <nav className="w-fit mx-auto">
          <button
            onClick={() => setTime(25 * 60)}
            className={`btn btn-ghost btn-xs ${pomodoroButtonsActive} `}
          >
            Pomodoro
          </button>

          <button
            onClick={() => setTime(5 * 60)}
            className={`btn btn-ghost btn-xs ${pomodoroButtonsActive}`}
          >
            Short break
          </button>

          <button
            onClick={() => setTime(15 * 60)}
            className={`btn btn-ghost btn-xs ${pomodoroButtonsActive}`}
          >
            Long break
          </button>
        </nav>
        <div className="card w-[24rem] p-3 bg-zinc-700 mx-auto mt-1 mb-10 flex-row justify-between items-center gap-5">
          <BsGripVertical
            className="h-7 w-7"
            arial-label="click and hold to drag element"
          />

          <section className={`${montSerrat.className} text-5xl font-bold`}>
            <span>{getTime(time)}</span>
          </section>

          <div className="card-actions flex items-center">
            <button
              onClick={toggleTimer}
              className="btn btn-sm w-28 btn-outline hover:bg-gray-100 rounded-full text-gray-200"
            >
              {isActive ? 'Pause' : 'Start'}
            </button>

            <button
              onClick={resetTimer}
              className={`${effectResetButton && 'animate-spin-slow'}`}
            >
              <HiOutlineArrowPath className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
