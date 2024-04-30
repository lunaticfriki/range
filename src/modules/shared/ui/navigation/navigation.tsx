'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex items-center gap-2">
        <li>
          <Link
            href="/exercise-1"
            className={clsx('', {
              'text-[var(--primary)]': pathname === '/exercise-1',
            })}
          >
            Exercise 1
          </Link>
        </li>
        <li>
          <Link
            href="/exercise-2"
            className={clsx('', {
              'text-[var(--primary)]': pathname === '/exercise-2',
            })}
          >
            Exercise 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};
