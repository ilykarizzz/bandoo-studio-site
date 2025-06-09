import { Metadata, Viewport } from 'next';

/**
 * Default viewport configuration for the Bandoo Studio website
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9FAFB' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F19' }
  ]
};

/**
 * Default metadata for the Bandoo Studio website
 * Can be extended or overridden by individual pages
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://bandoo-studio.pl'),
  title: {
    default: 'Bandoo Studio - Profesjonalne Studio Nagrań | Najwyższa Jakość Dźwięku',
    template: '%s | Bandoo Studio'
  },
  description: 
    'Studio nagrań Bandoo oferuje profesjonalne nagrania, mix, mastering oraz produkcję muzyczną. ' +
    'Nowoczesny sprzęt, doświadczeni realizatorzy i przystępne ceny. Umów sesję już dziś!',
  applicationName: 'Bandoo Studio',
  keywords: [
    'studio nagrań', 
    'nagrywanie wokalu', 
    'mix', 
    'mastering', 
    'produkcja muzyczna', 
    'studio muzyczne', 
    'nagrania muzyczne',
    'studio nagraniowe',
    'realizacja dźwięku',
    'rejestracja dźwięku',
    'studio produkcji muzycznej',
    'realizacja nagrań',
    'profesjonalny miks',
    'rap nagrania',
    'nowoczesne studio nagrań',
    'nagrywanie instrumentów'
  ],
  authors: [{ name: 'Bandoo Studio', url: 'https://bandoo-studio.pl' }],
  creator: 'Bandoo Studio',
  publisher: 'Bandoo Studio',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://bandoo-studio.pl',
    siteName: 'Bandoo Studio',
    title: 'Bandoo Studio - Profesjonalne Studio Nagrań | Najwyższa Jakość Dźwięku',
    description: 'Studio nagrań Bandoo oferuje profesjonalne nagrania, mix, mastering oraz produkcję muzyczną. Nowoczesny sprzęt, doświadczeni realizatorzy i przystępne ceny.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bandoo Music Studio - Profesjonalne nagrania',
      },
      {
        url: '/gallery/studio-1.jpg',
        width: 1080, 
        height: 720,
        alt: 'Bandoo Studio - Wnętrze studia',
      }
    ],
  },  
  twitter: {
    card: 'summary_large_image',
    site: '@bandoostudio',
    creator: '@bandoostudio',
    title: 'Bandoo Studio - Profesjonalne Studio Nagrań',
    description: 'Studio nagrań Bandoo oferuje profesjonalne nagrania, mix, mastering oraz produkcję muzyczną. Umów sesję już dziś!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bandoo-studio.pl',
    languages: {
      'pl-PL': 'https://bandoo-studio.pl',
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your verification code
  },
};

/**
 * Helper function to generate metadata for specific pages
 * 
 * @param title Page specific title
 * @param description Page specific description
 * @param path Page path (e.g., '/services')
 * @param image OpenGraph image path (optional)
 */
export function generateMetadata(
  title: string,
  description: string,
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${title} | Bandoo Studio`;
  const url = `https://bandoo-studio.pl${path}`;
  const ogImage = image || '/og-image.jpg';
  
  return {
    ...defaultMetadata,
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        'pl-PL': url,
      },
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
