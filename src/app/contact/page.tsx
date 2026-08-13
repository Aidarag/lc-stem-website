'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, Sparkles, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: 'Computer Information Systems',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      major: 'Computer Information Systems',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-slate-700">
      {/* Header */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] to-[#E9EEF5] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-4">
          <div className="eyebrow-pill">
            <Star className="h-3 w-3 fill-accent text-accent" /> Admissions & Connect
          </div>
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Contact STEM
          </h1>
          <p className="mx-auto max-w-xl font-sans text-sm text-slate-500 md:text-base leading-relaxed">
            Have questions about program curricula, summer research fellowships, or hackathons? Reach out directly.
          </p>
        </div>
      </section>

      {/* Main split */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Inquiries */}
          <ScrollReveal className="lg:col-span-7 premium-card-light p-8 rounded-2xl bg-white shadow-md border-slate-100">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" /> Send an Inquiry
            </h2>

            {submitted && (
              <div className="mb-6 border border-green-200 bg-green-50 p-4 rounded-xl font-sans text-xs text-green-800 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-green-700 shrink-0" />
                <span>Thank you! Your message has been sent successfully. We will follow up within 2 business days.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Major of Interest */}
              <div className="space-y-2">
                <label htmlFor="major" className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900">Concentration of Interest</label>
                <select
                  id="major"
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="Computer Information Systems">Computer Information Systems</option>
                  <option value="Biology">Biology</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-900">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 font-sans text-xs bg-[#FAF9F6] focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tell us about your background, career aspirations, or general inquiries..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="premium-btn w-full rounded-full bg-accent hover:bg-accent/95 py-3 text-xs font-bold text-white shadow-md"
                >
                  Send Message <Send className="ml-2 h-4 w-4 inline" />
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* Right Column: In-Person Office */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal className="premium-card-light p-8 rounded-2xl bg-white shadow-md border-slate-100 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Office Location
              </h2>

              <div className="space-y-4 font-sans text-xs md:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Department Headquarters</h3>
                    <p className="mt-1 text-slate-500 leading-relaxed">
                      Duncan Science Building, Room 102<br />
                      Livingstone College Campus<br />
                      701 W Monroe St, Salisbury, NC 28144
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Office Hours</h3>
                    <p className="mt-1 text-slate-500">
                      Monday – Friday: 9:00 AM – 5:00 PM<br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Direct Phone</h3>
                    <p className="mt-1 text-slate-500">(704) 216-6000 ext. 6102</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Admissions Email</h3>
                    <p className="mt-1 text-slate-500">stem@livingstone.edu</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Salisbury Note card (Collegiate Accent Dark) */}
            <ScrollReveal delay={0.1} className="premium-card-dark rounded-2xl p-6 bg-[#0f2537] text-white border-white/5 space-y-3 shadow-lg">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-1.5">
                <ShieldAlert className="h-5 w-5 text-accent-pink" /> Campus Visits
              </h3>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                Admissions tours of our labs, computer centers, and science classrooms can be booked through the Livingstone College Welcome Center. Be sure to request a specialized tour of the Duncan Science Building.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}
