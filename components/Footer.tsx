'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContactModal from '@/components/ContactModal';

export default function Footer() {
  const pathname = usePathname();
  const isCreativePage = pathname === '/creative';
  const [contactOpen, setContactOpen] = useState(false);

  const bgColor = isCreativePage ? 'bg-creative-bg' : 'bg-[#0A1628]';
  const textColor = isCreativePage ? 'text-creative-white' : 'text-white';
  const accentColor = isCreativePage ? 'text-creative-primary' : 'text-tech-accent';
  const hoverColor = isCreativePage 
    ? 'hover:text-creative-primary' 
    : 'hover:text-tech-accent';

  return (
    <footer className={`${bgColor} ${textColor} border-t border-white/20`}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/hillmak-logo.svg"
              alt="HillMak Logo"
              width={140}
              height={48}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm opacity-80 leading-relaxed">
              Delivering cutting-edge innovative technology solutions and creative excellence. Based in Zambia, operating globally.
            </p>
          </div>

          {/* About Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">About company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className={`opacity-80 ${hoverColor} transition-colors`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/creative" className={`opacity-80 ${hoverColor} transition-colors`}>
                  HillMak Creative
                </Link>
              </li>
              <li>
                <Link href="/technology" className={`opacity-80 ${hoverColor} transition-colors`}>
                  HillMak
                </Link>
              </li>
              <li>
                <button onClick={() => setContactOpen(true)} className={`opacity-80 ${hoverColor} transition-colors`}>
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Get intouch</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>+260 968 601 181</li>
              <li>info@hillmak.co.zm</li>
              <li>Lusaka Zambia</li>
              <li>www.hillmak.co.zm</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Socials</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/hillmak-designs-ltd" target="_blank" rel="noopener noreferrer" className={`opacity-80 ${hoverColor} transition-colors`}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hillmakdesigns" target="_blank" rel="noopener noreferrer" className={`opacity-80 ${hoverColor} transition-colors`}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/hillmakcreative" target="_blank" rel="noopener noreferrer" className={`opacity-80 ${hoverColor} transition-colors`}>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm opacity-60 text-center">
          <p>&copy; {new Date().getFullYear()} HillMak. All rights reserved.</p>
        </div>
      </div>
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        theme={isCreativePage ? 'creative' : 'tech'}
      />
    </footer>
  );
}
