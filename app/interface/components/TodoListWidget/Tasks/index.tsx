import { BsCheckSquareFill, BsFillTrash3Fill, BsSquare } from 'react-icons/bs';
import { TaskProps } from '..';

interface TasksProps {
  task: TaskProps;
  onComplete: (taskID: string) => void;
  onDelete: (taskID: string) => void;
}

export function Tasks({ onComplete, onDelete, task }: TasksProps) {
  return (
    <>
      {!task.title ? (
        <div />
      ) : (
        <section className="flex justify-between items-center my-2 gap-4 bg-zinc-700 p-2 rounded">
          <div className="flex items-center gap-2">
            <button onClick={() => onComplete(task.id)}>
              {task.isCompleted ? (
                <BsCheckSquareFill className="h-5 w-5 fill-purple-400" />
              ) : (
                <BsSquare className="h-5 w-5 fill-purple-400" />
              )}
            </button>
            <span>{task.title}</span>
          </div>

          <button onClick={() => onDelete(task.id)}>
            <BsFillTrash3Fill className="h-5 w-5 duration-200 transition-all fill-zinc-400 hover:fill-red-400" />
          </button>
        </section>
      )}
    </>
  );
}
