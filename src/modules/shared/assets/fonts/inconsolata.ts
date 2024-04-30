import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inconsolata } from 'next/font/google';

export const incon: NextFont = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});
