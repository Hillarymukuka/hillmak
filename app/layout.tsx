import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hillmak.co.zm'),
  title: {
    default: 'HillMak | Technology & Creative Solutions — Zambia',
    template: '%s | HillMak',
  },
  description:
    'HillMak is a Zambian group combining HillMak Technology — enterprise software, AI & automation — with HillMak Creative — brand identity, digital marketing & content production. Based in Lusaka, operating globally.',
  keywords: [
    'HillMak', 'Zambia technology', 'Lusaka software development', 'brand identity Zambia',
    'enterprise software Africa', 'AI automation Zambia', 'digital marketing Lusaka',
    'creative agency Zambia', 'procurement platforms Africa', 'HillMak Creative', 'HillMak Technology',
  ],
  authors: [{ name: 'HillMak', url: 'https://www.hillmak.co.zm' }],
  creator: 'HillMak',
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://www.hillmak.co.zm',
    siteName: 'HillMak',
    title: 'HillMak | Technology & Creative Solutions — Zambia',
    description:
      'Enterprise software, AI systems, brand identity, and digital marketing solutions. Two divisions. One vision. Built in Zambia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HillMak | Technology & Creative Solutions — Zambia',
    description: 'Enterprise software, AI systems, brand identity, and digital marketing. Built in Zambia.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/FAVIcon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/FAVIcon.jpg',
    apple: '/FAVIcon.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
