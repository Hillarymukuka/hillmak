'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';
import ProjectFormModal from '@/components/ProjectFormModal';

export default function CreativePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const [modalOpen, setModalOpen] = useState(false);

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Strategic positioning that defines who you are, what you stand for, and how you connect with your audience. We build brands that resonate.',
      capabilities: ['Brand Positioning', 'Market Research', 'Competitive Analysis', 'Brand Architecture']
    },
    {
      title: 'Corporate Identity',
      description: 'Visual systems that capture your essence and communicate your values. From logos to comprehensive brand guidelines.',
      capabilities: ['Logo Design', 'Visual Identity Systems', 'Brand Guidelines', 'Stationery Design']
    },
    {
      title: 'Exhibition Branding',
      description: 'Immersive brand experiences that leave lasting impressions. We design exhibitions, trade show booths, and event spaces that tell your story.',
      capabilities: ['Booth Design', 'Environmental Graphics', '3D Visualization', 'Event Collateral']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that reach the right audience at the right time. We combine creativity with analytics to drive real results.',
      capabilities: ['Social Media Strategy', 'Content Marketing', 'Email Campaigns', 'Performance Analytics']
    },
    {
      title: 'Content Production',
      description: 'Compelling stories told through photography, video, and multimedia. We create content that engages, inspires, and converts.',
      capabilities: ['Photography', 'Video Production', 'Motion Graphics', 'Copywriting']
    },
    {
      title: 'UI/UX Design',
      description: 'Digital experiences that users love. Beautiful interfaces backed by intuitive user journeys and solid research.',
      capabilities: ['User Research', 'Interface Design', 'Prototyping', 'Usability Testing']
    }
  ];

  return (
    <>
    <div className="bg-white text-creative-bg">

      {/* â”€â”€ Hero Section â”€â”€ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
        >
          <Image
            src="/hillmak-creative-hero.avif"
            alt="HillMak Creative"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs uppercase tracking-[0.2em] text-creative-accent font-semibold mb-4"
            >
              HillMak Creative Division
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight text-white"
            >
              Where Brands{' '}
              <span className="bg-gradient-to-r from-creative-primary to-creative-accent bg-clip-text text-transparent">
                Come Alive
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              We craft bold identities, dynamic campaigns, and immersive digital experiences
              that make brands unforgettable.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-creative-primary hover:bg-creative-primary-dark text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              >
                Explore Our Work
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Philosophy Section â”€â”€ white bg, charcoal text â”€â”€ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-creative-bg"
            >
              We Don't Follow Trends.{' '}
              <span className="text-creative-primary">We Create Them.</span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-base md:text-lg text-creative-bg/70 leading-relaxed"
            >
              In a world of templated design and cookie-cutter campaigns, we bring
              fresh perspectives rooted in African creativity and global standards.
              Every brand has a unique story â€” we make sure yours gets heard.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Services Grid â”€â”€ charcoal bg, white text â”€â”€ */}
      <section id="services" className="py-20 md:py-28 bg-creative-bg">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUpVariants}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Our <span className="text-creative-primary">Services</span>
              </h2>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                Comprehensive creative solutions that elevate your brand from concept to execution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  custom={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-base font-bold mb-3">
                    <span className="bg-gradient-to-r from-creative-primary to-creative-accent bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="text-xs uppercase tracking-wider text-creative-accent font-semibold mb-3">
                      What We Do
                    </p>
                    <ul className="space-y-1.5">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                          <span className="w-1 h-1 rounded-full bg-creative-accent flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Carousel -- white bg */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-custom mb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs uppercase tracking-[0.2em] text-creative-primary font-semibold mb-3"
            >
              Selected Work
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight text-creative-bg"
            >
              Our <span className="text-creative-primary">Portfolio</span>
            </motion.h2>
          </motion.div>
        </div>
        <PortfolioCarousel />
      </section>

      {/* Approach Section -- white bg, charcoal text */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight text-creative-bg"
            >
              Our <span className="text-creative-primary">Approach</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Discover',
                  description: 'We dive deep into your business, market, and audience to uncover insights that drive creative strategy.'
                },
                {
                  number: '02',
                  title: 'Design',
                  description: 'Bold concepts brought to life through world-class design, rooted in strategy and crafted with precision.'
                },
                {
                  number: '03',
                  title: 'Deliver',
                  description: 'Flawless execution across all touchpoints, ensuring your brand makes the impact it deserves.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  custom={index}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-creative-bg/20 mb-3 select-none">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-creative-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-creative-bg/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── Brands We've Shaped ── */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs uppercase tracking-[0.2em] text-creative-primary font-semibold mb-3"
            >
              Trusted By
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight text-creative-bg"
            >
              Brands We&apos;ve <span className="text-creative-primary">Shaped</span>
            </motion.h2>
          </motion.div>
          <ClientLogos />
        </div>
      </section>
      {/* â”€â”€ CTA Section â”€â”€ charcoal bg, white text â”€â”€ */}
      <section className="py-20 md:py-28 bg-creative-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-creative-primary/10 to-creative-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
              Let's Create Something{' '}
              <span className="bg-gradient-to-r from-creative-primary to-creative-accent bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-10">
              Whether you're launching a new brand or refreshing an existing one,
              we're here to make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-creative-primary hover:bg-creative-primary-dark text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              >
                Start Your Project
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

    <ProjectFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── Client Logos Component ────────────────────────────────────────────────────

const clients = [
  { name: 'MyCab',                logo: '/Logos/my-cab.webp',              tagline: 'Ride-Hailing',        color: '#FFD600', bg: '#1a1400' },
  { name: 'AVIS Fleet Zambia',    logo: '/Logos/avis-fleet-zambia.png',    tagline: 'Fleet Management',    color: '#DA291C', bg: '#1a0000' },
  { name: 'Enisco',               logo: '/Logos/Enisco.png',               tagline: 'Car Hire',            color: '#e63946', bg: '#1a0000' },
  { name: 'Kafue Gorge',          logo: '/Logos/kafue-gorge.png',          tagline: 'Energy',              color: '#1d6fd4', bg: '#001428' },
  { name: 'Redspot',              logo: '/Logos/Redspot.jpg',              tagline: 'Automotive',          color: '#e63946', bg: '#1a0000' },
  { name: 'Sanlam',               logo: '/Logos/Sanlam.png',               tagline: 'Financial Services',  color: '#0057a8', bg: '#000e24' },
  { name: 'Veritas',              logo: '/Logos/Veritas.jpg',              tagline: 'Consulting',          color: '#cc1418', bg: '#1a0000' },
  { name: 'VVob',                 logo: '/Logos/VVob.jpg',                 tagline: 'Services',            color: '#22c55e', bg: '#001409' },
  { name: 'Zambia Olympics',      logo: '/Logos/zambia-olympics.png',      tagline: 'Sports',              color: '#198c19', bg: '#001200' },
  { name: 'Zambia Statistics',    logo: '/Logos/zambia-statstics.png',     tagline: 'Government',          color: '#1d4ed8', bg: '#000f24' },
  { name: 'ZPPA',                 logo: '/Logos/ZPPA.png',                 tagline: 'Procurement',         color: '#16a34a', bg: '#001409' },
  { name: 'Xahara Tools',         logo: '/Logos/xahara-tools.webp',        tagline: 'Tools & Equipment',   color: '#f97316', bg: '#1c0e00' },
];

function ClientLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {clients.map((client, i) => (
        <ClientLogoCard key={i} client={client} index={i} />
      ))}
    </div>
  );
}

