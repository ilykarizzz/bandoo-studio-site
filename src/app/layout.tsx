import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bandoo Studio - Profesjonalne Studio Nagrań',
  description: 'Studio nagrań Bandoo oferuje profesjonalne nagrania, mix, mastering oraz produkcję muzyczną. Najwyższa jakość dźwięku w przystępnych cenach.',
  openGraph: {
    title: 'Bandoo Studio - Profesjonalne Studio Nagrań',
    description: 'Studio nagrań Bandoo oferuje profesjonalne nagrania, mix, mastering oraz produkcję muzyczną.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}