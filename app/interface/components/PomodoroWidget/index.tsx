import { Montserrat } from 'next/font/google';
import { HiOutlineArrowPath } from 'react-icons/hi2';
const montSerrat = Montserrat({ subsets: ['latin'] });

export function PomodoroWidget() {
  return (
    <>
      <nav className="w-fit mx-auto">
        <button className="btn btn-ghost btn-xs">Pomodoro</button>
        <button className="btn btn-ghost btn-xs">Short break</button>
        <button className="btn btn-ghost btn-xs">Long break</button>
      </nav>
      <div className="card w-[24rem] p-3 bg-zinc-700 mx-auto mb-10 flex-row justify-between items-center gap-5">
        <section className={`${montSerrat.className} text-5xl font-bold`}>
          <span>2</span>
          <span>5</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </section>

        <div className="card-actions flex items-center">
          <button className="btn btn-sm w-28 btn-outline hover:bg-gray-100 rounded-full text-gray-200">
            Start
          </button>

          <button>
            <HiOutlineArrowPath className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
}
