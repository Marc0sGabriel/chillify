import { HeaderComponent } from './interface/components/Header';
import { MusicPlayerComponent } from './interface/components/MusicPlayer';
import { ProductivityComponent } from './interface/components/ProductivityActions';

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <ProductivityComponent />
      <MusicPlayerComponent />
    </main>
  );
}
