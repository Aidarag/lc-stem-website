'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to the L.C. STEM Newsletter!');
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Col 1: Branding & Info */}
          <div className="space-y-6">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white border border-white/10 bg-white/5 px-2 py-0.5 rounded-md shadow-sm">
                L.C.
              </span>
              <span className="font-serif text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-primary">
                STEM <span className="font-mono text-xs font-semibold text-slate-400">Hub</span>
              </span>
            </Link>
            
            <p className="font-sans text-xs leading-relaxed text-slate-400">
              Showcasing student success and engineering the innovators of tomorrow at Livingstone College, Salisbury, NC.
            </p>
            
            <div className="flex gap-2">
              {[
                { icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>, href: '#' },
                { icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: '#' },
                { icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>, href: '#' },
                { icon: <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>, href: 'https://github.com/livingstone-stem' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-pink">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 font-sans text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-all">About</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white hover:underline transition-all">Programs</Link>
              </li>
              <li>
                <Link href="/spotlight" className="hover:text-white hover:underline transition-all">Spotlights</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:underline transition-all">Projects</Link>
              </li>
              <li>
                <Link href="/competitions" className="hover:text-white hover:underline transition-all">Competitions</Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white hover:underline transition-all">News</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-all">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="space-y-4 font-sans text-xs text-slate-400">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-pink">Contact Office</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="leading-relaxed">
                  Duncan Science Building<br />
                  701 W Monroe St, Salisbury, NC 28144
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>(704) 216-6000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>stem@livingstone.edu</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-pink">STEM Newsletter</h3>
            <p className="font-sans text-xs leading-relaxed text-slate-400">
              Get bi-weekly updates on student hackathons, research awards, and internship placements.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-sans text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="premium-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center font-mono text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} Livingstone College STEM Department. All rights reserved.</p>
          <p className="mt-1.5">
            Designed for next-generation research excellence. Salisbury, North Carolina.
          </p>
        </div>
      </div>
    </footer>
  );
}
