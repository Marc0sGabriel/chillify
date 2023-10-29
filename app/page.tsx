import { HeaderComponent } from './interface/components/Header';
import { Player } from './interface/components/MusicPlayer/Player';
import { ProductivityComponent } from './interface/components/ProductivityActions';

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <ProductivityComponent />
      <Player />
    </main>
  );
}
