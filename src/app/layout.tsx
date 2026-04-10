import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL('https://droneagricol.ro'),
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://droneagricol.ro',
    siteName: 'DroneAgricol.ro',
    title: 'Directorul Operatorilor de Drone Agricole din România și Moldova',
    description:
      'Găsește rapid operatori verificați de drone agricole în județul tău. Servicii de pulverizare, fertilizare, cartografiere și monitorizare.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DroneAgricol.ro — Directorul Operatorilor de Drone Agricole',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Directorul Operatorilor de Drone Agricole | DroneAgricol.ro',
    description:
      'Găsește operatori verificați de drone agricole în România și Moldova.',
    images: ['/images/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#2D6A4F" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-700 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Sari la conținut
        </a>
        <GoogleAnalytics />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
