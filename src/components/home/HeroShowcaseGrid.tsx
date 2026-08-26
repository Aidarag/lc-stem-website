'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Users, GraduationCap } from 'lucide-react';
import { studentSpotlights } from '@/data/stemData';

const columns = [
  {
    key: 'col1',
    className: 'space-y-4',
    duration: 26,
    from: 0,
    to: -700,
    hoverBorder: 'group-hover:border-purple-400/50',
    badgeHover: 'group-hover:bg-purple-600',
    iconColor: 'text-purple-300',
    majorColor: 'text-purple-200',
    students: [
      { id: '24', name: 'Prosper Nasangma', major: 'Computer and Information Systems', img: '/images/cis-student-success/prosper-profile.png' },
      { id: '1', name: 'Jerome Adonis', major: 'CIS Major', img: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg' },
      { id: '2', name: 'Francis Boadu', major: 'Biology Major', img: '/images/biology-student-success/francis-boadu-duke-research.png' },
      { id: '4', name: 'Sally Adenutsi', major: 'Mathematics', img: '/images/math-student-success/sally-adenutsi-profile.jpeg' },
      { id: '24', name: 'Prosper Nasangma', major: 'Computer and Information Systems', img: '/images/cis-student-success/prosper-profile.png' },
      { id: '1', name: 'Jerome Adonis', major: 'CIS Major', img: '/images/cis-student-success/jerome-adonis-aws-profile.jpeg' },
      { id: '2', name: 'Francis Boadu', major: 'Biology Major', img: '/images/biology-student-success/francis-boadu-duke-research.png' },
    ],
  },
  {
    key: 'col2',
    className: 'space-y-4',
    duration: 32,
    from: -700,
    to: 0,
    hoverBorder: 'group-hover:border-purple-400/50',
    badgeHover: 'group-hover:bg-pink-600',
    iconColor: 'text-pink-300',
    majorColor: 'text-pink-200',
    students: [
      { id: '3', name: 'Kamar Goudelock', major: 'Business & STEM', img: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg' },
      { id: '8', name: 'Jephter Ofori', major: 'CIS Fellow', img: '/images/cis-student-success/jephter-ofori-syngenta-profile.jpeg' },
      { id: '5', name: 'Robert Osei', major: 'Biology Major', img: '/images/biology-student-success/robert-osei-poe-center-internship.jpeg' },
      { id: '3', name: 'Kamar Goudelock', major: 'Business & STEM', img: '/images/business-student-success/kamar-goudelock-wells-fargo-internship.jpeg' },
      { id: '8', name: 'Jephter Ofori', major: 'CIS Fellow', img: '/images/cis-student-success/jephter-ofori-syngenta-profile.jpeg' },
    ],
  },
  {
    key: 'col3',
    className: 'hidden sm:block space-y-4',
    duration: 28,
    from: 0,
    to: -700,
    hoverBorder: 'group-hover:border-purple-400/50',
    badgeHover: 'group-hover:bg-indigo-600',
    iconColor: 'text-indigo-300',
    majorColor: 'text-indigo-200',
    students: [
      { id: '15', name: 'Francis Suapim', major: 'Mathematics', img: '/images/math-student-success/francis-suapim-profile-v2.png' },
      { id: '6', name: 'Emmanuel Amponsah', major: 'Business & STEM', img: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg' },
      { id: '13', name: 'Naomi Nuhamin Bullo', major: 'Biology Major', img: '/images/biology-student-success/naomi-nuhamin-bullo-profile.jpeg' },
      { id: '15', name: 'Francis Suapim', major: 'Mathematics', img: '/images/math-student-success/francis-suapim-profile-v2.png' },
      { id: '6', name: 'Emmanuel Amponsah', major: 'Business & STEM', img: '/images/business-student-success/emmanuel-amponsah-business-profile.jpeg' },
    ],
  },
];

export default function HeroShowcaseGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = isInView && !shouldReduceMotion;

  return (
    <div ref={containerRef} className="lg:col-span-6 relative h-[560px] md:h-[640px] overflow-hidden rounded-3xl">
      {/* Fade masks top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B051D] via-[#0B051D]/60 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B051D] via-[#0B051D]/60 to-transparent z-20" />

      {/* Tilted Container */}
      <div className="tilted-grid-container grid w-full -translate-x-2 grid-cols-2 gap-4 -mt-10 sm:grid-cols-3 lg:-translate-x-12">
        {columns.map((column) => (
          <motion.div
            key={column.key}
            animate={shouldAnimate ? { y: [column.from, column.to] } : undefined}
            transition={{ duration: column.duration, repeat: Infinity, ease: 'linear' }}
            className={column.className}
          >
            {column.students.map((student, idx) => {
              const spotlight = studentSpotlights.find((s) => s.id === student.id);
              const photoPosition = spotlight?.photoPosition || 'center';
              const photoZoom = spotlight?.photoZoom;

              return (
                <Link
                  key={`${column.key}-${idx}`}
                  href={`/spotlight?id=${student.id}`}
                  className={`group relative block cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] ${column.hoverBorder}`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={student.img}
                      alt={student.name}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                      className={`object-cover transition-transform duration-500 ${photoZoom ? 'scale-[1.3] group-hover:scale-[1.35]' : 'group-hover:scale-105'}`}
                      style={{ objectPosition: photoPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Info Overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-sans text-sm font-bold text-white flex items-center gap-1">
                        <Users className={`h-4 w-4 inline ${column.iconColor}`} /> {student.name}
                      </p>
                      <p className={`font-mono text-xs mt-0.5 font-semibold flex items-center gap-1 ${column.majorColor}`}>
                        <GraduationCap className={`h-3.5 w-3.5 inline ${column.iconColor}`} /> {student.major}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
