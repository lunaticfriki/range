import type { ReactNode } from 'react';

import './globals.css';

import { Footer, Header, incon } from '@/modules';

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={incon.className}>
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
