'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { z } from 'zod';
import { Tasks } from './Tasks';
import { BsXOctagon, BsGripHorizontal, BsPlusLg } from 'react-icons/bs';
import Draggable from 'react-draggable';

const taskSchema = z.object({
  getTaskValue: z
    .string()
    .min(3, { message: 'Please fill this field' })
    .max(40, { message: 'task name is too long exceeded 40 letter limit' }),
});

export function TodoListComponent() {
  const [task, setTask] = useState<string[]>(['']);
  const [getTaskValue, setGetTaskValue] = useState('');

  function onChangeTasks(event: ChangeEvent<HTMLInputElement>) {
    setGetTaskValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validate = taskSchema.parse({ getTaskValue });

    setTask([...task, validate.getTaskValue]);

    setGetTaskValue('');
    event.currentTarget.reset();
  }

  const totalTasks = task.length - 1;
  const handleErrorTaskLength = getTaskValue.length >= 40;
  const isEmptyTaskField = getTaskValue.length === 0;

  return (
    <Draggable>
      <div className="card w-[30rem] bg-zinc-800 p-3 mx-auto mb-7 absolute">
        <BsGripHorizontal className="h-7 w-7 self-end cursor-grab" />
        <h3 className="text-2xl font-medium">Your tasks today</h3>
        <span className="font-mono">0/{totalTasks}</span>
        <div className="divider" />

        <form onSubmit={handleSubmit} action="" className="flex gap-4">
          <input
            type="text"
            onChange={onChangeTasks}
            required
            placeholder="What's need be done?"
            className="input w-full mb-5 bg-transparent input-bordered focus:outline-sky-400"
          />

          {/* Trocar por Ref para não renderizar atoa */}
          {handleErrorTaskLength && (
            <div className="animate-pulse alert alert-error w-96 fixed left-12 top-[45rem] font-mono font-bold">
              <BsXOctagon className="w-5 h-5" /> Error: task name is too long!
            </div>
          )}

          <button
            disabled={isEmptyTaskField}
            className="btn btn-circle btn-outline text-2xl border-zinc-200 hover:bg-zinc-200"
          >
            <BsPlusLg className="w-6 h-6" />
          </button>
        </form>

        {/* TASK LIST */}
        <ul className="max-h-52 overflow-y-auto px-2">
          {task.map((task) => <Tasks key={task} taskName={task} />).reverse()}
        </ul>
      </div>
    </Draggable>
  );
}
