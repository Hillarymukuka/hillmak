import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HillMak Creative | Brand Identity, Digital Marketing & Content Production',
  description:
    'HillMak Creative is Zambia\'s leading creative agency — specialising in brand identity, corporate identity, exhibition branding, digital marketing, content production, and UI/UX design for ambitious brands.',
  keywords: [
    'HillMak Creative', 'brand identity Zambia', 'creative agency Lusaka', 'digital marketing Zambia',
    'corporate identity Africa', 'exhibition branding Zambia', 'content production Lusaka',
    'UI UX design Zambia', 'logo design Zambia', 'brand strategy Africa',
  ],
  openGraph: {
    title: 'HillMak Creative | Where Brands Come Alive',
    description:
      'Brand identity, digital marketing, exhibition branding, and content production for ambitious businesses across Zambia and Africa.',
    url: 'https://hillmak.co.zm/creative',
    images: [{ url: '/hillmak-creative-hero.avif', width: 1200, height: 630, alt: 'HillMak Creative' }],
  },
  twitter: {
    title: 'HillMak Creative | Where Brands Come Alive',
    description: 'Brand identity, digital marketing, exhibition branding, and content production across Africa.',
    images: ['/hillmak-creative-hero.avif'],
  },
  alternates: {
    canonical: 'https://hillmak.co.zm/creative',
  },
};

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
