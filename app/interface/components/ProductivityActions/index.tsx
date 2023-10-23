'use client';

import { MdOutlineWatchLater, MdOutlineStickyNote2 } from 'react-icons/md';
import { PomodoroWidget } from '../PomodoroWidget';
import { useState } from 'react';
import { TodoListComponent } from '../TodoListWidget';

export function ProductivityComponent() {
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false);

  function handlePomodoroDisplay() {
    setShowPomodoro(!showPomodoro);
  }

  function handleTodoListDisplay() {
    setShowTodoList(!showTodoList);
  }

  return (
    <>
      <div className="flex items-center left-[50%] justify-center relative translate-x-0 top-[-4rem] gap-2 self-center w-fit justify-self-center">
        <button
          onClick={() => handleTodoListDisplay()}
          className="tooltip tooltip-bottom hover:cursor-pointer"
          data-tip="todo list"
          aria-label="button to create a task"
        >
          <MdOutlineStickyNote2 className="w-5 h-5 hover:cursor-pointer" />
        </button>

        <button
          onClick={() => handlePomodoroDisplay()}
          className="tooltip tooltip-bottom hover:cursor-pointer"
          data-tip="pomodoro"
          aria-label="button to create a pomodoro"
        >
          <MdOutlineWatchLater className="w-5 h-5" />
        </button>
      </div>

      {showTodoList && <TodoListComponent />}

      {showPomodoro && <PomodoroWidget />}
    </>
  );
}
