import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Bandoo Studio',
  description: 'Studio nagrań – Bandoo Studio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}