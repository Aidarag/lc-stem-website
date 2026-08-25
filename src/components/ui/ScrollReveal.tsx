'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.4,
  yOffset = 16,
  xOffset = 0,
  scale = 1,
  className = '',
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  const initial = reduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scale,
      };

  const animate = reduceMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
