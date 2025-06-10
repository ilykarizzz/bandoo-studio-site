import { Metadata } from 'next';

export function generateStructuredData() {  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Bandoo Studio',
    url: 'https://bandoo.studio',
    logo: 'https://bandoo.studio/bandologo.png',
    image: 'https://bandoo.studio/og-image.jpg',
    description: 'Profesjonalne studio nagrań oferujące usługi nagrywania, mixu, masteringu i produkcji muzycznej.',    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Swarozyca 5a',
      addressLocality: 'Chojnice',
      addressRegion: 'Pomorskie',
      addressCountry: 'PL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.696170',
      longitude: '17.554220'
    },    telephone: '+48667530007',
    email: 'Kornowski.karol1@gmail.com',
    sameAs: [
      'https://www.instagram.com/bandoo.studio/'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '12:00',
        closes: '18:00'
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Nagrania wokalne',
        description: 'Profesjonalne nagrania wokalne z wykorzystaniem mikrofonu Neumann TLM 102'
      },
      {
        '@type': 'Offer',
        name: 'Mix i mastering',
        description: 'Profesjonalny mix i mastering przy użyciu wysokiej klasy narzędzi'
      },
      {
        '@type': 'Offer',
        name: 'Produkcja muzyczna',
        description: 'Kompleksowa produkcja muzyczna od pomysłu do gotowego utworu'
      }
    ],
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Anna Kowalska'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        datePublished: '2024-05-20',
        reviewBody: 'Świetne studio z profesjonalnym podejściem. Polecam każdemu artyście!'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '87',
      bestRating: '5',
      worstRating: '1'
    }
  };
}

export function generateLocalBusinessData() {  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://bandoo.studio',
    name: 'Bandoo Studio',
    image: 'https://bandoo.studio/og-image.jpg',
    url: 'https://bandoo.studio',
    telephone: '+48123456789',
    priceRange: '$$',
    description: 'Profesjonalne studio nagrań oferujące usługi nagrywania, mixu, masteringu i produkcji muzycznej.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Przykładowa 123',
      addressLocality: 'Warszawa',
      postalCode: '00-001',
      addressCountry: 'PL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.229676',
      longitude: '21.012229'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '12:00',
        closes: '18:00'
      }
    ]
  };
}
