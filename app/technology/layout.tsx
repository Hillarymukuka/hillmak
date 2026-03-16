import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HillMak Technology | Enterprise Software, AI & Digital Infrastructure',
  description:
    'HillMak Technology delivers custom enterprise software, AI & automation, procurement platforms, ERP systems, and digital infrastructure solutions for businesses across Zambia and Africa.',
  keywords: [
    'HillMak Technology', 'enterprise software Zambia', 'software development Lusaka',
    'AI automation Africa', 'procurement platform Zambia', 'ERP Zambia', 'cloud infrastructure Africa',
    'business intelligence Zambia', 'IoT systems Africa', 'DevOps Lusaka',
  ],
  openGraph: {
    title: 'HillMak Technology | Enterprise Software & AI Solutions',
    description:
      'Custom enterprise applications, AI systems, and digital infrastructure engineered for scale. Built for businesses across Africa.',
    url: 'https://hillmak.co.zm/technology',
    images: [{ url: '/Hero section ( Technology ).avif', width: 1200, height: 630, alt: 'HillMak Technology' }],
  },
  twitter: {
    title: 'HillMak Technology | Enterprise Software & AI Solutions',
    description: 'Custom enterprise applications, AI systems, and digital infrastructure engineered for scale.',
    images: ['/Hero section ( Technology ).avif'],
  },
  alternates: {
    canonical: 'https://hillmak.co.zm/technology',
  },
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
