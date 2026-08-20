'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Star, BookOpen, X, Play, Plus, Minus, GraduationCap,
} from 'lucide-react';
import StatCounter from '@/components/ui/StatCounter';
import HeroShowcaseGrid, { type SelectedVideo } from '@/components/home/HeroShowcaseGrid';
import { studentSpotlights, studentProjects, competitions } from '@/data/stemData';

// Below-the-fold sections: split into their own chunks. SSR stays on (no
// ssr:false) so the content is still present in the static HTML for SEO,
// crawlers, and no-JS visitors; content-visibility:auto (applied via the
// wrapper below) is what defers the expensive layout/paint work until each
// section is about to scroll into view.
const AcademicProgramsSection = dynamic(() => import('@/components/home/AcademicProgramsSection'));
const FeaturedStudentsSection = dynamic(() => import('@/components/home/FeaturedStudentsSection'));
const AchievementsSection = dynamic(() => import('@/components/home/AchievementsSection'));
const CommunityShowcaseSection = dynamic(() => import('@/components/home/CommunityShowcaseSection'));
const NewsletterSection = dynamic(() => import('@/components/home/NewsletterSection'));

function DeferredOffscreen({
  children,
  minHeight,
}: {
  children: React.ReactNode;
  minHeight: number;
}) {
  return (
    <div style={{ contentVisibility: 'auto', containIntrinsicSize: `${minHeight}px` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedStudentVideo, setSelectedStudentVideo] = useState<SelectedVideo | null>(null);

  // Fetch student spotlight data
  const featuredStudents = studentSpotlights.slice(0, 3); // Marcus, Aaliyah, Tariq
  const featuredProject = studentProjects[0]; // BlueBear Transit App
  const featuredHackathon = competitions[0]; // CIAA STEM Hackathon

  return (
    <div className="w-full bg-[#FFFFFF] font-sans text-foreground overflow-hidden">

      {/* 02 — EuVerse-style Dark Hero Section */}
      <section className="relative hero-obsidian-bg border-b border-white/10 pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden">
        {/* Subtle blur circles background */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 z-0 grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Headline, CTAs, Trust Proof */}
            <div className="lg:col-span-6 space-y-8 text-left">

              {/* Badge Capsule */}
              <div className="inline-flex items-center gap-2.5 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200">
                <span className="rounded-full bg-purple-600 text-[#e3fc51] font-mono px-3 py-1 font-extrabold text-xs uppercase shadow-sm border border-[#e3fc51]/40">
                  NEW
                </span>
                <span className="font-semibold text-gray-200">The 2026 STEM Showcase just dropped.</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white uppercase">
                Meet the Minds <br />
                <span className="text-gradient-purple-pink">Behind What&apos;s Next.</span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-xl font-sans text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-normal">
                Discover the students turning bold ideas into research, innovation, and real-world impact across STEM.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/programs"
                  className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
                >
                  View Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                </Link>
                <Link
                  href="/spotlight"
                  className="inline-flex items-center gap-2.5 rounded-full glass-pill-badge hover:bg-white/20 text-white px-7 py-4 text-sm sm:text-base font-bold tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Meet our Students <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Trust Bar & Avatars */}
              <div className="flex items-center gap-5 pt-6 border-t border-white/10">
                {/* Avatars Stack */}
                <div className="flex -space-x-3 overflow-hidden">
                  <Image src="/images/cis-student-success/im-aida-garba-profile.jpeg" alt="Aïda Garba (CIS)" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/biology-student-success/francis-boadu-duke-research.png" alt="Francis Boadu (Biology)" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg" alt="Kamar Goudelock (Business)" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover" />
                  <Image src="/images/math-student-success/sally-adenutsi-profile.jpeg" alt="Sally Adenutsi (Mathematics)" width={48} height={48} className="inline-block h-12 w-12 rounded-full ring-2 ring-purple-900 object-cover animate-pulse-slow" />
                </div>
                <div>
                  <p className="font-sans text-sm sm:text-base font-bold text-white tracking-wide">
                    Talent worth knowing. Work worth watching.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Tilted 3D Cascading Cards Grid (EuVerse Style) */}
            <HeroShowcaseGrid onSelectVideo={setSelectedStudentVideo} />

          </div>

          {/* EuVerse Style Dark Stats Bar */}
          <div className="mt-16 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-[#e3fc51]">
                  <StatCounter end={60} suffix="%" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">Summer Internship Rate</p>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-purple-300">
                  <StatCounter end={10000} prefix="$" suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">Hackathon Prizes Won</p>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-[#e3fc51]">
                  <StatCounter end={4} />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold">STEM Concentrations</p>
              </div>
              <Link href="/projects" className="pt-2 md:pt-0 block group/stat transition-all hover:scale-105 duration-200 cursor-pointer">
                <h3 className="font-serif text-4xl md:text-5xl font-extrabold text-purple-300 group-hover/stat:text-purple-200 transition-colors">
                  <StatCounter end={30} suffix="+" />
                </h3>
                <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-purple-200 font-semibold group-hover/stat:text-white transition-colors flex items-center justify-center gap-1">
                  Achievements <ArrowRight className="h-3 w-3 opacity-0 group-hover/stat:opacity-100 group-hover/stat:translate-x-0.5 transition-all duration-200" />
                </p>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Welcome Statement — LIGHT SLATE MODE */}
      <section className="bg-slate-50 py-18 md:py-24 border-y border-gray-200/80 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-2">
              <span className="inline-block rounded-full bg-purple-100 border border-purple-200 px-3.5 py-1 text-xs font-mono font-extrabold uppercase tracking-widest text-purple-700">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Unlocking Academic Potential
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
                LC STEM is a student community of hands-on builders, analysts, and molecular scientists. We believe that real excellence is forged in the laboratory and proven in the competitive field. Through peer collaboration and independent research, we establish a launching pad to global leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Academic Programs Section — DARK OBSIDIAN MODE */}
      <DeferredOffscreen minHeight={900}>
        <AcademicProgramsSection />
      </DeferredOffscreen>

      {/* 04 — Featured Students Section — CRISP LIGHT MODE */}
      <DeferredOffscreen minHeight={1000}>
        <FeaturedStudentsSection featuredStudents={featuredStudents} />
      </DeferredOffscreen>

      {/* 05 — Achievements Section (Editorial Bento Grid Layout) */}
      <DeferredOffscreen minHeight={900}>
        <AchievementsSection featuredProject={featuredProject} featuredHackathon={featuredHackathon} />
      </DeferredOffscreen>

      {/* 06 — Interactive FAQ Section — LIGHT SLATE MODE */}
      <section className="relative bg-slate-50 py-24 md:py-32 border-b border-gray-200/80 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
                <BookOpen className="h-4 w-4 text-purple-600" /> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Got <span className="text-purple-600">Questions?</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                Livingstone STEM is your gateway to a high-impact technical career. With our four specialized tracks, hands-on lab research, and industry partnerships, you'll gain the skills, confidence, and portfolio to stand out.
              </p>
              <div>
                <Link
                  href="/programs/computer-information-systems"
                  className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
                >
                  Explore Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Accordion Cards */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  q: "1. What STEM concentrations are offered at Livingstone College?",
                  a: "Livingstone College offers four specialized academic tracks: Computer Information Systems (CIS), Biology, Mathematics & Data Science, and Business Analytics."
                },
                {
                  q: "2. How can I participate in undergraduate research or hackathons?",
                  a: "Students can join faculty-led research projects as early as freshman year, apply for NSF summer fellowships, and compete on our official hackathon team in regional and national competitions."
                },
                {
                  q: "3. Are there summer internship placement support programs?",
                  a: "Yes! Our department maintains a 60% summer internship placement rate with corporate partners like Microsoft, Google, Vercel, IBM, FedEx, and regional healthcare networks."
                },
                {
                  q: "4. What kind of real-world projects will I work on?",
                  a: "You'll build practical solutions such as mobile transit apps, bio-genetics molecular cell assays, LoRaWAN environmental telemetry grids, and decentralized blockchain credentialing systems."
                },
                {
                  q: "5. Is there peer mentoring and tutoring if I need academic help?",
                  a: "Absolutely! The LC STEM Student Developer Alliance and Pre-Med Club provide daily peer mentoring, study groups, and certification prep for AWS, CompTIA, and Google Analytics."
                },
                {
                  q: "6. How can prospective students or sponsors connect with the department?",
                  a: "You can reach out directly via our Contact page to schedule a campus lab tour, inquire about scholarships, or discuss corporate partnership opportunities."
                }
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="cursor-pointer bg-white hover:bg-purple-50/50 border border-gray-200 hover:border-purple-300 rounded-2xl p-6 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold text-gray-900">
                        {faq.q}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 shadow-sm font-bold transition-transform">
                        {isOpen ? <Minus className="h-5 w-5 text-purple-700" /> : <Plus className="h-5 w-5 text-purple-700" />}
                      </div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 border-t border-gray-100 pt-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 07 — Signature Community Showcase Section — DARK OBSIDIAN MODE */}
      <DeferredOffscreen minHeight={1100}>
        <CommunityShowcaseSection onSelectVideo={setSelectedStudentVideo} />
      </DeferredOffscreen>

      {/* 08 — Newsletter Section — LIGHT SLATE ELEGANT MODE */}
      <DeferredOffscreen minHeight={600}>
        <NewsletterSection />
      </DeferredOffscreen>

      {/* Interactive Video Showcase Modal */}
      <AnimatePresence>
        {selectedStudentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudentVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-gray-800 bg-[#0A0518] shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-gray-800/80 bg-[#0F0826] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30">
                    <Play className="h-4 w-4 fill-purple-300 ml-0.5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {selectedStudentVideo.name}
                    </h3>
                    <p className="font-mono text-xs text-purple-300 flex items-center gap-1.5 mt-0.5">
                      <GraduationCap className="h-3.5 w-3.5 text-purple-300 inline" /> {selectedStudentVideo.major} • <span className="text-gray-200 font-semibold">{selectedStudentVideo.project}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStudentVideo(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close video player"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Real Video Player Frame (Responsive Iframe) */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={selectedStudentVideo.videoUrl || "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"}
                  title={`${selectedStudentVideo.name} - ${selectedStudentVideo.project}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-gray-800/80 bg-[#0F0826] px-6 py-4 text-xs font-sans">
                <span className="font-mono text-gray-400">
                  Livingstone College STEM Student Research Showcase
                </span>
                <Link
                  href="/spotlight"
                  onClick={() => setSelectedStudentVideo(null)}
                  className="inline-flex items-center gap-1.5 font-bold text-purple-300 hover:text-white transition-colors"
                >
                  Full Student Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
