import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="centered p-2">
      <Link
        href="http://www.github.com/lunaticfriki"
        target="_blank"
        className="text-white transition-all hover:text-[var(--primary)]"
      >
        Oscar Ventura Ortiz, <span>{new Date().getFullYear()}</span>
      </Link>
    </footer>
  );
};
