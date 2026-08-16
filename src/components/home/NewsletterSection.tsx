'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-slate-100/90 py-24 md:py-32 text-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="relative bg-white border border-gray-200 rounded-3xl p-10 md:p-20 text-center shadow-2xl overflow-hidden">
          {/* Tech grid backdrop */}
          <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
              <Send className="h-4 w-4 text-purple-600 animate-pulse" /> Stay in the loop
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase leading-tight">
              Subscribe to <span className="text-purple-600">STEM Hub</span>
            </h2>

            <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Get bi-weekly updates on student hackathons, independent lab research milestones, corporate recruitment, and internship awards directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl text-purple-800 text-sm sm:text-base font-bold">
                Thank you! You have successfully subscribed to the L.C. STEM Newsletter.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-full border border-gray-300 bg-gray-50 px-6 py-4 font-sans text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  className="shrink-0 btn-gradient-lime rounded-full px-9 py-4 text-sm sm:text-base font-extrabold tracking-wider transition-all shadow-xl cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
