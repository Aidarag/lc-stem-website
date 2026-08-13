'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Sparkles, ArrowUpRight, Heart } from 'lucide-react';

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
              <Sparkles className="h-4 w-4 text-purple-400" /> Livingstone College STEM Hub
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
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-white border border-purple-500/50 bg-purple-600/30 px-3 py-1 rounded-xl shadow-md">
                L.C.
              </span>
              <span className="font-serif text-3xl font-extrabold tracking-tight text-white transition-colors group-hover:text-purple-300">
                STEM <span className="font-mono text-sm font-semibold text-purple-400">Hub</span>
              </span>
            </Link>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-300 pr-2">
              Showcasing student success and engineering the innovators of tomorrow within the LC STEM student community in Salisbury, NC.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              {[
                { label: 'Facebook', icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>, href: '#' },
                { label: 'Twitter', icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: '#' },
                { label: 'LinkedIn', icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>, href: '#' },
                { label: 'GitHub', icon: <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>, href: 'https://github.com/livingstone-stem' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/30 transition-all duration-200 shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 font-sans text-sm sm:text-base text-slate-300 font-medium">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Programs', href: '/programs' },
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
              <span className="font-mono text-xs text-slate-400 block pl-2">
                🔒 No spam. Unsubscribe anytime.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5 font-mono text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} LC STEM Student Community. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-slate-300 font-medium">
              Built with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> by Students
            </span>
            <button
              onClick={scrollToTop}
              className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-bold inline-flex items-center gap-1.5"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
