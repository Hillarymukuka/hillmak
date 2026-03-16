'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  theme?: 'tech' | 'creative';
  className?: string;
  id?: string;
}

export default function Section({ children, theme = 'tech', className = '', id }: SectionProps) {
  const bgColor = theme === 'tech' ? 'bg-tech-bg' : 'bg-creative-bg';
  
  return (
    <section id={id} className={`section-spacing ${bgColor} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
