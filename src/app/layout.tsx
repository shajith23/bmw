import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BMW M4 GT3 EVO | BMW M Motorsport',
  description:
    'Experience the BMW M4 GT3 EVO — BMW M Motorsport\'s latest evolution of its championship-winning GT3 race car. Premium luxury scrollytelling showcase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="bg-white text-[#111111] antialiased selection:bg-[#CC0000] selection:text-white min-h-screen">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
