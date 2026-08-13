'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, Sparkles, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const studentParam = searchParams.get('student');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: 'Computer Information Systems',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (studentParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello! I would like to connect with ${studentParam} regarding their research, project milestones, and student experience in Livingstone STEM.`,
      }));
    }
  }, [studentParam]);

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
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form Inquiries (7 cols) */}
        <ScrollReveal className="lg:col-span-7 bg-white border border-gray-200/90 rounded-3xl p-8 md:p-10 shadow-xl space-y-6 hover:border-purple-300 transition-all duration-300">
          <div className="space-y-2 border-b border-gray-100 pb-5">
            {studentParam && (
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-bold text-purple-800 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-purple-600" /> Connecting with {studentParam}
              </div>
            )}
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <Mail className="h-6 w-6 text-purple-600" /> Send an Inquiry
            </h2>
            <p className="font-sans text-sm text-gray-600">
              Fill out the form below and our peer mentors or department office will respond shortly.
            </p>
          </div>

          {submitted && (
            <div className="border border-purple-200 bg-purple-50 p-5 rounded-2xl font-sans text-sm text-purple-900 font-medium flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0" />
              <span>Thank you! Your message has been sent successfully. We will follow up within 2 business days.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-wider text-gray-800 block">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 font-sans text-sm sm:text-base text-gray-900 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs font-bold uppercase tracking-wider text-gray-800 block">Your Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 font-sans text-sm sm:text-base text-gray-900 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            {/* Major of Interest */}
            <div className="space-y-2">
              <label htmlFor="major" className="font-mono text-xs font-bold uppercase tracking-wider text-gray-800 block">Concentration of Interest</label>
              <select
                id="major"
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 font-sans text-sm sm:text-base text-gray-900 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner cursor-pointer"
              >
                <option value="Computer Information Systems">Computer Information Systems</option>
                <option value="Biology">Biology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-wider text-gray-800 block">Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 font-sans text-sm sm:text-base text-gray-900 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
                placeholder="Tell us about your background, career aspirations, or general inquiries..."
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="btn-gradient-lime w-full rounded-full font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] py-4 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </ScrollReveal>

        {/* Right Column: Office Location & Tours (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <ScrollReveal className="bg-white border border-gray-200/90 rounded-3xl p-8 md:p-10 shadow-xl space-y-6 hover:border-purple-300 transition-all duration-300">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-purple-600" /> Innovation Hub
            </h2>

            <div className="space-y-5 font-sans text-sm sm:text-base text-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Department Headquarters</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed font-sans">
                    Duncan Science Building, Room 102<br />
                    Livingstone College Campus
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Office Hours</h3>
                  <p className="mt-1 text-gray-600 font-sans">
                    Monday – Friday: 9:00 AM – 5:00 PM<br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Direct Phone</h3>
                  <p className="mt-1 text-gray-600 font-sans">(704) 216-6000 ext. 6102</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-gray-100 pt-5">
                <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Admissions Email</h3>
                  <p className="mt-1 text-purple-700 font-semibold font-sans">stem@livingstone.edu</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Campus Visits Note Card */}
          <ScrollReveal delay={0.1} className="bg-gradient-to-br from-[#0C0614] via-[#12072B] to-[#0C0614] border border-purple-500/30 rounded-3xl p-8 md:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="btn-gradient-lime font-mono text-xs font-extrabold uppercase tracking-wider text-[#0B051D] px-3.5 py-1 rounded-full shadow-sm">
                Lab Tours
              </span>
              <Sparkles className="h-5 w-5 text-[#e3fc51]" />
            </div>
            
            <h3 className="font-serif text-2xl font-extrabold text-white pt-1">
              Campus &amp; Laboratory Visits
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              Admissions tours of our labs, computer centers, and science classrooms can be booked through the Livingstone College Welcome Center. Be sure to request a specialized tour of the Duncan Science Building.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF9F6] pb-24 font-sans text-gray-900">
      
      {/* 01 — Dark Obsidian Hero */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
            <Sparkles className="h-4 w-4 text-[#e3fc51]" /> Admissions &amp; Connect
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            Contact <span className="text-gradient-purple-pink">LC STEM</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Have questions about program curricula, summer research fellowships, or hackathons? Reach out directly to our department team.
          </p>
        </div>
      </section>

      {/* 02 — Main Contact Form wrapped in Suspense */}
      <Suspense fallback={
        <div className="mx-auto max-w-7xl px-6 py-24 text-center font-mono text-sm text-gray-500">
          Loading contact form...
        </div>
      }>
        <ContactFormContent />
      </Suspense>

    </div>
  );
}
