import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';
import { SkipToContent } from '../components/SkipToContent';
import { CustomCursor } from '../components/CustomCursor';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { ReducedMotionProvider } from '../context/ReducedMotionContext';
import { Analytics } from '@vercel/analytics/react';
import { defaultMetadata, viewport } from '../lib/metadata';
import { generateStructuredData, generateLocalBusinessData } from '../lib/structuredData';

export const metadata = defaultMetadata;
export { viewport };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Generate structured data for the page
  const studioData = generateStructuredData();
  const localBusinessData = generateLocalBusinessData();  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(studioData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData)
          }}
        />
      </head>      <body className="bg-darkbg text-white transition-colors duration-300">
          <ReducedMotionProvider>
            <SkipToContent />
            <CustomCursor />
            <ScrollProgressBar />
            <Navbar />
            <PageTransition>
              <main id="main-content">
                {children}
              </main>
            </PageTransition>
            <Footer />
            <Analytics />
          </ReducedMotionProvider>
      </body>
    </html>
  );
}