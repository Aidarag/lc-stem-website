'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full border-b border-cool-gray bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white border border-transparent bg-foreground px-2 py-0.5 rounded-md shadow-sm">
            L.C.
          </span>
          <span className="font-serif text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
            STEM <span className="font-mono text-xs font-semibold text-foreground/50">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-cool-gray/40 p-1 rounded-full border border-cool-gray/55">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                  isActive ? 'text-foreground font-bold' : 'text-[#181818]/70 hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-accent rounded-full border border-accent-lime-hover/20 shadow-sm"
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
            className="premium-btn group rounded-full bg-primary hover:bg-accent-blue-hover text-white px-4 py-2 text-xs font-semibold tracking-wide shadow-sm"
          >
            Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cool-gray bg-white text-foreground hover:bg-[#FAF9F6] transition-colors lg:hidden shadow-sm"
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
            className="border-t border-cool-gray bg-white lg:hidden overflow-hidden"
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
                        ? 'bg-accent/20 text-foreground border border-accent/30'
                        : 'text-[#181818]/70 hover:bg-[#FAF9F6]'
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
                className="premium-btn mt-4 w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-accent-blue-hover"
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
