'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  theme?: 'tech' | 'creative';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  theme = 'tech',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 inline-block';
  
  const variantStyles = {
    tech: {
      primary: 'bg-tech-accent hover:bg-tech-accent-dark text-white shadow-lg hover:shadow-tech-accent/20',
      secondary: 'border-2 border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white'
    },
    creative: {
      primary: 'bg-creative-primary hover:bg-creative-primary-dark text-white shadow-lg hover:shadow-creative-primary/20',
      secondary: 'bg-creative-accent hover:bg-creative-accent/90 text-creative-bg font-bold'
    }
  };

  const buttonClass = `${baseStyles} ${variantStyles[theme][variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
