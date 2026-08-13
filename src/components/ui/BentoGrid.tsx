'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] ${className}`}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  rowSpan?: 'row-span-1' | 'row-span-2' | 'row-span-3';
  variant?: 'light' | 'dark';
}

export function BentoCard({
  children,
  className = '',
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
  variant = 'light',
}: BentoCardProps) {
  const cardStyle = variant === 'light' ? 'premium-card-light' : 'premium-card-dark';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`rounded-2xl flex flex-col justify-between p-6 ${cardStyle} ${colSpan} ${rowSpan} ${className}`}
    >
      {children}
    </motion.div>
  );
}
