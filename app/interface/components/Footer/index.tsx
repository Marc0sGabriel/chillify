import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export function FooterComponent() {
  const yearNow = new Date().getFullYear().toString();

  return (
    <footer className="w-fit mx-auto my-0">
      <section>
        <span className="flex items-center justify-center gap-2">
          Built with <SiTailwindcss /> <SiNextdotjs /> <SiReact /> and 🩵
        </span>
      </section>
      <small>Copyright &copy; {yearNow} all rights reserved</small>
    </footer>
  );
}
