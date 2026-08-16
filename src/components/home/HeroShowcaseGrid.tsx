'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Play, Users, GraduationCap } from 'lucide-react';

export interface SelectedVideo {
  name: string;
  major: string;
  project: string;
  videoUrl: string;
}

interface HeroShowcaseGridProps {
  onSelectVideo: (video: SelectedVideo) => void;
}

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
      { name: 'Marcus Vance', major: 'CIS Major', img: '/images/student-showcase/student1.jpeg' },
      { name: 'Aaliyah Jones', major: 'Biology Major', img: '/images/student-showcase/student2.jpeg' },
      { name: 'Tariq Simmons', major: 'Mathematics', img: '/images/student-showcase/student3.jpeg' },
      { name: 'Marcus Vance', major: 'CIS Major', img: '/images/student-showcase/student1.jpeg' },
      { name: 'Aaliyah Jones', major: 'Biology Major', img: '/images/student-showcase/student2.jpeg' },
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
      { name: 'Maya Lin', major: 'Business & STEM', img: '/images/student-showcase/student4.jpeg' },
      { name: 'Devin Carter', major: 'CIS Fellow', img: '/images/student-showcase/student5.jpeg' },
      { name: 'Dr. E. Vance', major: 'Biology Faculty', img: '/images/student-showcase/student6.jpeg' },
      { name: 'Maya Lin', major: 'Business & STEM', img: '/images/student-showcase/student4.jpeg' },
      { name: 'Devin Carter', major: 'CIS Fellow', img: '/images/student-showcase/student5.jpeg' },
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
      { name: 'Jordan Smith', major: 'Data Science', img: '/images/student-showcase/student7.jpeg' },
      { name: 'Elena Rostova', major: 'Genetics Lab', img: '/images/student-showcase/student8.jpeg' },
      { name: 'Tariq Simmons', major: 'Math Honors', img: '/images/student-showcase/student9.jpeg' },
      { name: 'Jordan Smith', major: 'Data Science', img: '/images/student-showcase/student7.jpeg' },
      { name: 'Elena Rostova', major: 'Genetics Lab', img: '/images/student-showcase/student8.jpeg' },
    ],
  },
];

export default function HeroShowcaseGrid({ onSelectVideo }: HeroShowcaseGridProps) {
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
      <div className="tilted-grid-container grid grid-cols-2 sm:grid-cols-3 gap-4 w-[115%] -ml-6 -mt-10">
        {columns.map((column) => (
          <motion.div
            key={column.key}
            animate={shouldAnimate ? { y: [column.from, column.to] } : undefined}
            transition={{ duration: column.duration, repeat: Infinity, ease: 'linear' }}
            className={column.className}
          >
            {column.students.map((student, idx) => (
              <div
                key={`${column.key}-${idx}`}
                onClick={() => onSelectVideo({
                  name: student.name,
                  major: student.major,
                  project: 'Undergraduate STEM Showcase Project',
                  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                })}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03] ${column.hoverBorder}`}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={student.img}
                    alt={student.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Play Icon Badge */}
                  <div className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-colors ${column.badgeHover}`}>
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </div>
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
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
