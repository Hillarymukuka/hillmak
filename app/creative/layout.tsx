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
      url: 'https://www.hillmak.co.zm/creative',
  },
  twitter: {
    title: 'HillMak Creative | Where Brands Come Alive',
    description: 'Brand identity, digital marketing, exhibition branding, and content production across Africa.',
  },
  alternates: {
    canonical: 'https://www.hillmak.co.zm/creative',
  },
};

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