function ClientLogoCard({
  client,
  index,
}: {
  client: (typeof clients)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-pointer rounded-2xl overflow-hidden"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Base grey bg */}
      <div className="absolute inset-0 bg-creative-bg/10" />

      {/* Colour flood — wipes up from bottom on hover */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: client.bg }}
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: hovered ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Shimmer line that rides up with the wipe */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${client.color}, transparent)` }}
        initial={{ bottom: '0%', opacity: 0 }}
        animate={{
          bottom: hovered ? '100%' : '0%',
          opacity: hovered ? [0, 1, 0] : 0,
        }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-1.5 sm:gap-3 p-3 sm:p-5">
        {/* Logo image */}
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3, ease: 'backOut' }}
          className="relative w-full flex-1 min-h-0"
        >
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain select-none"
            style={{
              filter: hovered ? 'none' : 'grayscale(1) opacity(0.55)',
              transition: 'filter 0.4s ease',
            }}
            sizes="200px"
            draggable={false}
          />
        </motion.div>

        {/* Name */}
        <motion.p
          animate={{ color: hovered ? '#ffffff' : 'rgba(30,30,30,0.80)' }}
          transition={{ duration: 0.3 }}
          className="text-xs font-bold tracking-wide text-center leading-tight"
        >
          {client.name}
        </motion.p>

        {/* Tagline — reveals on hover */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25, delay: hovered ? 0.1 : 0 }}
          className="text-[10px] uppercase tracking-widest font-medium text-center"
          style={{ color: client.color }}
        >
          {client.tagline}
        </motion.p>
      </div>

      {/* Corner accent dot */}
      <motion.div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
        animate={{
          backgroundColor: hovered ? client.color : 'rgba(0,0,0,0.15)',
          scale: hovered ? [1, 1.6, 1] : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `inset 0 0 0 1px ${client.color}55, 0 0 20px ${client.color}22`
            : 'inset 0 0 0 1px rgba(0,0,0,0.08)',
        }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

// ── Portfolio Carousel Component ──────────────────────────────────────────────

const projects = [
  {
    category: 'Brand Development',
    title: 'MyCab — Brand Development',
    date: '2025',
    images: [
      '/Projects/mycab-brand-development/mycab-brand-development.avif',
      '/Projects/mycab-brand-development/mycab-stationary.webp',
      '/Projects/mycab-brand-development/mycab-company-profile.webp',
      '/Projects/mycab-brand-development/mycab-roll-up-2.webp',
      '/Projects/mycab-brand-development/company-profile.webp',
      '/Projects/mycab-brand-development/mycab-brochure-2-copy.webp',
      '/Projects/mycab-brand-development/brochure-copy.webp',
      '/Projects/mycab-brand-development/mycab-1.jpg',
      '/Projects/mycab-brand-development/mycab-3.webp',
      '/Projects/mycab-brand-development/mycab-5.jpg',
      '/Projects/mycab-brand-development/384115832_283187271160302_3891733947661847275_n.jpg',
    ],
    accent: '#FFD600',
    description: 'Full brand development for MyCab, a Zambian ride-hailing service. The project covered brand strategy, visual identity, logo system, colour palette, typography, and brand guidelines to establish a bold, trustworthy presence in the local transport market.',
  },
  {
    category: 'Brand Identity',
    title: 'Afrilotus — Brand Identity',
    date: '2025',
    images: [
      '/Projects/afrilotus-branding/afrilotus.webp',
      '/Projects/afrilotus-branding/couresel-01.webp',
      '/Projects/afrilotus-branding/couresel-02.webp',
      '/Projects/afrilotus-branding/couresel-03.webp',
      '/Projects/afrilotus-branding/couresel-04.webp',
      '/Projects/afrilotus-branding/couresel-05.webp',
      '/Projects/afrilotus-branding/couresel-06.webp',
    ],
    accent: '#ED145B',
    description: 'Comprehensive brand identity for Afrilotus, building a distinctive visual language that celebrates African heritage with a modern, premium aesthetic across all brand touchpoints.',
  },
  {
    category: 'Brand Collateral',
    title: 'AVIS Fleet Zambia — Brand Collateral',
    date: '2025',
    images: [
      '/Projects/avis-brand-collateral-design/avis.webp',
      '/Projects/avis-brand-collateral-design/avis-fleet-2.webp',
      '/Projects/avis-brand-collateral-design/avis-flyer-1.webp',
      '/Projects/avis-brand-collateral-design/avis-flyer-2.webp',
      '/Projects/avis-brand-collateral-design/avis-gidt-bag.webp',
      '/Projects/avis-brand-collateral-design/avis-mug-cup-2.webp',
      '/Projects/avis-brand-collateral-design/avis-note-books.webp',
      '/Projects/avis-brand-collateral-design/avis-red-note-book.webp',
    ],
    accent: '#DA291C',
    description: 'Brand collateral design suite for AVIS Fleet Zambia, covering marketing flyers, branded merchandise, stationery, and promotional materials aligned with the global AVIS brand framework.',
  },
  {
    category: 'Corporate Rebrand',
    title: 'Enisco — Corporate Rebrand',
    date: '2024',
    images: [
      '/Projects/ensico-rebranding/enisco-cover.webp',
      '/Projects/ensico-rebranding/enisco-logo.webp',
      '/Projects/ensico-rebranding/enisco-red.webp',
      '/Projects/ensico-rebranding/enisco-stationary.webp',
      '/Projects/ensico-rebranding/enisco-social-media-posters.webp',
      '/Projects/ensico-rebranding/cmpany-profile.webp',
      '/Projects/ensico-rebranding/cmpany-profile-2.webp',
      '/Projects/ensico-rebranding/enisco_result.webp',
      '/Projects/ensico-rebranding/artboard-3.jpg',
      '/Projects/ensico-rebranding/logo.jpg',
    ],
    accent: '#e63946',
    description: 'Full corporate rebrand for Enisco, a leading Zambian car hire company. The project delivered a bold new identity system including logo redesign, brand guidelines, stationery suite, and social media assets.',
  },
  {
    category: 'Brand Identity',
    title: 'Investcorp — Brand Identity',
    date: '2024',
    images: [
      '/Projects/investcorp-branding/investcorp-cover.webp',
      '/Projects/investcorp-branding/invescorp-bc.webp',
      '/Projects/investcorp-branding/investcorp-stationay.webp',
      '/Projects/investcorp-branding/invescorp-web.webp',
      '/Projects/investcorp-branding/invescorp-web-and-mobile.webp',
      '/Projects/investcorp-branding/invest-poster.webp',
      '/Projects/investcorp-branding/id-design.webp',
      '/Projects/investcorp-branding/profile.webp',
      '/Projects/investcorp-branding/profile-2.webp',
    ],
    accent: '#1d6fd4',
    description: 'End-to-end brand identity for Investcorp, a financial services firm. The project spanned logo design, stationery, digital assets, web presence, and a comprehensive brand standards manual.',
  },
  {
    category: 'Exhibition Branding',
    title: 'Lunsemfwa Hydro — Exhibition Branding',
    date: '2024',
    images: [
      '/Projects/lunsmfwa-exhibition-branding/1.jpg',
      '/Projects/lunsmfwa-exhibition-branding/2.jpg',
      '/Projects/lunsmfwa-exhibition-branding/3.jpg',
      '/Projects/lunsmfwa-exhibition-branding/4.jpg',
      '/Projects/lunsmfwa-exhibition-branding/5.jpg',
    ],
    accent: '#0ea5e9',
    description: 'Exhibition branding for Lunsemfwa Hydro Company at a national energy expo. Designed immersive large-format booth graphics, environmental signage, and branded display elements to communicate their clean energy mission.',
  },
  {
    category: 'Environmental Branding',
    title: 'ZPPA — Reception Branding',
    date: '2024',
    images: [
      '/Projects/zppa-reception-branding/Reception-Branding-ZPPA.webp',
      '/Projects/zppa-reception-branding/Reception-Branding-2-ZPPA.webp',
      '/Projects/zppa-reception-branding/Reception-Branding-3-ZPPA.webp',
      '/Projects/zppa-reception-branding/Reception-Branding-4-ZPPA.webp',
      '/Projects/zppa-reception-branding/zppa.jpg',
    ],
    accent: '#16a34a',
    description: 'Environmental and reception branding for ZPPA (Zambia Public Procurement Authority), transforming their office spaces with large-format wall graphics, signage systems, and branded interior elements that reflect the authority\'s professional identity.',
  },
];

function PortfolioCarousel() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [lightboxPhotoIdx, setLightboxPhotoIdx] = useState(0);
  const [cardW, setCardW] = useState(380);
  const dragStartX = useRef(0);
  const GAP = 24;

  useEffect(() => {
    const updateW = () => setCardW(window.innerWidth < 640 ? Math.min(window.innerWidth - 48, 300) : 380);
    updateW();
    window.addEventListener('resize', updateW);
    return () => window.removeEventListener('resize', updateW);
  }, []);

  const CARD_W = cardW;

  const openLightbox = (projectIdx: number) => {
    setLightboxIdx(projectIdx);
    setLightboxPhotoIdx(0);
  };

  // Close lightbox on Escape, navigate photos with arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      const imgs = projects[lightboxIdx].images;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxPhotoIdx((p) => Math.min(imgs.length - 1, p + 1));
      if (e.key === 'ArrowLeft') setLightboxPhotoIdx((p) => Math.max(0, p - 1));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx]);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(projects.length - 1, a + 1));

  return (
    <div className="relative">
      {/* Track */}
      <motion.div
        className="flex gap-6 pl-[max(2rem,calc((100vw-1280px)/2+2rem))] pr-12 cursor-grab active:cursor-grabbing select-none"
        drag="x"
        dragConstraints={{
          left: -(projects.length - 1) * (CARD_W + GAP),
          right: 0,
        }}
        animate={{ x: -(active * (CARD_W + GAP)) }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        onDragStart={(_, info) => {
          setDragging(true);
          dragStartX.current = info.point.x;
        }}
        onDragEnd={(_, info) => {
          setDragging(false);
          const diff = info.point.x - dragStartX.current;
          if (diff < -50) next();
          else if (diff > 50) prev();
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: CARD_W, height: 480 }}
            animate={{
              scale: i === active ? 1 : 0.93,
              opacity: i === active ? 1 : 0.65,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => !dragging && setActive(i)}
          >
            {/* Background image */}
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover pointer-events-none"
              draggable={false}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Category pill */}
            <div
              className="absolute top-5 left-5 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: project.accent }}
            >
              {project.category}
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/50 text-xs mb-2">{project.date}</p>
              <h3 className="text-white font-bold text-lg leading-snug mb-4">
                {project.title}
              </h3>
              <button
                className="flex items-center gap-2 text-white/70 text-sm group"
                onClick={(e) => { e.stopPropagation(); if (!dragging) openLightbox(i); }}
              >
                <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="group-hover:text-white transition-colors">View project</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (() => {
          const p = projects[lightboxIdx];
          const photos = p.images;
          const totalPhotos = photos.length;
          return (
            <motion.div
              key="lightbox"
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightboxIdx(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

              {/* Modal card */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-[#111] flex flex-col md:flex-row w-full"
                style={{ maxWidth: '1200px', minHeight: '80vh', maxHeight: '95vh' }}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ── Left: Photo slideshow ── */}
                <div className="relative md:w-[62%] flex-shrink-0 bg-black" style={{ minHeight: 600 }}>
                  {/* Photo */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lightboxPhotoIdx}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Image
                        src={photos[lightboxPhotoIdx]}
                        alt={`${p.title} — photo ${lightboxPhotoIdx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 750px"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Category pill */}
                  <div
                    className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.category}
                  </div>

                  {/* Photo counter */}
                  {totalPhotos > 1 && (
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/80 text-xs font-medium">
                      {lightboxPhotoIdx + 1} / {totalPhotos}
                    </div>
                  )}

                  {/* Prev photo arrow */}
                  {lightboxPhotoIdx > 0 && (
                    <button
                      onClick={() => setLightboxPhotoIdx((p) => p - 1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    </button>
                  )}

                  {/* Next photo arrow */}
                  {lightboxPhotoIdx < totalPhotos - 1 && (
                    <button
                      onClick={() => setLightboxPhotoIdx((p) => p + 1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}

                  {/* Thumbnail strip */}
                  {totalPhotos > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
                        {photos.map((src, idx) => (
                        <button
                          key={idx}
                          onClick={() => setLightboxPhotoIdx(idx)}
                          className={`relative flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 ${
                            idx === lightboxPhotoIdx
                              ? 'ring-2 ring-white opacity-100'
                              : 'opacity-50 hover:opacity-80'
                          }`}
                          style={{ width: 52, height: 38 }}
                        >
                          <Image src={src} alt={`thumb ${idx + 1}`} fill className="object-cover" sizes="52px" />
                        </button>
                      ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Right: Info panel ── */}
                <div className="flex flex-col flex-1 p-6 md:p-8 overflow-y-auto min-w-0">
                  {/* Close button */}
                  <button
                    onClick={() => setLightboxIdx(null)}
                    className="self-end w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors mb-4 flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{p.date}</p>
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-snug mb-4">{p.title}</h3>

                  <div className="w-8 h-0.5 mb-5 rounded-full" style={{ backgroundColor: p.accent }} />

                  {p.description ? (
                    <p className="text-white/65 text-sm leading-relaxed">{p.description}</p>
                  ) : (
                    <p className="text-white/30 text-sm italic">Project details coming soon.</p>
                  )}

                  {/* Dot indicators */}
                  {totalPhotos > 1 && (
                    <div className="flex gap-1.5 mt-auto pt-6">
                      {photos.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setLightboxPhotoIdx(idx)}
                          className="transition-all duration-200"
                        >
                          <span
                            className="block rounded-full transition-all duration-200"
                            style={{
                              width: idx === lightboxPhotoIdx ? 20 : 7,
                              height: 7,
                              backgroundColor: idx === lightboxPhotoIdx ? p.accent : 'rgba(255,255,255,0.25)',
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Prev / Next PROJECT arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => { const n = Math.max(0, (i ?? 0) - 1); setLightboxPhotoIdx(0); return n; }); }}
                disabled={lightboxIdx === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white disabled:opacity-20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => { const n = Math.min(projects.length - 1, (i ?? 0) + 1); setLightboxPhotoIdx(0); return n; }); }}
                disabled={lightboxIdx === projects.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white disabled:opacity-20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Navigation — dots + arrows */}
      <div className="container-custom mt-8 flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-6 h-2 bg-creative-primary'
                    : 'w-2 h-2 bg-creative-bg/20 hover:bg-creative-bg/40'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-creative-bg/20 flex items-center justify-center hover:border-creative-primary hover:text-creative-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={active === projects.length - 1}
            className="w-10 h-10 rounded-full border border-creative-bg/20 flex items-center justify-center hover:border-creative-primary hover:text-creative-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
