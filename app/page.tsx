import { HeaderComponent } from './interface/components/Header';
import { MusicPlayerComponent } from './interface/components/MusicPlayer';
import { PomodoroWidget } from './interface/components/PomodoroWidget';

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <PomodoroWidget />
      <MusicPlayerComponent />
    </main>
  );
}
