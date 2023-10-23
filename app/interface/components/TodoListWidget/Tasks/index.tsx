import { BsCheckSquareFill, BsFillTrash3Fill } from 'react-icons/bs';

interface TaskProps {
  taskName: string;
}

export function Tasks({ taskName }: TaskProps) {
  return (
    <>
      {!taskName ? (
        <div />
      ) : (
        <section className="flex justify-between items-center my-2 gap-4 bg-zinc-700 p-2 rounded">
          <div className="flex items-center gap-2">
            <button>
              <BsCheckSquareFill className="h-5 w-5 fill-purple-400" />
            </button>
            <span>{taskName}</span>
          </div>

          <button>
            <BsFillTrash3Fill className="h-5 w-5 duration-200 transition-all fill-zinc-400 hover:fill-red-400" />
          </button>
        </section>
      )}
    </>
  );
}
