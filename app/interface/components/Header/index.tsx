import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

export function HeaderComponent() {
  return (
    <header className="flex justify-between p-10 lg:w-[1300px] lg:mx-auto lg:my-0">
      <h1 className="font-bold text-4xl">Chillify</h1>

      <nav className="flex items-center gap-4">
        <a
          className="group"
          href="https://github.com/Marc0sGabriel"
          target="_blank"
        >
          <SiGithub className="group-hover:fill-pink-400 h-6 w-6" />
        </a>
      </nav>
    </header>
  );
}
