'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/Button';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function HomePage() {
  const techRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);  const [contactOpen, setContactOpen] = useState(false);  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);

  const { scrollYProgress: techScroll } = useScroll({
    target: techRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: creativeScroll } = useScroll({
    target: creativeRef,
    offset: ['start end', 'end start'],
  });

  const techY = useTransform(techScroll, [0, 1], ['-15%', '15%']);
  const creativeY = useTransform(creativeScroll, [0, 1], ['-15%', '15%']);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
        {/* Background Image */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 w-full h-[130%] -top-[15%]"
        >
          <Image
            src="/hero-section.avif"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/80"></div>
        </motion.div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-5 leading-tight text-white tracking-tight"
            >
              Driving <span className="text-tech-accent">Innovation</span> with Strategy and Creativity
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Welcome to HillMak, where Strategic Software & AI Solutions drive business success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px]"
            >
              <Image
                src="/second-photo.avif"
                alt="Strategy meets technology"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-tech-bg leading-snug tracking-tight">
                <span className="text-tech-accent">HillMak</span> is where strategy meets technology and creative intelligence
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We design brands, build intelligent software, and deliver scalable solutions that help businesses grow with clarity and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section — Full-Bleed Parallax Panels */}
      <section>
        {/* Section Label */}
        <div className="bg-[#0A1628] text-center py-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-tech-accent font-semibold mb-3"
          >
            Our Divisions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Two Divisions, One Vision
          </motion.h2>
        </div>

        {/* Panel 1 — HillMak Tech */}
        <div ref={techRef} className="relative h-[85vh] overflow-hidden">
          {/* Parallax image */}
          <motion.div
            style={{ y: techY }}
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
          >
            <Image
              src="/hillmak-tech-photo.avif"
              alt="HillMak Technology"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container-custom">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-lg"
              >
                <motion.p
                  variants={fadeUpVariants}
                  className="text-xs uppercase tracking-[0.2em] text-tech-accent font-semibold mb-4"
                >
                  Technology · Software · AI
                </motion.p>
                <motion.h3
                  variants={fadeUpVariants}
                  className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug tracking-tight"
                >
                  HillMak
                </motion.h3>
                <motion.p
                  variants={fadeUpVariants}
                  className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
                >
                  Building Africa's digital future through intelligent software, AI automation, enterprise systems and industrial safety solutions.
                </motion.p>
                <motion.ul
                  variants={fadeUpVariants}
                  className="space-y-2 mb-8"
                >
                  {['Software Development', 'Enterprise Systems', 'AI & Automation', 'Procurement Platforms', 'Industrial Safety Solutions'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-tech-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUpVariants}>
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-2 bg-tech-accent hover:bg-tech-accent-dark text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
                  >
                    Explore HillMak
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Panel 2 — HillMak Creative */}
        <div ref={creativeRef} className="relative h-[85vh] overflow-hidden">
          {/* Parallax image */}
          <motion.div
            style={{ y: creativeY }}
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
          >
            <Image
              src="/hillmak-creative-side-photo.avif"
              alt="HillMak Creative"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Gradient overlay — right side, darker */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/75 to-black/20" />

          {/* Content — right aligned */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container-custom w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-lg ml-auto text-right"
              >
                <motion.p
                  variants={fadeUpVariants}
                  className="text-xs uppercase tracking-[0.2em] text-creative-accent font-semibold mb-4"
                >
                  Branding · Design · Campaigns
                </motion.p>
                <motion.h3
                  variants={fadeUpVariants}
                  className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug tracking-tight"
                >
                  HillMak <span className="text-creative-primary">Creative</span>
                </motion.h3>
                <motion.p
                  variants={fadeUpVariants}
                  className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
                >
                  Crafting bold brand identities, unforgettable campaigns, and immersive digital experiences that set brands apart.
                </motion.p>
                <motion.ul
                  variants={fadeUpVariants}
                  className="space-y-2 mb-8"
                >
                  {['Brand Strategy', 'Corporate Identity', 'Exhibition Branding', 'Digital Marketing', 'Content Production', 'UI/UX Design'].map((item) => (
                    <li key={item} className="flex items-center justify-end gap-2 text-sm text-gray-300">
                      {item}
                      <span className="w-1.5 h-1.5 rounded-full bg-creative-accent flex-shrink-0" />
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUpVariants} className="flex justify-end">
                  <Link
                    href="/creative"
                    className="inline-flex items-center gap-2 bg-creative-primary hover:bg-creative-primary-dark text-white font-semibold px-7 py-3 rounded-lg text-sm transition-colors"
                  >
                    Explore Creative
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tech-bg">
                  Our Mission
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  To transform ideas into scalable systems, brands into powerful identities, and businesses into future-ready enterprises through strategic innovation, and creativity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tech-accent">
                  Our Vision
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  To be Africa's leading innovation company shaping the future of business through technology, design, and strategic thinking.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px]"
            >
              <Image
                src="/mission-and-vision-image.avif"
                alt="Our Mission and Vision"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-tech-accent font-semibold mb-3"
          >
            Trusted By
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-tech-bg tracking-tight mb-4"
          >
            Our Clients &amp; Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            We are proud to work alongside forward-thinking organisations across industries — from mining and finance to sport and government.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <div className="relative overflow-hidden">
          {/* Fade left edge */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" aria-hidden />
          {/* Fade right edge */}
          <div className="pointer-events-none absolute right-0 inset-y-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" aria-hidden />

          {/* Row 1 — scrolls left */}
          <div className="flex w-max animate-marquee gap-6 items-center mb-5">
            {[
              { src: '/Clients_partners/Amrod.jpg', alt: 'Amrod' },
              { src: '/Clients_partners/avis-fleet-zambia.png', alt: 'Avis Fleet Zambia' },
              { src: '/Clients_partners/cosmo.jpg', alt: 'Cosmo' },
              { src: '/Clients_partners/dromex.jpg', alt: 'Dromex' },
              { src: '/Clients_partners/Enisco.png', alt: 'Enisco' },
              { src: '/Clients_partners/kafue-gorge.png', alt: 'Kafue Gorge' },
              { src: '/Clients_partners/Media.jpg', alt: 'Media' },
              { src: '/Clients_partners/Mopani.jpg', alt: 'Mopani' },
              { src: '/Clients_partners/my-cab.webp', alt: 'My Cab' },
              /* duplicate for seamless loop */
              { src: '/Clients_partners/Amrod.jpg', alt: 'Amrod' },
              { src: '/Clients_partners/avis-fleet-zambia.png', alt: 'Avis Fleet Zambia' },
              { src: '/Clients_partners/cosmo.jpg', alt: 'Cosmo' },
              { src: '/Clients_partners/dromex.jpg', alt: 'Dromex' },
              { src: '/Clients_partners/Enisco.png', alt: 'Enisco' },
              { src: '/Clients_partners/kafue-gorge.png', alt: 'Kafue Gorge' },
              { src: '/Clients_partners/Media.jpg', alt: 'Media' },
              { src: '/Clients_partners/Mopani.jpg', alt: 'Mopani' },
              { src: '/Clients_partners/my-cab.webp', alt: 'My Cab' },
            ].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-80 h-40 rounded-xl bg-gray-50 border border-gray-100 px-8 py-5 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex w-max animate-marquee-reverse gap-6 items-center">
            {[
              { src: '/Clients_partners/Rebel.jpg', alt: 'Rebel' },
              { src: '/Clients_partners/Redspot.jpg', alt: 'Redspot' },
              { src: '/Clients_partners/Sanlam.png', alt: 'Sanlam' },
              { src: '/Clients_partners/Veritas.jpg', alt: 'Veritas' },
              { src: '/Clients_partners/VVob.jpg', alt: 'VVob' },
              { src: '/Clients_partners/xahara-tools.webp', alt: 'Xahara Tools' },
              { src: '/Clients_partners/zambia-olympics.png', alt: 'Zambia Olympics' },
              { src: '/Clients_partners/zambia-statstics.png', alt: 'Zambia Statistics' },
              { src: '/Clients_partners/ZPPA.png', alt: 'ZPPA' },
              /* duplicate for seamless loop */
              { src: '/Clients_partners/Rebel.jpg', alt: 'Rebel' },
              { src: '/Clients_partners/Redspot.jpg', alt: 'Redspot' },
              { src: '/Clients_partners/Sanlam.png', alt: 'Sanlam' },
              { src: '/Clients_partners/Veritas.jpg', alt: 'Veritas' },
              { src: '/Clients_partners/VVob.jpg', alt: 'VVob' },
              { src: '/Clients_partners/xahara-tools.webp', alt: 'Xahara Tools' },
              { src: '/Clients_partners/zambia-olympics.png', alt: 'Zambia Olympics' },
              { src: '/Clients_partners/zambia-statstics.png', alt: 'Zambia Statistics' },
              { src: '/Clients_partners/ZPPA.png', alt: 'ZPPA' },
            ].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-80 h-40 rounded-xl bg-gray-50 border border-gray-100 px-8 py-5 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1628] py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white leading-snug tracking-tight">
              Transform Your Business with <span className="text-tech-accent">HillMak</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with HillMak to combine strategy, technology, and creativity into measurable results.
            </p>
            <motion.button
              onClick={() => setContactOpen(true)}
              className="inline-block bg-tech-accent hover:bg-tech-accent-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
