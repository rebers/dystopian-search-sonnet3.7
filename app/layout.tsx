import './globals.css';
import { Exo_2, Orbitron, Space_Mono } from 'next/font/google';
import { Metadata } from 'next';

const exo = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'OmniQuery AI - Search Every Byte of the Internet',
  description: 'The revolutionary AI that legally searches the entire internet, including public, deep, and dark web, to deliver unparalleled insights.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${orbitron.variable} ${spaceMono.variable}`}>
      <body className="bg-dark-light text-light">
        {children}
      </body>
    </html>
  );
} 