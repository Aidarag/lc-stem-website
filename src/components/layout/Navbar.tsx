'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

import Logo from '@/components/ui/Logo';
import { academicPrograms } from '@/data/stemData';

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
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  const isProgramsActive = pathname.startsWith('/programs');

  // Close the mobile drawer (and its Programs accordion) on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setIsMobileProgramsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md text-gray-900 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo variant="light" size="md" />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-100/90 p-1.5 rounded-full border border-gray-200/90 shadow-inner">
          {navLinks.map((link) => {
            if (link.href === '/programs') {
              return <ProgramsDropdown key={link.href} isActive={isProgramsActive} label={link.label} />;
            }

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
                if (link.href === '/programs') {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setIsMobileProgramsOpen((prev) => !prev)}
                        aria-expanded={isMobileProgramsOpen}
                        aria-controls="mobile-programs-submenu"
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${
                          isProgramsActive
                            ? 'bg-purple-50 text-purple-700 border border-purple-200/80 shadow-sm font-bold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-purple-700 font-medium'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isMobileProgramsOpen ? 'rotate-180' : ''
                          } ${isProgramsActive ? 'text-purple-600' : 'text-gray-400'}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileProgramsOpen && (
                          <motion.div
                            id="mobile-programs-submenu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1.5 pt-2 pb-1 pl-4">
                              {academicPrograms.map((program) => {
                                const href = `/programs/${program.slug}`;
                                const isSubjectActive = pathname === href;
                                return (
                                  <Link
                                    key={program.slug}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all ${
                                      isSubjectActive
                                        ? 'bg-purple-50 text-purple-700 border border-purple-200/80 shadow-sm font-bold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-purple-700 font-medium'
                                    }`}
                                  >
                                    <span>{program.name}</span>
                                    {isSubjectActive && <ArrowRight className="h-4 w-4 text-purple-600" />}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

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

function ProgramsDropdown({ isActive, label }: { isActive: boolean; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const keyboardIntent = useRef(false);

  // Close on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Close on outside click / Escape
  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  // Only steal focus into the menu when it was opened via keyboard
  useEffect(() => {
    if (open && keyboardIntent.current) {
      itemRefs.current[0]?.focus();
    }
    keyboardIntent.current = false;
  }, [open]);

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      keyboardIntent.current = true;
      setOpen(true);
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      itemRefs.current[index + 1]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        triggerRef.current?.focus();
        setOpen(false);
      } else {
        itemRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="programs-menu"
        className={`relative inline-flex items-center gap-1 px-4 py-2 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full cursor-pointer ${
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
        <span className="relative z-10">{label}</span>
        <ChevronDown className={`relative z-10 h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="programs-menu"
            role="menu"
            aria-label={label}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-3xl border border-gray-200/90 bg-white p-2 shadow-xl"
          >
            {academicPrograms.map((program, index) => {
              const href = `/programs/${program.slug}`;
              const isSubjectActive = pathname === href;
              return (
                <Link
                  key={program.slug}
                  href={href}
                  role="menuitem"
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onKeyDown={(e) => handleItemKeyDown(e, index)}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    isSubjectActive
                      ? 'bg-purple-50 text-purple-700 border border-purple-200/80 shadow-sm font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-purple-700 font-medium'
                  }`}
                >
                  <span>{program.name}</span>
                  {isSubjectActive && <ArrowRight className="h-4 w-4 text-purple-600" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
