'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

import Logo from '@/components/ui/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Academic Programs' },
  { href: '/spotlight', label: 'Featured Students' },
  { href: '/projects', label: 'Achievements' },
  { href: '/news-events', label: 'News' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md text-gray-900 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Logo variant="light" size="md" />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-100/90 p-1.5 rounded-full border border-gray-200/90 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                  isActive ? 'text-white font-bold' : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-purple-600 rounded-full shadow-md border border-purple-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group btn-gradient-lime inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-mono text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
          >
            Apply Now <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:text-purple-600 transition-all lg:hidden shadow-sm"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Refined Light Mode Theme) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-gray-200/90 bg-white text-gray-900 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 px-6 py-6 font-sans">


              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-50 text-purple-700 border border-purple-200/80 shadow-sm font-bold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-purple-700 font-medium'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <ArrowRight className="h-4 w-4 text-purple-600" />}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full rounded-2xl bg-purple-600 hover:bg-purple-700 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 transition-all"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
