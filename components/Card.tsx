'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHoverVariants } from '@/lib/animations';

interface CardProps {
  children: ReactNode;
  theme?: 'tech' | 'creative';
  className?: string;
}

export default function Card({ children, theme = 'tech', className = '' }: CardProps) {
  const cardStyles = theme === 'tech'
    ? 'bg-tech-bg/50 border-tech-accent/20 hover:border-tech-accent/40'
    : 'bg-creative-bg/50 border-creative-primary/20 hover:border-creative-primary/40';

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className={`border-2 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 ${cardStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
