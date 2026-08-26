'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users } from 'lucide-react';
import { StudentSpotlight } from '@/data/stemData';

interface FeaturedStudentsSectionProps {
  featuredStudents: StudentSpotlight[];
}

export default function FeaturedStudentsSection({ featuredStudents }: FeaturedStudentsSectionProps) {
  // Select students: Jerome, Sally, Aïda, Yves, Swetakshi, George
  const selectedIds = ['24', '1', '4', '16', '25'];
  const displayStudents = featuredStudents.filter((student) => selectedIds.includes(student.id));

  return (
    <section className="relative bg-white py-24 md:py-32 border-b border-gray-200/80 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-2 text-xs sm:text-sm font-bold text-purple-800">
              <Users className="h-4 w-4 text-purple-600" /> Leaders
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 uppercase leading-tight">
              Featured <span className="text-purple-600">Students</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-lg">
              Our students secure internships at Microsoft, conduct independent NIH oncology research, and win regional hackathons.
            </p>
          </div>
          <Link
            href="/spotlight"
            className="btn-gradient-lime font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B051D] px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            View Directory <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Student Grid (4 Columns for 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-purple-400 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/spotlight?id=${student.id}`} className="flex flex-col h-full justify-between">
                <div>
                  {/* Student Photo */}
                  <div className="relative aspect-[3/4] w-full border-b border-gray-100 bg-gray-100">
                    <Image
                      src={student.cardPhoto || student.photo}
                      alt={student.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: student.cardPhoto ? 'center' : student.photoPosition || 'center' }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-4 left-4 border border-purple-400/40 bg-purple-600 text-[#e3fc51] backdrop-blur-md px-3.5 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider shadow-md">
                      {student.gradYear ? `Class of ${student.gradYear}` : 'Featured Student'}
                    </div>
                  </div>

                  {/* Student Credentials */}
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                        {student.major}
                      </span>
                      <h3 className="font-serif text-xl font-extrabold text-gray-900 mt-2">{student.name}</h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm leading-relaxed text-gray-600 line-clamp-3">
                      &ldquo;{student.bio}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {/* Spotlight Achievement */}
                  <div className="border-t border-gray-100 pt-4 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Highlight</span>
                    <p className="font-sans text-xs sm:text-sm text-purple-700 font-bold line-clamp-1">
                      {student.awards[0] || student.internships[0]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-purple-600 hover:text-purple-800">
                      View profile details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
