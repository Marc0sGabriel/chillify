import { MdOutlineWatchLater, MdOutlineStickyNote2 } from 'react-icons/md';

export function ProductivityComponent() {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineStickyNote2 className="w-5 h-5" />
      <MdOutlineWatchLater className="w-5 h-5" />
    </div>
  );
}
