'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function Navigation() {
  const pathname = usePathname();
  const isCreativePage = pathname === '/creative';
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/technology', label: 'Technology' },
    { href: '/creative', label: 'Creative' },
  ];

  const solidBg = isCreativePage ? 'rgba(51, 52, 54, 0.97)' : 'rgba(10, 22, 40, 0.97)';
  const bgColor = (scrolled || mobileOpen) ? solidBg : 'transparent';
  const backdropBlur = scrolled ? 'backdrop-blur-md' : '';
  const shadow = scrolled ? 'shadow-lg shadow-black/20' : '';

  const textColor = isCreativePage ? 'text-creative-white' : 'text-white';
  const activeColor = isCreativePage ? 'text-creative-primary' : 'text-tech-accent';
  const hoverColor = isCreativePage ? 'hover:text-creative-primary' : 'hover:text-tech-accent';
  const btnBg = isCreativePage
    ? 'bg-creative-primary hover:bg-creative-primary-dark'
    : 'bg-tech-accent hover:bg-tech-accent-dark';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${backdropBlur} ${shadow}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/hillmak-logo.svg"
                alt="HillMak Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? activeColor : `${textColor} ${hoverColor}`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                onClick={() => setContactOpen(true)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${btnBg} text-white`}
              >
                Contact
              </button>
            </div>

            {/* Mobile — hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg ${textColor}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-5 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-current rounded-full origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="container-custom py-6 flex flex-col gap-0">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-3.5 px-2 text-base font-medium transition-colors ${
                          isActive ? activeColor : `${textColor} ${hoverColor}`
                        }`}
                      >
                        {link.label}
                      </Link>
                      {i < navLinks.length - 1 && (
                        <div className="mx-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      )}
                    </div>
                  );
                })}
                <button
                  onClick={() => { setMobileOpen(false); setContactOpen(true); }}
                  className={`mt-4 w-full py-3.5 rounded-xl font-semibold text-base transition-colors ${btnBg} text-white`}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        theme={isCreativePage ? 'creative' : 'tech'}
      />
    </>
  );
}
