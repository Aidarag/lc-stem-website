'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users } from 'lucide-react';
import { studentSpotlights } from '@/data/stemData';

const marqueeCards = [
  { id: '1', name: 'Jerome Adonis', major: 'CIS Major', project: 'AWS Cloud Scaling Solutions', img: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg' },
  { id: '2', name: 'Francis Boadu', major: 'Biology Pre-Med', project: 'Oncology Research & Mammalian Assays', img: '/images/biology-student-success/francis-boadu-duke-research.png' },
  { id: '3', name: 'Kamar Goudelock', major: 'Business & STEM', project: 'Wells Fargo Control Operations Analytics', img: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg' },
  { id: '4', name: 'Sally Adenutsi', major: 'Math Honors', project: 'Global Leadership & Math Mentorship', img: '/images/math-student-success/sally-adenutsi-profile.jpeg' },
  { id: '16', name: 'Aïda Garba', major: 'CIS Major', project: 'Student Success Center Digital Timesheet', img: '/images/cis-student-success/im-aida-garba-profile.jpeg' },
  { id: '8', name: 'Jephter Ofori', major: 'CIS Fellow', project: 'Syngenta Data Automation Scripting', img: '/images/cis-student-success/jephter-ofori-syngenta-profile.jpeg' },
  { id: '15', name: 'Francis Suapim', major: 'Mathematics', project: 'ACSC Ghanaian MSME Structural Analysis', img: '/images/math-student-success/francis-suapim-profile-v2.png' },
  { id: '6', name: 'Emmanuel Amponsah', major: 'Business & STEM', project: 'Asset Management & Equity Research', img: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg' },
  // Duplicate for seamless infinite marquee scroll
  { id: '1', name: 'Jerome Adonis', major: 'CIS Major', project: 'AWS Cloud Scaling Solutions', img: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg' },
  { id: '2', name: 'Francis Boadu', major: 'Biology Pre-Med', project: 'Oncology Research & Mammalian Assays', img: '/images/biology-student-success/francis-boadu-duke-research.png' },
  { id: '3', name: 'Kamar Goudelock', major: 'Business & STEM', project: 'Wells Fargo Control Operations Analytics', img: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg' },
  { id: '4', name: 'Sally Adenutsi', major: 'Math Honors', project: 'Global Leadership & Math Mentorship', img: '/images/math-student-success/sally-adenutsi-profile.jpeg' },
  { id: '16', name: 'Aïda Garba', major: 'CIS Major', project: 'Student Success Center Digital Timesheet', img: '/images/cis-student-success/im-aida-garba-profile.jpeg' },
  { id: '8', name: 'Jephter Ofori', major: 'CIS Fellow', project: 'Syngenta Data Automation Scripting', img: '/images/cis-student-success/jephter-ofori-syngenta-profile.jpeg' },
  { id: '15', name: 'Francis Suapim', major: 'Mathematics', project: 'ACSC Ghanaian MSME Structural Analysis', img: '/images/math-student-success/francis-suapim-profile-v2.png' },
  { id: '6', name: 'Emmanuel Amponsah', major: 'Business & STEM', project: 'Asset Management & Equity Research', img: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg' },
];

export default function CommunityShowcaseSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(marqueeRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = isInView && !shouldReduceMotion;

  return (
    <section className="relative bg-[#070312] py-28 md:py-36 border-b border-white/10 text-white overflow-hidden">
      {/* Subtle Dotted Globe Vector in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
        <svg className="w-[800px] h-[800px] text-purple-500 fill-current" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Main Community Central Text Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-badge px-4 py-2 text-xs sm:text-sm text-purple-200 border-purple-500/30 bg-purple-500/10 mb-4 shadow-md">
            <GraduationCap className="h-4 w-4 text-purple-400" /> Community
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Join our community <br />
            where <span className="text-gradient-purple-pink">innovation thrives</span>
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Unlock the amazing benefits of joining Livingstone STEM—grow your technical skills, co-author research papers, win hackathons, and build lifelong professional connections.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href="/programs"
              className="btn-gradient-lime inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm sm:text-base font-extrabold tracking-wide shadow-xl transition-all cursor-pointer"
            >
              Explore Programs <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* High-End Continuous Marquee Scrolling Showcase */}
        <div ref={marqueeRef} className="relative w-full overflow-hidden pt-10 pb-4">
          {/* Left and Right Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#0B051D] via-[#0B051D]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#0B051D] via-[#0B051D]/80 to-transparent z-20 pointer-events-none" />

          {/* Infinite Marquee Track Container */}
          <div className="flex w-max">
            <motion.div
              animate={shouldAnimate ? { x: ['0%', '-50%'] } : undefined}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              className="flex space-x-6 shrink-0 pr-6"
            >
              {marqueeCards.map((card, idx) => {
                const spotlight = studentSpotlights.find((s) => s.id === card.id);
                const photoPosition = spotlight?.photoPosition || 'center';

                return (
                  <Link
                    key={`marquee-card-${idx}`}
                    href={`/spotlight?id=${card.id}`}
                    className="group relative w-60 sm:w-64 shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-400/80 hover:shadow-purple-500/20"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: photoPosition }}
                        sizes="256px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Student Info Bottom */}
                      <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left">
                        <p className="font-sans text-base sm:text-lg font-extrabold text-white flex items-center gap-1.5 leading-snug">
                          <Users className="h-4 w-4 text-purple-300 shrink-0" /> {card.name}
                        </p>
                        <p className="font-mono text-xs text-purple-200 font-bold flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-purple-300 shrink-0" /> {card.major}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
