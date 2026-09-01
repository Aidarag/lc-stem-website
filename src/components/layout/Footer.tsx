'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Heart, Lock, ArrowUp, Compass, GraduationCap } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to the L.C. STEM Newsletter!');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-purple-900/40 bg-[#0C0614] text-slate-200 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 z-0 grid-pattern-dark opacity-25 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12">
        {/* Top Banner inside Footer */}
        <div className="mb-16 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full glass-pill-badge px-4 py-1.5 text-xs sm:text-sm text-purple-200">
              <GraduationCap className="h-4 w-4 text-purple-400" /> Livingstone College STEM Hub
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Empowering Next-Gen Technical Talent
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              From undergraduate molecular biology papers to enterprise cloud software architectures—explore student innovations.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/projects"
              className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
            >
              Explore Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/spotlight"
              className="bg-white/10 hover:bg-white/20 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-white/20 transition-colors inline-flex items-center gap-2"
            >
              Meet Students
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Branding & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="lg" />
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-300 pr-2">
              Showcasing student success and engineering the innovators of tomorrow within the LC STEM student community in Salisbury, NC.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Compass className="h-4 w-4" /> Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 font-sans text-sm sm:text-base text-slate-300 font-medium">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Programs', href: '/programs/computer-information-systems' },
                { name: 'Spotlights', href: '/spotlight' },
                { name: 'Achievements', href: '/projects' },
                { name: 'News & Events', href: '/news-events' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-300 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Office (2 cols) */}
          <div className="lg:col-span-2 space-y-5 font-sans text-sm sm:text-base text-slate-300">
            <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Innovation Hub
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-purple-400" />
                <span className="leading-relaxed">
                  Duncan Science Building
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-purple-400" />
                <span>(704) 216-6000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="truncate">stem@livingstone.edu</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Mail className="h-4 w-4" /> STEM Dispatch
            </h4>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-300">
              Get bi-weekly updates on student hackathons, research awards, and internship placements.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 font-sans text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:bg-purple-950/40 transition-all pr-12 shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full btn-gradient-lime cursor-pointer shadow-lg"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 text-[#0B051D]" />
                </button>
              </div>
              <span className="font-mono text-xs text-slate-400 flex items-center pl-2">
                <Lock className="h-3 w-3 inline mr-1 text-slate-400" /> No spam. Unsubscribe anytime.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5 font-mono text-xs sm:text-sm text-slate-400">
          <p suppressHydrationWarning>© {new Date().getFullYear()} LC STEM Student Community. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-slate-300 font-medium">
              Built with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> by Students
            </span>
            <button
              onClick={scrollToTop}
              className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-bold inline-flex items-center gap-1.5"
            >
              Back to Top <ArrowUp className="h-3.5 w-3.5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
