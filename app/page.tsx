import { FooterComponent } from './interface/components/Footer';
import { HeaderComponent } from './interface/components/Header';
import { MusicPlayerComponent } from './interface/components/MusicPlayer';

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <MusicPlayerComponent />
    </main>
  );
}
