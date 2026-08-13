'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/spotlight', label: 'Spotlights' },
  { href: '/projects', label: 'Projects' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-md shadow-sm">
            L.C.
          </span>
          <span className="font-serif text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-primary">
            STEM <span className="font-mono text-xs font-semibold text-slate-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                  isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white shadow-sm rounded-full border border-slate-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="premium-btn group rounded-full bg-primary hover:bg-primary/95 text-white px-4 py-2 text-xs font-semibold tracking-wide shadow-sm"
          >
            Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors lg:hidden shadow-sm"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-slate-200 bg-white lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 px-6 py-6 font-sans">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-primary/5 text-primary border border-primary/10'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && <ArrowRight className="h-4 w-4 text-primary" />}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="premium-btn mt-4 w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-primary/95"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
