import { MdOutlineWatchLater, MdOutlineStickyNote2 } from 'react-icons/md';

export function ProductivityComponent() {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineStickyNote2
        className="w-5 h-5 hover:cursor-pointer"
        aria-label="button to create a task"
      />

      <button
        className="tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="pomodoro"
        aria-label="button to create a pomodoro"
      >
        <MdOutlineWatchLater className="w-5 h-5" />
      </button>
    </div>
  );
}
