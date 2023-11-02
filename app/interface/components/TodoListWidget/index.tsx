'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasks } from './Tasks';
import { BsXOctagon, BsGripHorizontal, BsPlusLg } from 'react-icons/bs';
import Draggable from '@/app/utils/dragElement';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function TodoListComponent() {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [getTaskValue, setGetTaskValue] = useState('');

  function onChangeTasks(event: ChangeEvent<HTMLInputElement>) {
    setGetTaskValue(event.target.value);
  }

  function handleCreateNewTask(taskName: string) {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskName,
        isCompleted: false,
      },
    ]);
  }

  function handleCheckAsComplete(taskID: string) {
    const newTasks = task.map((taskData: TaskProps) => {
      if (taskData.id === taskID) {
        return {
          ...taskData,
          isCompleted: !taskData.isCompleted,
        };
      }

      return taskData;
    });

    setTask(newTasks);
  }

  function handleDeleteTask(taskID: string) {
    const removeTasks = task.filter((taskData: TaskProps) => {
      taskData.id !== taskID;
    });

    setTask(removeTasks);

    console.log(removeTasks);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleCreateNewTask(getTaskValue);
    setGetTaskValue('');
    event.currentTarget.reset();
  }

  const pendingTasks = task.length;
  const handleErrorTaskLength = getTaskValue.length >= 40;
  const isEmptyTaskField = getTaskValue.length === 0;
  const finishedTasks = task.filter((data) => data.isCompleted).length;

  return (
    <Draggable>
      <div className="card w-[30rem] bg-zinc-800 p-3 mx-auto mb-7 absolute pointer-events-auto">
        <BsGripHorizontal className="h-7 w-7 self-end cursor-grab" />
        <h3 className="text-2xl font-medium">Your tasks today</h3>
        <span className="font-mono">
          {finishedTasks}/{pendingTasks}
        </span>
        <div className="divider" />

        <form onSubmit={handleSubmit} action="" className="flex gap-4">
          <input
            type="text"
            onChange={onChangeTasks}
            required
            placeholder="What's need be done?"
            className="input w-full mb-5 bg-transparent input-bordered focus:outline-sky-400"
          />

          {handleErrorTaskLength && (
            <div className="animate-pulse alert alert-error w-96 fixed left-12 top-[43rem] font-mono font-bold">
              <BsXOctagon className="w-5 h-5" /> Error: task name is too long!
            </div>
          )}

          <button
            disabled={isEmptyTaskField || handleErrorTaskLength}
            className="btn btn-circle btn-outline text-2xl border-zinc-200 hover:bg-zinc-200"
          >
            <BsPlusLg className="w-6 h-6" />
          </button>
        </form>

        {/* TASK LIST */}
        <ul className="max-h-52 overflow-y-auto px-2">
          {task
            .map((task) => (
              <Tasks
                key={task.id}
                task={task}
                onComplete={handleCheckAsComplete}
                onDelete={handleDeleteTask}
              />
            ))
            .reverse()}
        </ul>
      </div>
    </Draggable>
  );
}
